<template>
  <a class="ds-tab-item" @click="$parent.$emit('input', id)" :class="{ 'is-selected': $parent.value === id }">
    <div class="ds-tab-item--label">
      <slot></slot>
    </div>
  </a>
</template>

<script>

export default {
  name: 'ds-tab-wheel-item',
  props: ['id']
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.ds-tab-item {
  display: block;
  padding: 7px 10px;
  flex: 1;
  text-decoration: none;

  &--label {
    color: inherit;
    font-weight: inherit;
    font-size: 20px;
    line-height: 18px;
  }

  &.is-selected {
    font-weight: 700;
  }
}
</style>
