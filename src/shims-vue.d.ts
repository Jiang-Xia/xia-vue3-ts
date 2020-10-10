declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}
declare module 'nprogress' {
  import NProgress from 'nprogress'
  export default NProgress
}
declare module 'js-cookie' {
  import jscookie from 'js-cookie'
  export default jscookie
}
declare module 'ant-design-vue' {
  import * as ant from 'ant-design-vue'
  export default ant
}
