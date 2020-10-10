import { Config } from '@/api/interface'
import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'
import { Store } from 'vuex'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}
declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter;
    $route: Route;
    $store: Store;
    // 以下是在main.ts中挂载到Vue.prototype上的变量
    // $api: any;
    // $mock: any;
    // $configs: any;
  }
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

interface Window {
  BASECONFIG: Config;
  baseFontSize: number;
}