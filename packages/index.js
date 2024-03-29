import Accordion from './accordion/accordion.vue'
import AccordionItem from './accordion/accordion-item.vue'
import Alert from './alert'
import Badge from './badge'
import Button from './button'
import CheckBox from './checkbox'
import CheckBoxGroup from './checkbox/checkbox-group.vue'
import Input from './input'
import Link from './link'
import Radio from './radio'
import RadioGroup from './radio/radio-group.vue'
import Silder from './silder'
import Switch from './switch'
import Tag from './tag'
import Menu from './menu/Menu.vue'
import SubMenu from './menu/SubMenu.vue'
import MenuItem from './menu/MenuItem.vue'
import Card from './card'
import Row from './row'
import Col from './col'
import Progress from './progress'
import Table from './table/Table.vue'
import TableColumn from './table/TableColumn.vue'

import './styles/index.scss'

const components = [
  Accordion,
  Button,
  AccordionItem,
  Alert,
  Badge,
  CheckBox,
  CheckBoxGroup,
  Input,
  Link,
  Radio,
  RadioGroup,
  Switch,
  Tag,
  Silder,
  Menu,
  SubMenu,
  MenuItem,
  Card,
  Row,
  Col,
  Progress,
  Table,
  TableColumn
]

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}

export {
  Accordion,
  Button,
  AccordionItem,
  Alert,
  Badge,
  CheckBox,
  CheckBoxGroup,
  Input,
  Link,
  Radio,
  RadioGroup,
  Switch,
  Tag,
  Silder,
  Menu,
  SubMenu,
  MenuItem,
  Card,
  Row,
  Col,
  Progress,
  Table,
  TableColumn
}
