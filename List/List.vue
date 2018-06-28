<style lang='stylus'>
@require '../../../styles/disney/var/color.styl';
@require '../../../styles/disney/mixin/index.styl';

.ds-list {
  width: 100%;
  padding: 0 16px;

  .ds-list-item{
    &:after{
      // setBottomLine();
    }
  }

  >div {
    position: relative;

    .line {
      setTopLine();
      left: 16px;
      right: 16px;
    }

    &:first-child {
      .line {
        display: none;
      }
    }

    &:last-child {
      padding-bottom: 32px;
    }
  }
}
</style>
<template>
  <div class="ds-list">
    <slot></slot>
  </div>
</template>

<script>
/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: xank <xank@qq.com>  Blog：https://www.xank.cn
+-----------------------------------------------------------------------------------------------------------------------
| Ds-List
|
*/

const NAME = 'ds-list'

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
