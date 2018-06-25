<style lang='stylus'>
.ds-scroll {
  overflow: hidden;
  position: relative;
  width: 100%;

  &-wrapper {
    position: relative;
    z-index: 1;
    display: inline-block;
  }
}
</style>
<template>
  <div class="ds-scroll" :ref="ref">
    <div class="ds-scroll-wrapper">
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: xank <xank@qq.com>  Blog：https://www.xank.cn
+-----------------------------------------------------------------------------------------------------------------------
| Ds-Scroll
|
*/

import BScroll from 'better-scroll'

const NAME = 'ds-scroll'
const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'

export default {
  name: NAME,

  components: {},

  props: {
    direction: {
      type: String,
      default: DIRECTION_V
    },
    click: {
      type: Boolean,
      default: true
    },
    startY: {
      type: Number,
      default: 0
    },
  },

  data() {
    return {
      scroll: null,
      ref: null
    }
  },

  computed: {},

  mounted() {
    this.ref = 'id' + parseInt(Math.random() * 1000000)
    this.$nextTick(() => {
      this.initScroll()
    })
  },

  methods: {

    initScroll() {
      if (!this.$refs[this.ref]) {
        return
      }

      let options = {
        click: this.click,
        scrollY: this.freeScroll || this.direction === DIRECTION_V,
        scrollX: this.freeScroll || this.direction === DIRECTION_H,
        startY: this.startY,
        mouseWheel: false
      }

      this.scroll = new BScroll(this.$refs[this.ref], options)
    }
  }
}
</script>