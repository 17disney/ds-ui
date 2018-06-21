<style lang='stylus'>
@require '../../../styles/disney/var/color.styl';
@require '../../../styles/disney/mixin';

.ds-cell {
  setBottomLine();
  
  position: relative;
  display: flex;

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