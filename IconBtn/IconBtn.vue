<style lang='stylus'>
@require '../../../styles/disney/var/color.styl';
@require '../../../styles/disney/mixin';

.ds-icon-btn {
  text-align: center;
  padding: 16px 0;
  transition: 0.3s;

  &:active {
    .att-icon {
      color: $color-primary-s;
    }
  }

  &__icon {
    display: inline-block;
    width: 48px;
    height: 48px;
    background: $color-primary-s;
    border-radius: 48px;
  }

  .att-icon {
    transition: 0.3s;
    color: $color-primary;
    font-size: 24px;
  }

  &__name {
    // color: $color-dark-grey;
    line-height: 24px;
    font-size: 13px;
    font-weight: 600;
  }
}
</style>
<template>
  <div class="ds-icon-btn">
    <att-icon :name="icon"></att-icon>
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
    name: String,
    icon: String
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