<style lang='stylus'>
@require '../../../styles/disney/var/color.styl';
@require '../../../styles/disney/mixin/index.styl';

$header-height = 56px;
$z-index-normal = 1000;

.ds-header {
  z-index: 100;
  align-items: center;
  background-color: #FFF;
  box-sizing: border-box;
  display: flex;
  font-size: 14px;
  height: $header-height;
  line-height: 1;
  // padding: 0 10px;
  position: relative;
  text-align: center;
  white-space: nowrap;

  .line {
    setBottomLine();
  }

  &-button {
    // flex: 0.5;
    background: #FFF;
    z-index: 1;

    > a {
      color: inherit;
    }

    &.is-left {
      text-align: left;
    }

    &.is-right {
      text-align: right;
    }
  }

  &-title {
    font-weight: normal;
    flex: 1;
    font-size: 19px;
    font-weight: 600;
  }

  &.is-fixed {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 100;
  }

  &.is-wheel {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);

    .ds-tab__item {
      padding: 20px 12px;
      // padding-bottom 30px;
      color: $color-primary-dark;
      font-size: 20px;

      &.is-selected {
        font-weight: 600;
        color: $color-primary-dark;
      }
    }
  }

  .scroll-mark-bg {
    width: 60px;
    height: 30px;
    position: absolute;
    left: 50%;
    bottom: -30px;
    margin-left: -30px;
    overflow: hidden;

    .mark {
      background: #FFF;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
      width: 40px;
      height: 40px;
      margin: -20px auto 0px auto;
      border-radius: 100%;
    }
  }

  .scroll-mark-icon {
    position: absolute;
    z-index: 1;
    left: 50%;
    bottom: -20px;
    width: 40px;
    height: 40px;
    margin-left: -20px;
    font-size: 24px;
    line-height: 40px;
    color: $color-primary-dark;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
<template>
  <header class="ds-header" :class="{ 'is-fixed': fixed, 'is-wheel': wheel }">
    <!-- 左按钮 -->
    <div class="ds-header-button is-left">
      <slot name="left"></slot>
    </div>
    <!-- 标题 -->
    <h1 class="ds-header-title" v-text="title"></h1>
    <!-- 右按钮 -->
    <div class="ds-header-button is-right">
      <slot name="right"></slot>
    </div>

    <!-- 内容 -->
    <slot></slot>

    <!-- 滚动模式 -->
    <div class="scroll-mark-icon" v-if="wheel">
      <slot name="focus-icon"></slot>
    </div>

    <div v-if="wheel" class="scroll-mark-bg">
      <div class="mark"></div>
    </div>

    <div class="line" v-if="line"></div>
  </header>
</template>

<script>
/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: xank <xank@qq.com>  Blog：https://www.xank.cn
+-----------------------------------------------------------------------------------------------------------------------
| Ds-Header 
| 顶部导航
*/

/**
 * @param {boolean} [fixed=false] - 固定顶部
 * @param {string} [title] - 标题
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 *
 * @example
 * <ds-header title="我是标题" fixed>
 *   <ds-button slot="left" icon="back" @click="handleBack">返回</ds-button>
 *   <ds-button slot="right" icon="more"></ds-button>
 * </ds-header>
 */

const NAME = 'ds-header'

export default {
  name: NAME,

  components: {},

  props: {
    fixed: Boolean,
    title: String,
    line: {
      type: Boolean,
      default: false
    },
    wheel: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
    }
  },

  computed: {},

  mounted() { },

  methods: {}
}
</script>