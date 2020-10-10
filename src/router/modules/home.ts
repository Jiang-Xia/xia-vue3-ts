import layout from '@/layout/index'
// activeMenu 用来高亮导航的参数
const home = {
  path: '/home',
  name: 'home',
  component: layout,
  redirect: { path: '/home/result-query' },
  meta: {
    title: '基础数据'
    // role: 'normal'
  },
  children: [
    {
      path: 'result-query',
      name: 'ResultQuery',
      props: true,
      component:() => import('@/views/home/index'),
      meta: {
        activeMenu: '/home'
      }
    }
  ]
}
export default home
