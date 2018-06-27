<style lang='stylus'>
.wrapper {
  overflow: auto;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #fff;

  &.is-header {
    top: 56px;
  }

  .scroll-content {
    position: relative;
    z-index: 1;
  }

  .list-content {
    position: relative;
    z-index: 10;
    background: #fff;

    .list-item {
      height: 60px;
      line-height: 60px;
      font-size: 18px;
      padding-left: 20px;
      border-bottom: 1px solid #e5e5e5;
    }
  }
}

.pulldown-wrapper {
  position: absolute;
  width: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all;

  .after-trigger {
    margin-top: 10px;
  }
}

.pullup-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
}
</style>
<template>
  <div class="page wrapper" :class="'is-' + header" ref="pageWrapper">
    <div class="scroll-content">
      <div ref="listWrapper">
        <slot>
        </slot>
      </div>
      <slot name="pullup" :pullUpLoad="pullUpLoad" :isPullUpLoad="isPullUpLoad">
        <div class="pullup-wrapper" v-if="pullUpLoad">
          <div class="before-trigger" v-if="!isPullUpLoad">
            <span>{{pullUpTxt}}</span>
          </div>
          <div class="after-trigger" v-else>
            <ds-loading></ds-loading>
          </div>
        </div>
      </slot>
    </div>
    <slot name="pulldown" :pullDownRefresh="pullDownRefresh" :pullDownStyle="pullDownStyle" :beforePullDown="beforePullDown" :isPullingDown="isPullingDown" :bubbleY="bubbleY">
      <div ref="pulldown" class="pulldown-wrapper" :style="pullDownStyle" v-if="pullDownRefresh">
        <div class="before-trigger" v-if="beforePullDown">
          <bubble :y="bubbleY"></bubble>
        </div>
        <div class="after-trigger" v-else>
          <div v-if="isPullingDown" class="loading">
            <ds-loading></ds-loading>
          </div>
          <div v-else>
            <span>{{refreshTxt}}</span>
          </div>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: xank <xank@qq.com>  Blog：https://www.xank.cn
+-----------------------------------------------------------------------------------------------------------------------
| Ds-Page
|
*/

import BScroll from 'better-scroll'
import Bubble from './Bubble.vue'

const NAME = 'ds-page'

export default {
  name: NAME,

  components: { Bubble },

  props: {
    header: {
      type: String,
      default: 'default'
    },
    probeType: {
      type: Number,
      default: 1
    },
    pullDownRefresh: {
      type: null,
      default: () => {
        return {
          threshold: 90,
          stop: 40
        }
      }
    },
    pullUpLoad: {
      type: null,
      default: false
    },
    refreshDelay: {
      type: Number,
      default: 20
    }
  },

  data() {
    return {
      beforePullDown: true,
      isRebounding: false,
      isPullingDown: false,
      isPullUpLoad: false,
      pullUpDirty: true,
      pullDownStyle: '',
      bubbleY: 0,
      refreshTxt: '刷新成功',
      scroll: null
    }
  },

  computed: {
    pullUpTxt() {
      const moreTxt = '加载更多'
      const noMoreTxt = '没有更多数据了'
      return this.pullUpDirty ? moreTxt : noMoreTxt
    }
  },

  created() {
    this.pullDownInitTop = -50
  },

  mounted() {
    setTimeout(() => {
      this.initScroll()
    }, 20)
  },

  methods: {
    initScroll() {
      if (!this.$refs.pageWrapper) {
        return
      }

      let options = {
        scrollbar: true,
        probeType: this.probeType,
        scrollY: true,
        scrollX: false,
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad,
        mouseWheel: false
      }

      this.scroll = new BScroll(this.$refs.pageWrapper, options)

      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
        })
      }

      if (this.listenBeforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScrollStart')
        })
      }

      if (this.pullDownRefresh) {
        this._initPullDownRefresh()
      }

      if (this.pullUpLoad) {
        this._initPullUpLoad()
      }
    },
    disable() {
      this.scroll && this.scroll.disable()
    },
    enable() {
      this.scroll && this.scroll.enable()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
    clickItem(e, item) {
      console.log(e)
      this.$emit('click', item)
    },
    destroy() {
      this.scroll.destroy()
    },
    forceUpdate(dirty) {
      if (this.pullDownRefresh && this.isPullingDown) {
        this.isPullingDown = false
        this._reboundPullDown().then(() => {
          this._afterPullDown()
        })
      } else if (this.pullUpLoad && this.isPullUpLoad) {
        this.isPullUpLoad = false
        this.scroll.finishPullUp()
        this.pullUpDirty = dirty
        this.refresh()
      } else {
        this.refresh()
      }
    },
    _initPullDownRefresh() {
      this.scroll.on('pullingDown', () => {
        this.beforePullDown = false
        this.isPullingDown = true
        this.$emit('pullingDown')
      })

      this.scroll.on('scroll', (pos) => {
        if (this.beforePullDown) {
          const bubbleY = Math.max(0, pos.y + this.pullDownInitTop)
          this.bubbleY = bubbleY
          this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`
        } else {
          this.bubbleY = 0
        }

        if (this.isRebounding) {
          this.pullDownStyle = `top:${10 - (this.pullDownRefresh.stop - pos.y)}px`
        }
      })
    },
    _initPullUpLoad() {
      this.scroll.on('pullingUp', () => {
        this.isPullUpLoad = true
        this.$emit('pullingUp')
      })
    },
    _reboundPullDown() {
      const { stopTime = 600 } = this.pullDownRefresh
      console.log('down')
      return new Promise((resolve) => {
        setTimeout(() => {
          this.isRebounding = true
          this.scroll.finishPullDown()
          resolve()
        }, stopTime)
      })
    },
    _afterPullDown() {
      setTimeout(() => {
        this.pullDownStyle = `top:${this.pullDownInitTop}px`
        this.beforePullDown = true
        this.isRebounding = false
        this.refresh()
      }, this.scroll.options.bounceTime)
    }
  }
}
</script>