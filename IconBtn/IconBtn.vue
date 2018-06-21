<style lang='stylus'>
@require '../../../styles/disney/var/color.styl';
@require '../../../styles/disney/mixin';

.ds-icon-btn {
  text-align: center;
  padding: 10px 0;

  &__icon {
    display: inline-block;
    width: 48px;
    height: 48px;
    background: $color-primary-s;
    border-radius: 48px;
  }

  &__name {
    color: $color-dark-grey;
    line-height: 24px;
    font-size: 12px;
    font-weight: 600;
  }
}
</style>
<template>
  <div class="ds-icon-btn">
    <div class="ds-icon-btn__icon">

    </div>
    <div class="ds-icon-btn__name">
      {{name}}
    </div>
  </div>
</template>

<script>
/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: xank <xank@qq.com>  Blog：https://www.xank.cn
+-----------------------------------------------------------------------------------------------------------------------
| Ds-Icon-Btn
|
*/

const NAME = 'ds-icon-btn'

export default {
  name: NAME,

  components: {},

  props: {
    name: String
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