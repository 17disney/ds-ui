import Tab from './Tab'
import TabWheelItem from './TabWheelItem'

Tab.install = (Vue) => {
  Vue.component(Tab.name, Tab)
  Vue.component(TabWheelItem.name, TabWheelItem)
}

export default Tab
