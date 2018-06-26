import Map from './Map'
import AttMarker from './AttMarker'

Map.install = (Vue) => {
  Vue.component(Map.name, Map)
  Vue.component(AttMarker.name, AttMarker)
}

export default Map
