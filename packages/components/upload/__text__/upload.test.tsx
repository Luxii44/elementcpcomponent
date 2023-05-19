import { afterAll, beforeAll, describe, expect, test,vi,it } from 'vitest'
import {mount} from "@vue/test-utils"
import Upload from '../src/upload.vue'
import type { VNode } from 'vue'
// const _mount = (render: () => VNode) => {
//   return mount(render, { attachTo: document.body })
// }
describe('Upload.vue', () => {
  test('render test', async () => {
    let fileList=[{name:"111",url:"/UserFile/2023-02-21/b0963d1f-0bca-4b88-9077-bf533372343c/微信截图_20230221173636.png",isPicture:true},{name:"222",url:"/UserFile/2023-02-21/b0963d1f-0bca-4b88-9077-bf533372343c/微信截图_20230221173636.png",isPicture:true}]
    it("render",()=>{
      const wrapper = mount(Upload)
      expect(wrapper.exists()).toBeTruthy()
      // 你可以通过 `wrapper.vm` 访问实际的 Vue 实例
      // const vm = wrapper.vm
      // 在控制台将其记录下来即可深度审阅包裹器
      // 我们对 Vue Test Utils 的探索也由此开始
      // console.log(vm)
    })
    it("click is work?",async()=>{
      const wrapper = mount(Upload,{
        props:{fileList}
      })
      const picopen=wrapper.find("el-card")
      await picopen.trigger("click")
      expect(wrapper.emitted()).toHaveProperty("clear-notification");
    })
  })
})