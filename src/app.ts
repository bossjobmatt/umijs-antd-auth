// 运行时配置

import { RunTimeLayoutConfig } from '@umijs/max';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
  name: string;
  currentUser?: API.UserInfo;
}> {
  return {
    name: '1',
  };
}

// async function fetchMenuData() {
//   return [
//     {
//       path: '/dashboard/admin',
//       name: 'admin',
//       icon: 'UserOutlined',
//     },
//     {
//       path: '/dashboard/list',
//       name: 'list',
//       icon: 'TableOutlined',
//     },
//   ];
// }

export const layout: RunTimeLayoutConfig = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
      // params: {
      //   name: initialState?.name,
      // },
      // request: async (params, defaultMenuData) => {
      //   // initialState.currentUser 中包含了所有用户信息
      //   const menuData = await fetchMenuData();
      //   return menuData;
      // },
    },
  };
};
