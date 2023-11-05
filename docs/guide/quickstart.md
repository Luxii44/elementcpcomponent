# 快速开始

## 完整引入
目前只支持全局引入，之后会增加按需引入功能
```typescript
// main.ts
import { createApp } from 'vue'
import WmComponent from ' @luxii/wmcomponent'
import ' @luxii/wmcomponent/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(WmComponent)
app.mount('#app')
```