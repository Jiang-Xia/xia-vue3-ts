import Vue from 'vue'
import XiaLogin from './index'
// const XiaLoginConstructor = Vue.extend(XiaLogin)

export default XiaLogin
// let XiaLoginInstance:any

// function createXiaLogin(args = {}) {
//   // 创建一个vue构造器 初始化时可传参到.vue文件组件中
//   XiaLoginInstance = new XiaLoginConstructor({ data: {}})
//   // 当$mount() 函数没有传任何参数时 返回未挂载dom节点（自己理解：类似创建dom片段但是未渲染dom树上）
//   XiaLoginInstance.$mount()
//   // 手动 将 生成的对应 dom 插进 body 里面
//   document.body.appendChild(XiaLoginInstance.$el)
//   // console.log(XiaLoginConstructor)
//   // console.log(XiaLoginInstance)

//   return XiaLoginInstance
// }
// // 可选参数
// export function showXiaLogin(args?:any, callback?:any) {
//   // 每次调用时都可传参给组件的方法
//   // 为了让当前的实例 只有一个，防止占用太多内存
//   if (!XiaLoginInstance) {
//     XiaLoginInstance = createXiaLogin(args)
//   }
//   //   console.log(XiaLoginInstance )
//   XiaLoginInstance.showXiaLogin(args)
//   callback && callback()
//   return XiaLoginInstance
// }

// export function hideXiaLogin() {
//   if (!XiaLoginInstance) return
//   XiaLoginInstance.hideXiaLogin()
//   return XiaLoginInstance
// }

// export function destoryXiaLogin() {
//   if (!XiaLoginInstance) return
//   XiaLoginInstance.destory()
// }
