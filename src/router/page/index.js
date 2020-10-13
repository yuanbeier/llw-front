// import Layout from '@/page/index/'
export default [{
    path: '/login',
    name: '登录页',
    component:  resolve =>
        require(['@/page/login/index'],resolve),
        // import( /* webpackChunkName: "page" */ '@/page/login/index'),
    meta: {
        keepAlive: true,
        isTab: false,
        isAuth: false
    }
}, {
        path: '/tt',
        name: 'tt账号',
        component: resolve =>
            require(['@/page/tt/index'],resolve),
            // import( /* webpackChunkName: "page" */ '@/page/yy/index'),
        meta: {
            keepAlive: true,
            isTab: false,
            isAuth: false
        }
    },
    {
        path: '/tt/detail/:id',
        name: 'yy详情',
        component:  resolve =>
            require(['@/page/tt/detail'],resolve),
            // import( /* webpackChunkName: "page" */ '@/page/yy/detail'),
        meta: {
            keepAlive: true,
            isTab: false,
            isAuth: false
        }
    },
{
    path: '/lock',
    name: '锁屏页',
    component:  resolve =>
        require(['@/page/lock/index'],resolve),
        //import( /* webpackChunkName: "page" */ '@/page/lock/index'),
    meta: {
        keepAlive: true,
        isTab: false,
        isAuth: false
    }
},
{
    path: '/404',
    component: resolve =>
        require(['@/components/error-page/404'],resolve),
        // import( /* webpackChunkName: "page" */ '@/components/error-page/404'),
    name: '404',
    meta: {
        keepAlive: true,
        isTab: false,
        isAuth: false
    }

},
{
    path: '/403',
    component: resolve =>
        require(['@/components/error-page/403'],resolve),
        // import( /* webpackChunkName: "page" */ '@/components/error-page/403'),
    name: '403',
    meta: {
        keepAlive: true,
        isTab: false,
        isAuth: false
    }
},
{
    path: '/500',
    component: resolve =>
        require(['@/components/error-page/500'],resolve),
        // import( /* webpackChunkName: "page" */ '@/components/error-page/500'),
    name: '500',
    meta: {
        keepAlive: true,
        isTab: false,
        isAuth: false
    }
},
{
    path: '/',
    name: '主页',
    redirect: '/tt'
},
{
    path: '/myiframe',
    component: resolve =>
        require(['@/page/index/'],resolve),
    redirect: '/myiframe',
    children: [{
        path: ":routerPath",
        name: 'iframe',
        component: () =>
            import( /* webpackChunkName: "page" */ '@/components/iframe/main'),
        props: true
    }]

},
{
    path: '*',
    redirect: '/404'
}
]
