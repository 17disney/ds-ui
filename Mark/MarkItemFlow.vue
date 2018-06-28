<style lang='stylus'>
@require '../../../styles/disney/var/color.styl';
@require '../../../styles/disney/mixin/index.styl';

.park-flow-num {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .bardge {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 0 auto;

    &.is-yellow {
      background-color: $color-yellow;
    }

    &.is-green {
      background-color: $color-green;
    }

    &.is-orange {
      background-color: $color-orange;
    }

    &.is-red {
      background-color: $color-red;
    }
  }
}
</style>
<template>
  <div class="ds-mark-item-flow">
    {{numName['label']}}
  </div>
</template>

<script>

const INDEX_TYPE = {
  'green': {
    label: '舒适',
    class: 'is-green'
  },
  'yellow': {
    label: '适中',
    class: 'is-yellow'
  },
  'orange': {
    label: '拥挤',
    class: 'is-orange'
  },
  'red': {
    label: '爆满',
    class: 'is-red'
  }
}

const NAME = 'ds-mark-item-flow'
export default {
  name: NAME,
  components: {},
  filters: {
    numGood(val) {
      return (val / 10000).toFixed(1) + '万人'
    }
  },

  props: {
    num: Number
  },

  data() {
    return {

    }
  },

  computed: {
    numName() {
      const { num } = this
      if (num < 30000) {
        return INDEX_TYPE['green']
      } else if (num >= 30000 & num < 45000) {
        return INDEX_TYPE['yellow']
      } if (num >= 45000 & num < 60000) {
        return INDEX_TYPE['orange']
      } else {
        return INDEX_TYPE['red']
      }
    }
  },

  mounted() { },

  methods: {}
}
</script>
