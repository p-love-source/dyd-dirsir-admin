import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
import Layout from "@/layout";
import { getAuthRouter } from "./modules/auth";

// 不变的路由
const constantRouterMap = [
  // {
  //   path: "/",
  //   redirect: "/home",
  //   hidden: true
  // },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/index"),
        meta: {
          title: "首页",
          icon: ""
        }
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    hidden: true,
    meta: {
      title: "登录",
      auth: true // 用来验证登录后才能查看
    }
  },
  {
    path: "404",
    name: "404",
    component: () => (/* webpackChunkName: "404" */ "../views/404.vue"),
    hidden: true,
    meta: {
      title: "404",
      auth: true
    }
  },
  {
    path: "no-auth",
    name: "NoAuth",
    component: () => (/* webpackChunkName: "noauth" */ "../views/NoAuth.vue"),
    hidden: true,
    meta: {
      title: "没有权限",
      auth: true
    }
  },
]

// 加载出错404
const pageError404 = [
  {
    path: "404",
    name: "404",
    component: () => (/* webpackChunkName: "404" */ "../views/404.vue"),
    meta: {
      title: "404",
      auth: true
    }
  }
]
let routes = constantRouterMap.concat(getAuthRouter());
console.log("total-router:",routes);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
});

// Router.beforEach((to, form, next) => {
//   console.log(to,form,next);
// })

