import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ui from '../packages/index.js'

const app = createApp(App)
app.config.globalProperties.$ELEMENT = { size: 'default' }

app.use(ui)
  .use(router)
  .mount('#app')
