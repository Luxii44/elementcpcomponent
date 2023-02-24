import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/dist/vite'
import DefineOptions from 'unplugin-vue-define-options/dist/vite'
// import {resolve} from "path";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  // build:{
  //   // target: ['modules'], // 设置最终构建的浏览器兼容目标
  //   outDir:'dist',// 指定输出路径
  //   assetsDir: 'assets', // 指定生成静态文件目录
  //   lib:{
  //     entry:resolve(__dirname,"./packages/components/index.ts"),
  //     name: "wmcomponent",
	// 		fileName: "wmcomponent",
  //   },
  //   rollupOptions: {
  //     //忽略打包vue文件
  //     external: ['vue'],
  //     output:{
  //       globals:{
  //         vue:"Vue",
  //         el:"Vue"
  //       }
  //     }
  //   }
  // },
  // resolve:{
  //   alias: {
  //     "@wmcomponent": resolve(__dirname, "packages"),
  //     "@wmcomponent/untils": resolve(__dirname, "packages/untils"),
  //     "@wmcomponent/components": resolve(__dirname, "packages/components"),
  //   }
  // },
  plugins: [
    VueMacros({
      plugins: {
        vue: vue(),
        vueJsx: VueJsx(),
      },
    }),
    DefineOptions(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
