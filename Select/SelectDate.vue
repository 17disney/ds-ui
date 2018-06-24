<style lang='stylus' scoped>
@require '../../../styles/disney/var/color.styl';
@require '../../../styles/disney/mixin/index.styl';

.select-date {
  background: #FFF;
  position: relative;

  .line {
    setBottomLine();
    left: 16px;
    right: 16px;
  }

  &-meta {
    margin: 0 16px;
    border-bottom: 0.5px solid $color-light-grey-sss;
    color: $color-primary-dark;
    font-size: 20px;
    padding: 8px 0;
  }

  &__month {
    font-weight: 600;
  }

  &-scroll {
    padding: 12px 0;
    font-size: 0px;
  }
}

.date {
  &__week {
    color: $color-primary-dark;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 8px;
  }

  &__day {
    width: 55px;
    height: 55px;
    line-height: 55px;
    border-radius: 100%;
    font-size: 30px;
    color: $color-primary;
  }

  &-list {
  }

  &-item {
    display: inline-block;
    // margin-right: 16px;
    padding: 0 8px;
    text-align: center;

    &.is-active {
      .date__day {
        background: $color-primary-dark;
        color: #FFF;
      }
    }

    &:first-child {
      margin-left: 8px;
    }

    &:last-child {
      margin-right: 8px;
    }
  }
}
</style>
<template>
  <div class="select-date">
    <div class="select-date-meta">
      <span class="select-date__year">{{year}}</span>
      <span class="select-date__month">{{month}}</span>
    </div>
    <ds-scroll class="select-date-scroll" direction="horizontal">
      <ul class="date-list" ref="tabList">
        <li class="date-item" :class="{'is-active': item.value === value}" @click="handleClick(item.value)" v-for="(item, index) in dates" :key="index">
          <div class="date__week">星期{{item.week}}</div>
          <div class="date__day">{{item.day}}</div>
        </li>
      </ul>
    </ds-scroll>
    <div class="line"></div>
  </div>
</template>

<script>
import moment from 'moment'
import { timeFormat } from 'package/17disney-common/filters'

const NAME = 'ds-select-date'

function compareDate(date1, date2) {
  if (date1 === date2) {
    return 0
  }
  return date1 > date2 ? 1 : -1
}

function nextDate(date) {
  return moment(date).add(1, 'd').format('YYYY-MM-DD')
}

export default {
  name: NAME,

  components: {},

  props: {
    value: {
      required: true
    },
    dateRange: Array
  },

  data() {
    return {
      selected: null,
      options: {
        scrollX: true,
        scrollY: false
      },
      dates: []
    }
  },

  computed: {
    year() {
      if (this.value) {
        return moment(this.value, 'YYYY-MM-DD').format('YYYY年')
      } else {
        return '----年'
      }
    },
    month() {
      if (this.value) {
        return moment(this.value, 'YYYY-MM-DD').format('M月')
      } else {
        return '--月'
      }
    }
  },

  mounted() {
    this.init()
  },
  watch: {
    dateRange(val) {
      this.init()
    },
    value(val) {
      this.selected = val
    },
    selected(val) {
      this.$emit('input', val)
    }
  },
  methods: {
    // 初始化日期
    init() {
      const [start, end] = this.dateRange
      const result = []
      if (start && end) {
        let current = start
        while (compareDate(current, end) <= 0) {
          result.push({
            value: current,
            day: timeFormat(current, 'D'),
            week: timeFormat(current, 'd'),
            disabled: false
          })
          current = nextDate(current)
        }
        this.dates = result
        this.$nextTick(() => {
          this.initTabListWidth()
        })
      }
    },
    // 选择日期
    handleClick(val) {
      this.selected = val
      this.$emit('change', val)
    },
    handleBindscroll(e) {
      console.log(e)
    },
    initTabListWidth() {
      const tabList = this.$refs.tabList
      const items = tabList.children
      let width = 0
      for (let i = 0; i < items.length; i++) {
        width += items[i].offsetWidth
      }
      tabList.style.width = (width + 16) + 'px'
    },
  }
}
</script>
