//导入vue
import Vue from 'vue';
import VueRouter from 'vue-router';

//导入组件
import index from "../views/index";
import login from "../views/login";
import List from "../views/user/List";
import profile from "../views/user/Profile"
import NotFound from "../views/NotFound";

//使用
Vue.use(VueRouter);
//导出
export default new VueRouter({
    //路由模式要加#，开启这个之后就不用加#
    mode: 'history',
    //整合所有路由的仓库
    routes: [{
        //登录页
        path: '/index/:name',
        component: index,
        props: true,
        children: [ //嵌套路由
            {
                path: '/user/list:idd',
                name: 'List',
                component: List,
                props: true,
            },
            //
            {
                path: '/user/profile:id',
                name: 'profile',
                component: profile,
            },
        ]
    },
        //首页
        {
            path: '/login',
            component: login,
        },
        //重定向
        {
            path: '/goHome',
            redirect: '/login',
        },
        //页面走丢，所有的页面
        {
            path: '*',
            component: NotFound,
        },

    ]

})
