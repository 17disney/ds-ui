import Button from './Button'
import Card from './Card'
import Cell from './Cell'
import Header from './Header'
import IconBtn from './IconBtn'
import List from './List'
import Loading from './Loading'
import Mark from './Mark'
import Page from './Page'
import Scroll from './Scroll'
import Select from './Select'
import Tab from './Tab'
import Tabbar from './Tabbar'
import TabItem from './TabItem'

function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  const components = [
    Button,
    Card,
    Cell,
    Header,
    IconBtn,
    List,
    Loading,
    Mark,
    Page,
    Scroll,
    Tab,
    Select,
    Tabbar,
    TabItem
  ]
  components.forEach(Component => {
    Component.install(Vue)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default {
  install
}
