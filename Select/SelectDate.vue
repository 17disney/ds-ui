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
  &-list{
  }

  &-item {
    display: inline-block;
    margin-right: 16px;
    text-align: center;

    &.is-active {
      .date__day {
        background: $color-primary-dark;
        color: #FFF;
      }
    }

    &:first-child {
      margin-left: 16px;
    }

    &:last-child {
      margin-right: 16px;
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
    <ds-scroll :bindscroll="handleBindscroll" class="select-date-scroll" :options="options">
      <ul class="date-list" ref="tabList">
        <li class="date-item" :class="{'is-active': item.value === select}" @click="handleClick(item.value)" v-for="(item, index) in dates" :key="index">
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
    select: String,
    dateRange: Array
  },

  data() {
    return {
      options: {
        scrollX: true,
        scrollY: false
      },
      dates: []
    }
  },

  computed: {
    year() {
      if (this.select) {
        return moment(this.select, 'YYYY-MM-DD').format('YYYY年')
      } else {
        return '----年'
      }
    },
    month() {
      if (this.select) {
        return moment(this.select, 'YYYY-MM-DD').format('M月')
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
      console.log(val)
      this.init()
    }
  },
  methods: {
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
    handleClick(val) {
      this.$emit('click', val)
    },
    handleBindscroll(e) {
      console.log(e)
    },
    initTabListWidth() {
      const tabList = this.$refs.tabList
      const items = tabList.children
      let width = 0
      for (let i = 0; i < items.length; i++) {
        width += items[i].offsetWidth + 32
      }
      tabList.style.width = (width + 1) + 'px'
    },
  }
}
</script>
