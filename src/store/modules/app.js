import { getSidebar } from "@/api/app";

// 全局业务状态管理模块
const state = {
    // 侧边菜单栏
    sidebar_list: []
}

// 同步 ==>用来给state数据模型赋值 (只修改数据) (方法为纯函数,异步请求完成后改变state中的数据模型在此处进行)
const mutations = {
   SET_SIDEBAR (state,sidebar_list) {
       console.log(sidebar_list);
    state.sidebar_list = sidebar_list;
   }
}


// 异步 ==》通过后台接口请求数据 (只获取数据)
const actions = {
    getSidebarData ({commit}, data) {
        console.log(data);
        getSidebar().then(res => {
            console.log(res.data);
            const { data } = res;
            commit("SET_SIDEBAR",data.sidebar_list);
        })
    }
}

export default {
    namespace: true,
    state,
    mutations,
    actions
}