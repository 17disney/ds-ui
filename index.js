import Card from './Card'
import Cell from './Cell'
import IconBtn from './IconBtn'
import Scroll from './Scroll'
import Select from './Select'

function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  const components = [Card, Cell, IconBtn, Scroll, Select]
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
