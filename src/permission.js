/**
 * 通过后台返回的权限，动态设置路由
 * */ 
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
// import getPageTitle from '@/utils/get-page-title'

// console.log("--控制权限模块--permission");


NProgress.configure({ showSpinner: false }) // NProgress Configuration ==> NProgress配置

// 白名单
const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  console.log("即将前往的路由:",to.path);
  // start progress bar
  // 开始加载进度条， ==> NProgress模块 ==> 加载进度条
  NProgress.start()
  // set page title
  // 设置页面标题
  // document.title = getPageTitle(to.meta.title)
  document.title = to.meta.title;
  // determine whether the user has logged in
  // 确定用户是否已登录
  const hasToken = getToken()  // 获取token 

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      // 如果已经登录，就重定向到首页
      next({ path: '/' })
      NProgress.done()
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      // 确定用户是否通过getInfo获得了他的权限角色
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          // get user info
          // 获取用户信息
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          // 角色必须是一个对象数组；例如["admin"]或者["developer", "editor"]
          const { roles } = await store.dispatch('user/getInfo')

          // generate accessible routes map based on roles
          // 根据角色生成可访问的动态路由
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

          // dynamically add accessible routes
          // 动态添加可访问的路由
          router.addRoutes(accessRoutes)

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login

          // 删除token,进入登录页面重新登录
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/
    // 没有token，说明没有登录
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      // 如果在免费登录白名单，直接去
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      // 没有访问权限的其他页面被重定向到登录页面
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  // 进度条加载完成
  NProgress.done()
})
