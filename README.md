# ypc-ui -- Component library based on vue3.x


## 1. Install
```
npm i ypc-ui
```

## 2. Use
#### ① All introduction

```
import ypcui from 'ypc-ui'
import 'ypc-ui/dist/ypc-ui.css'

createApp(App).use(ypcui)...
```

#### ② On-demand introduction
```
import { Button } from 'ypc-ui'
Vue.component(Button.name,Button)
```

