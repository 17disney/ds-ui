<style lang='stylus'>
@require '../../../styles/disney/var/color.styl';
@require '../../../styles/disney/mixin/index.styl';

.ds-card-att {
  float: left;
  display: inline-block;
  width: 180px;
  border-radius: 8px;
  border: 1px solid $color-primary-s;
  text-align: center;
  padding: 10px 10px;

  .att-media {
    display: inline-block;
  }

  .att-name {
    font-size: 15px;
    line-height: 28px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
<template>
  <div class="ds-card-att" @click="handleClick(item)">
    <att-media :medias="data.medias"></att-media>
    <div class="att-name">
      {{data.name}}
    </div>
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

  mounted() {

  },

  methods: {
    handleClick(item) {
      this.$emit('click', item)
    }
  }
}
</script>