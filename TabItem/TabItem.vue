<template>
  <a class="ds-tab-item" @click="$parent.$emit('input', id)" :class="{ 'is-selected': $parent.value === id }">
    <div class="ds-tab-item-icon">
      <slot name="icon"></slot>
    </div>
    <div class="ds-tab-item-label">
      <slot></slot>
    </div>
  </a>
</template>

<script>
/**
 * ds-tab-item
 * @desc 搭配 tabbar 或 navbar 使用
 * @param {*} id - 选中后的返回值，任意类型
 * @param {slot} [icon] - icon 图标
 * @param {slot} - 文字
 *
 * @example
 * <ds-tab-item>
 *   <img slot="icon" src="http://placehold.it/100x100">
 *   订单
 * </ds-tab-item>
 */
export default {
  name: 'ds-tab-item',
  props: ['id']
};
</script>

<style lang='stylus'>
@require '../../../styles/disney/var/color.styl';
@require '../../../styles/disney/mixin';

$tab-item-font-size = 12px;

.ds {
  &-tab-item {
    display: block;
    padding: 7px 0;
    flex: 1;
    text-decoration: none;

    .is-icon {
      size: 24px;
      margin: 0 auto 5px;

      &:empty {
        display: none;
      }

      & > * {
        display: block;
        size: 100%;
      }
    }

    .is-label {
      color: inherit;
      font-size: $tab-item-font-size;
      line-height: 1;
    }
  }
}
</style>
