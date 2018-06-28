<style lang='stylus'>
@require '../../../styles/disney/var/color.styl';
@require '../../../styles/disney/mixin/index.styl';

.ds-mark-item {
  text-align: center;

  &__label {
    font-size: 12px;
    line-height: 28px;
    font-weight: 600;
  }

  &__content {
    font-size: 20px;
    line-height: 36px;
    color: $color-primary;
  }
}
</style>
<template>
  <div class="ds-mark-item">
    <div class="ds-mark-item__content">
      <slot></slot>
    </div>
    <div class="ds-mark-item__label">{{label}}</div>
  </div>
</template>

<script>

const NAME = 'ds-mark-item'

export default {
  name: NAME,

  components: {},

  props: {
    label: String
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