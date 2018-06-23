<style lang='stylus'>
@require '../../../styles/disney/var/color.styl';
@require '../../../styles/disney/mixin/index.styl';

.ds-card-att {
  float: left;
  display: inline-block;
  height: 100px;
  width: 200px;
  border-radius: 8px;
  border: 1px solid $color-primary-s;
  display: flex;

  .att-media {
    width: 48px;
    height: 48px;
  }
}
</style>
<template>
  <div class="ds-card-att">
    <att-media :medias="data.medias"></att-media>
  </div>
</template>

<script>
/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: xank <xank@qq.com>  Blog：https://www.xank.cn
+-----------------------------------------------------------------------------------------------------------------------
| Ds-Att-Card
|
*/

const NAME = 'ds-card-att'

export default {
  name: NAME,

  components: {

  },

  props: {
    data: Object
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