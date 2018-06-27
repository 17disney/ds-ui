<style lang="stylus">
.ds-tab {
  position: absolute;
  width: 100%;
  left: 0px;

  .scroll-wrapper {
    overflow: hidden;
  }

  &.is-wheel {
    .scroll-content {
      display: inline-block;
    }
  }

  .scroll-content {
    .ds-tab-item {
      float: left;
      display: inline-block;
    }
  }

  .scroll-mark {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    position: absolute;
    left: 50%;
    bottom: -20px;
    margin-left: -20px;
    background: #FFF;
  }
}
</style>

<template>
  <div class="ds-tab" :class="{'is-wheel': wheel}">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content" ref="tabList">
        <slot></slot>
      </div>
    </div>
    <slot name="focus"></slot>
  </div>
</template>
<script>
/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: xank <xank@qq.com>  Blog：https://www.xank.cn
+-----------------------------------------------------------------------------------------------------------------------
| Ds-Tab
|
*/

// import BScroll from '@/utils/better-scroll'
import BScroll from '@/service/better-scroll'

const Name = 'ds-tab'
const EVENT_CHANGE = 'change'

export default {
  name: Name,
  
  props: {
    value: {
      // propsync: true
    },
    list: {
      type: Array
    },
    wheel: {
      type: Boolean
    }
  },

  mounted() {
    this.$nextTick(() => {
      this._initTabListWidth()
      this.initScroll()
    })
  },

  data() {
    return {
      viewWidth: 0,
      tabWidth: 0,
      tabListX: [],
      tabListK: []
    }
  },

  methods: {
    initScroll() {
      if (!this.$refs.scroll) {
        return
      }
      const options = {
        scrollX: true,
        scrollY: false
      }
      if (this.wheel) {
        options.horWheel = true
      } else {
        options.initScrollWidth = true
      }

      Object.assign(options, this.options)
      this.scroll = new BScroll(this.$refs.scroll,
        options
      )

      // 滚动触底
      this.scroll.on('scrollEnd', (con) => {
        this.$emit(EVENT_CHANGE, this.scroll.getSelectedIndex())
      })

      // 滚动中
      this.scroll.on('scroll', () => {
        console.log('s')
        this.$emit(EVENT_CHANGE, this.scroll.getSelectedIndex())
      })
    },

    _initTabListWidth() {
      const tabList = this.$refs.tabList
      const items = tabList.children
      let width = 0
      let tabListX = []
      let tabListK = []
      let startK = 0
      for (let i = 0; i < items.length; i++) {
        width += items[i].clientWidth
        if (i === 0) startK = -(width / 2)
        tabListX[i] = width
        tabListK[i] = startK + width
      }

      let viewWidth = this.$refs.scroll.clientWidth
      tabList.style.width = (width + 1) + viewWidth + 'px'
      this.viewWidth = viewWidth
      this.tabWidth = width
      this.tabListX = tabListX
      this.tabListK = tabListK
    }
  }
}
</script>
