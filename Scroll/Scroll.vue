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
  <div class="ds-scroll" ref="wrapper">
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
    }
  },

  data() {
    return {
      scroll: null
    }
  },

  computed: {},

  mounted() {
    this.$nextTick(() => {
      this.initScroll()
    })
  },

  methods: {

    initScroll() {
      if (!this.$refs.wrapper) {
        return
      }

      let options = {
        click: this.click,
        scrollY: this.freeScroll || this.direction === DIRECTION_V,
        scrollX: this.freeScroll || this.direction === DIRECTION_H
      }

      this.scroll = new BScroll(this.$refs.wrapper, options)
    }
  }
}
</script>