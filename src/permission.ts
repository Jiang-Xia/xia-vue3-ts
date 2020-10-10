import router from '@/router'
import { getToken } from '@/utils/cookie'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' 
import { getPageTitle } from '@/utils/common'
// import showXiaLogin from '@/components/xia-login/main'
// const whiteList = ['/home', '/index', '/paticent']
router.beforeEach(async(to, from, next) => {
  // next函数 进行管道中的一个钩子，如果执行完了，则导航的状态就是 confirmed （确认的）；否则为false，终止导航。
  const hasToken = getToken()
  const role = to.meta.role
  if (!hasToken) {
    // 未登录
    if (role === 'normal') {
      next()
    } else {
      // 需要登录的 路由 跳转到首页进行登录
      // showXiaLogin()
    }
  } else {
    // 已登录
    NProgress.start()
    document.title = getPageTitle(to.meta.title)
    next()
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
