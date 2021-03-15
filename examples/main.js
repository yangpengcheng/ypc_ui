import { createApp } from 'vue'
import App from './App.vue'

import ui from '../packages/index.js'

import '../packages/styles/index.scss'

// import { Button, Input, Card } from '../packages/index.js'

const app = createApp(App)
// app.component(Button.name, Button)
// app.component(Input.name, Input)
// app.component(Card.name, Card)
app.use(ui)
app.mount('#app')
