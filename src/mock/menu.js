import Mock from 'mockjs'
const top = [{
  label: "首页",
  path: "/wel/index",
  icon: 'el-icon-document',
  meta: {
    i18n: 'dashboard',
  },
  parentId: 0
},
{
  label: "官网",
  icon: 'el-icon-document',
  meta: {
    menu: false,
    i18n: 'website',
  },
  path: "https://avuejs.com",
  parentId: 1
},
{
  label: "测试",
  icon: 'el-icon-document',
  path: "/test/index",
  meta: {
    i18n: 'test',
  },
  parentId: 2
},
{
  label: "更多",
  icon: 'el-icon-document',
  path: "/wel/dashboard",
  meta: {
    menu: false,
    i18n: 'more',
  },
  parentId: 3
}]
const first = [{
  label: "号码列表",
  path: '/editor',
  component: 'views/util/ueditor',
  icon: 'icon-caidan',
  meta: {
    i18n: 'ueditor',
  },
  children: []
}]
const second = []
const third = [{
  label: "测试页面",
  path: '/test',
  component: 'views/test',
  icon: 'icon-caidan',
  meta: {
    i18n: 'test',
  },
  children: []
}]
export default ({ mock }) => {
  if (!mock) return;
  let menu = [first, second, third];
  Mock.mock('/men/getMenu', 'get', (res) => {
    let body = JSON.parse(res.body);
    return {
      data: menu[body.type] || []
    }
  })
  Mock.mock('/men/getTopMenu', 'get', () => {
    return {
      data: top
    }
  })

}
