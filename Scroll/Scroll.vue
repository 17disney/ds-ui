<style lang='stylus'>
</style>
<template>
  <div ref="wrapper">
    <slot></slot>
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
    options: Object
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