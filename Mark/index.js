import Mark from './Mark'
import MarkItem from './MarkItem'
import MarkItemFlow from './MarkItemFlow'

Mark.install = (Vue) => {
  Vue.component(Mark.name, Mark)
  Vue.component(MarkItem.name, MarkItem)
  Vue.component(MarkItemFlow.name, MarkItemFlow)
}

export default Mark
