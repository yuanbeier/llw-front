import Layout from '@/page/index/'
export default [{
  path: '/wel',
  component: Layout,
  redirect: '/wel/index',
  children: [{
    path: 'index',
    name: '首页',
    meta: {
      i18n: 'dashboard'
    },
    component: resolve =>
        require(['@/views/wel/index'],resolve)
      // import( /* webpackChunkName: "views" */ '@/views/wel/index')

  }, {
    path: 'dashboard',
    name: '控制台',
    meta: {
      i18n: 'dashboard',
      menu: false,
    },
    component: resolve =>
        require(['@/views/wel/dashboard'],resolve)
      //import( /* webpackChunkName: "views" */ '@/views/wel/dashboard')
  }]
}, {
  path: '/form-detail',
  component: Layout,
  children: [{
    path: 'index',
    name: '详情页',
    meta: {
      i18n: 'detail'
    },
    component: resolve =>
        require(['@/views/util/form-detail'],resolve)
      // import( /* webpackChunkName: "views" */ '@/views/util/form-detail')
  }]
}, {
  path: '/info',
  component: Layout,
  redirect: '/info/index',
  children: [{
    path: 'index',
    name: '个人信息',
    meta: {
      i18n: 'info'
    },
    component: resolve =>
        require(['@/views/user/info'],resolve)
      //import( /* webpackChunkName: "views" */ '@/views/user/info')
  }, {
    path: 'setting',
    name: '个人设置',
    meta: {
      i18n: 'setting'
    },
    component:  resolve =>
        require(['@/views/user/setting'],resolve)
     // import( /* webpackChunkName: "views" */ '@/views/user/setting')
  }]
}]
