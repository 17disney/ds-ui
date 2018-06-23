import Card from './Card'
import CardAtt from './CardAtt'

Card.install = (Vue) => {
  Vue.component(Card.name, Card)
  Vue.component(CardAtt.name, CardAtt)
}

export default Card
