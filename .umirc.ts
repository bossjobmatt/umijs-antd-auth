import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Hello',
  },
  hash: true,
  history: {
    type: 'hash',
  },
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: '@/layouts/public',
      name: '登录',
      routes: [{ path: '', name: '登录', component: 'Login' }],
      layout: false,
    },
    {
      path: '/dashboard',
      component: '@/layouts/private',
      name: '权限演示',
      routes: [
        { path: '/dashboard/list', name: 'list', component: 'List' },
        {
          path: '/dashboard/admin',
          access: 'canSeeAdmin',
          name: 'admin',
          component: 'Admin',
        },
      ],
      flatMenu: true,
      // layout: false
    },
    { path: '/*', component: '@/pages/404' },
  ],
  npmClient: 'pnpm',
});
