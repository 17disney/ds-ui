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
  padding: 0 10px;
  position: relative;
  text-align: center;
  white-space: nowrap;

  .line {
    setBottomLine();
  }

  &-button {
    flex: 0.5;

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

  .is-fixed {
    position: fixed 0 0 * 0;
    z-index: $z-index-normal;
  }
}
</style>
<template>
  <header class="ds-header" :class="{ 'is-fixed': fixed }">
    <div class="ds-header-button is-left">
      <slot name="left"></slot>
    </div>
    <h1 class="ds-header-title" v-text="title"></h1>
    <div class="ds-header-button is-right">
      <slot name="right"></slot>
    </div>
    <div class="line"></div>
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
    title: String
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