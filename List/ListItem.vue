<style lang='stylus'>
@require '../../../styles/disney/var/color.styl';
@require '../../../styles/disney/mixin/index.styl';

.ds-list-item {
  display: flex;
  padding: 16px;
  align-items: center;

  &.size-mini {
    padding: 8px 16px;
  }

  &__media {
    margin-right: 16px;
  }

  &__content {
    flex: 1;
  }

  &__tail {
  }

  &__title {
    font-size: 18px;
    line-height: 1.3;
    font-weight: 600;
    word-wrap: break-word;
    word-break: break-all;
    margin-bottom: 2px;
  }

  &__desc {
    font-size: 15px;
    font-weight: 500;
    line-height: 1.25;
  }

  .line{
    setBottomLine()
  }
}
</style>
<template>
  <div class="ds-list-item" :class="'size-' + size">
    <div class="ds-list-item__media">
      <slot name="media"></slot>
    </div>
    <div class="ds-list-item__content">
      <slot></slot>
    </div>
    <div class="ds-list-item__tail">
      <slot name="tail"></slot>
    </div>
    <div class="line" v-if="line"></div>
  </div>
</template>

<script>
const NAME = 'ds-list-item'

export default {
  name: NAME,

  components: {},

  props: {
    size: String,
    line: {
      type: Boolean,
      default: true
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