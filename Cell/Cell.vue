<style lang='stylus'>
@require '../../../styles/disney/var/color.styl';
@require '../../../styles/disney/mixin/index.styl';

.ds-cell {
  position: relative;
  display: flex;
  padding: 8px 0;

  &:before {
    setBottomLine();
    left: 16px;
    right: 16px;
  }

  .ds-icon-btn {
    flex: 1;
  }
}
</style>
<template>
  <div class="ds-cell">
    <slot></slot>
  </div>
</template>

<script>
/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: xank <xank@qq.com>  Blog：https://www.xank.cn
+-----------------------------------------------------------------------------------------------------------------------
| Ds-Cell
|
*/
const NAME = 'ds-cell'

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