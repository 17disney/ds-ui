<style lang='stylus'>
@require '../../../styles/disney/var/color.styl';
@require '../../../styles/disney/mixin/index.styl';

.ds-mark {
  width: 100%;
  display: flex;
  padding: 12px 0;

  &-item {
    flex: 1;

    &:not(:first-child) {
      &:after {
        setRightLine();
      }
    }
  }
}
</style>
<template>
  <div class="ds-mark">
    <slot></slot>
  </div>
</template>

<script>
const NAME = 'ds-mark'

export default {
  name: NAME,

  components: {},

  props: {
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