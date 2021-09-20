//导入vue
import Vue from 'vue';
import VueRouter from 'vue-router';

//导入组件
import index from "../views/index";
import login from "../views/login";
import List from "../views/user/List";
import profile from "../views/user/Profile"
import NotFound from "../views/NotFound";
import all from "../views/user/all";

//使用路由
Vue.use(VueRouter);
//导出
export default new VueRouter({
    //路由模式要加#，开启这个之后就不用加#
    mode: 'history',
    //整合所有路由的仓库
    routes: [{
        //登录页相关路径
        //：name 是一种取值方式
        path: '/index/:name',
        //组件
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
            {
                path: '/user/all',
                name: 'all',
                component: all,
            },
        ]
    },
        //首页
        {
            //路径为/login绑定login页面组件
            name:'login',
            path: '/login',
            component: login,
        },
        //重定向
        {
            //路径为/goHome重定向到路径为/login
            path: '/goHome',
            redirect: '/login',
        },
        //页面走丢，所有的页面
        {
            path: '*',
            //组件名字为NotFound绑定*路径
            component: NotFound,
        },

    ]

})
