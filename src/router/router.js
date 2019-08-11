import Vue from 'vue'
import VueRouter from 'vue-router'

//引入创建的两个组件
import Hello2 from '../components/Hello2'
import Test1 from "../components/Test1";

//使用路由实例插件
Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    base: '__dirname',
    routes:[
        //将页面组件与path指令的路由关联
        {path:'/login',component:Hello2},
        {path:'/manage',component:Test1}
    ]
});

export default router;