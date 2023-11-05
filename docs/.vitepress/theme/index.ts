import DefaultTheme from 'vitepress/theme'
// import './custom.styl'
import WmComponent from "../../examples/es/defaults"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "../../examples/index.css"
// import VPApp, { NotFound, globals } from '../vitepress'
// import { define } from '../utils/types'
// import 'uno.css'
// import './style.css'
// import type { Theme } from 'vitepress'
import Demo from "../components/Demo.vue"
//export default DefaultTheme


export default ({
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(WmComponent)
    app.use(ElementPlus)
    app.component("Demo", Demo)
  },
  async postRender(context) {
    console.log(context,123)
  }
})