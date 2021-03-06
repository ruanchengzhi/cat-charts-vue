export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '基本使用',
    path: 'default',
    component: () => import('./basic.md')
  },
  {
    title: '布局调整',
    path: 'layout',
    component: () => import('./layout.md')
  },

  {
    title: '布局调整-水平分页',
    path: 'layout-horizontal',
    component: () => import('./layout-horizontal.md')
  },

  {
    title: '布局调整-垂直分页',
    path: 'layout-vertical',
    component: () => import('./layout-vertical.md')
  }
]
