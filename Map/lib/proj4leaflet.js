import L from 'leaflet'
import proj4 from 'proj4'

console.log(proj4)

L.Proj = {}
L.Proj._isProj4Obj = function(a) {
  return typeof a.inverse !== 'undefined' && typeof a.forward !== 'undefined'
}

L.Proj.Projection = L.Class.extend({
  initialize: function(code, def, bounds) {
    var isP4 = L.Proj._isProj4Obj(code)
    this._proj = isP4 ? code : this._projFromCodeDef(code, def)
    this.bounds = isP4 ? def : bounds
  },

  project: function(latlng) {
    var point = this._proj.forward([latlng.lng, latlng.lat])
    return new L.Point(point[0], point[1])
  },

  unproject: function(point, unbounded) {
    var point2 = this._proj.inverse([point.x, point.y])
    return new L.LatLng(point2[1], point2[0], unbounded)
  },

  _projFromCodeDef: function(code, def) {
    console.log(def)
    if (def) {
      proj4.defs(code, def)
    } else if (proj4.defs[code] === undefined) {
      var urn = code.split(':')
      if (urn.length > 3) {
        code = urn[urn.length - 3] + ':' + urn[urn.length - 1]
      }
      if (proj4.defs[code] === undefined) {
        throw 'No projection definition for code ' + code
      }
    }

    return proj4(code)
  }
})

L.Proj.CRS = L.Class.extend({
  includes: L.CRS,

  initialize: function(a, b, c) {
    var code, proj, def, options

    if (L.Proj._isProj4Obj(a)) {
      proj = a
      code = proj.srsCode
      options = b || {}

      this.projection = new L.Proj.Projection(proj, options.bounds)
    } else {
      code = a
      def = b
      options = c || {}
      this.projection = new L.Proj.Projection(code, def, options.bounds)
    }

    L.Util.setOptions(this, options)
    this.code = code
    this.transformation = this.options.transformation

    if (this.options.origin) {
      this.transformation = new L.Transformation(
        1,
        -this.options.origin[0],
        -1,
        this.options.origin[1]
      )
    }

    if (this.options.scales) {
      this._scales = this.options.scales
    } else if (this.options.resolutions) {
      this._scales = []
      for (var i = this.options.resolutions.length - 1; i >= 0; i--) {
        if (this.options.resolutions[i]) {
          this._scales[i] = 1 / this.options.resolutions[i]
        }
      }
    }

    this.infinite = !this.options.bounds
  },

  scale: function(zoom) {
    var iZoom = Math.floor(zoom),
      baseScale,
      nextScale,
      scaleDiff,
      zDiff
    if (zoom === iZoom) {
      return this._scales[zoom]
    } else {
      // Non-integer zoom, interpolate
      baseScale = this._scales[iZoom]
      nextScale = this._scales[iZoom + 1]
      scaleDiff = nextScale - baseScale
      zDiff = zoom - iZoom
      return baseScale + scaleDiff * zDiff
    }
  }
})

export default L.Proj
