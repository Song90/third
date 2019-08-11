import Vue from 'vue'
import VueRouter from 'vue-router'
//引入创建的两个组件
import Test1 from "../components/Test1";
import UpBranch from "../components/manager/UpBranch";

//使用路由实例插件
Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    base: '__dirname',
    routes:[
        {path:'/upBranch_manager',component:UpBranch},
        {path:'/channel_manager',component:Test1},
        {path:'/enterprise_manager',component:Test1}
    ]
});

export default router;