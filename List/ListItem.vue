<style lang='stylus'>
.ds-list-item {
  display: flex;
  padding: 8px 0;
  align-items: center;

  &__media {
    margin-right: 16px;
  }

  &__content {
    flex: 1;
  }

  &__tail {
    // float: right;
  }
}
</style>
<template>
  <div class="ds-list-item">
    <div class="ds-list-item__media">
      <slot name="media"></slot>
    </div>
    <div class="ds-list-item__content">
      <slot></slot>
    </div>
    <div class="ds-list-item__tail">
      <slot name="tail"></slot>
    </div>
  </div>
</template>

<script>
const NAME = 'ds-list-item'

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