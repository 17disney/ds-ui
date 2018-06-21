import Cell from './Cell'

Cell.install = (Vue) => {
  Vue.component(Cell.name, Cell)
}

export default Cell
