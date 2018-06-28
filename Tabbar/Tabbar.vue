<style lang='stylus'>
@require '../../../styles/disney/var/color.styl';
@require '../../../styles/disney/mixin/index.styl';

$z-index-normal = 100;

.ds-tabbar {
  position: relative;
  background-color: #FFF;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;

  .line {
    setTopLine();
  }

  &.is-fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: $z-index-normal;
  }

  .ds-tab-item.is-selected {
    color: $color-primary;
  }
}
</style>

<template>
  <div class="ds-tabbar" :class="{'is-fixed': fixed}">
    <div class="line"></div>
    <slot></slot>
  </div>
</template>

<script>
/**
 * ds-tabbar
 * @module components/tabbar
 * @desc 底部 tab，依赖 tab-item
 * @param {boolean} [fixed=false] - 固定底部
 * @param {*} value - 返回 item component 传入的 id
 *
 * @example
 * <ds-tabbar v-model="selected">
 *   <ds-tab-item id="订单">
 *     <img slot="icon" src="http://placehold.it/100x100">
 *     <span slot="label">订单</span>
 *   </ds-tab-item>
 * </ds-tabbar>
 *
 * <ds-tabbar v-model="selected" fixed>
 *   <ds-tab-item :id="['传入数组', '也是可以的']">
 *     <img slot="icon" src="http://placehold.it/100x100">
 *     <span slot="label">订单</span>
 *   </ds-tab-item>
 * </ds-tabbar>
 */

export default {
  name: 'ds-tabbar',

  props: {
    fixed: Boolean,
    value: {}
  }
};
</script>