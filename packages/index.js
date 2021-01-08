import Accordion from './accordion/accordion.vue'
import AccordionItem from './accordion/accordion-item.vue'
import Button from './button'
import Alert from './alert'
import Badge from './badge'
import CheckBox from './checkbox'
import CheckBoxGroup from './checkbox/checkbox-group.vue'
import Input from './input'
import Link from './link'
import Progress from './progress'
import Radio from './radio'
import RadioGroup from './radio/radio-group.vue'
import Switch from './switch'
import Tag from './tag'
import Silder from './silder'

import './styles/index.scss'

const components = [
  Accordion, Button, AccordionItem, Alert, Badge, CheckBox, CheckBoxGroup, Input, Link, Progress, Radio, RadioGroup,
  Switch, Tag, Silder
]

// vue use使用时，必须要有install方法。参数就是vue。
const install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  ...components
}
