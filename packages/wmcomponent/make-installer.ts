// import { provideGlobalConfig } from '@wmcomponent/hooks'
import { INSTALLED_KEY } from '@wmcomponent/constants'
import { version } from './version'
import type { App, Plugin } from '@vue/runtime-core'
// import type { ConfigProviderContext } from '@wmcomponent/tokens'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, options?: any/*ConfigProviderContext */) => {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))

    // if (options) provideGlobalConfig(options, app, true)
  }
  const ElementPlusInstall = (app:App)=>{
      app.use(ElementPlus)
  }
  return {
    version,
    install,
    ElementPlusInstall
  }
}
