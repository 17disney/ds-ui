<style lang='stylus'>
.ds-scroll {
  overflow: hidden;
  position: relative;
  width: 100%;

  &-wrapper {
    // overflow: hidden;
  }
}
</style>
<template>
  <div class="ds-scroll" ref="wrapper">
    <div class="ds-scroll-wrapper">
      <slot></slot>
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

export default {
  name: NAME,

  components: {},

  props: {
    options: {
      type: Object,
      width: Number,
      default: () => {
        return {}
      }
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
      const { options } = this
      this.scroll = new BScroll(this.$refs.wrapper, options)
    }
  }
}
</script>