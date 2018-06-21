import Cell from './Cell'
import IconBtn from './IconBtn'

function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  const components = [Cell, IconBtn]
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
