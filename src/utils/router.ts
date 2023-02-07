import type { RouteRecordRaw } from 'vue-router';

// 共同首页
export const routecommon:Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
    meta: {
      title: '登录页面',
    },
  },
  // 登录页面
  {
    path: '/login',
    name: 'Login',
    component: () => import('../page/login/LoginIndex.vue'),
    meta: {
      title: '登录',
      role: [
        'admid', 'admin', 'admax',
      ],
    },
  },
];

// admin权限页面
export const routeadmin:Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../page/firstpage/FirstPage.vue'),
    meta: {
      title: '首页',
    },
    children: [
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    meta: {
      title: '404页面',
    },
    component: () => import('../views/errorlist/ErrorList4.vue'),
  },
];

// views文件夹下的路由
export const childrenArray:Array<RouteRecordRaw> = [
  // 工作台
  {
    path: 'workspace',
    name: 'workspace',
    component: () => import('../views/workspace/WorkSpace.vue'),
    meta: {
      title: '工作台',
      icon: 'Menu',
      role: [
        'admin', 'admax',
      ],
    },
    children: [],
  },
  // 表格
  {
    path: 'chart',
    name: 'chart',
    meta: {
      title: '图标',
      icon: 'Calendar',
      role: [
        'admin', 'admax',
      ],
    },
    children: [
      {
        path: 'chartlist1',
        name: 'chartlist1',
        component: () => import('../views/chart/ChartList1.vue'),
        meta: {
          title: '品牌销量',
          icon: 'VideoPlay',
          role: [
            'admin', 'admax',
          ],
        },
      },
      {
        path: 'chartlist2',
        name: 'chartlist2',
        component: () => import('../views/chart/ChartList2.vue'),
        meta: {
          title: '销售部',
          icon: 'Money',
          role: [
            'admin', 'admax',
          ],
        },
      },
      // {
      //   path: 'chartlist3',
      //   name: 'chartlist3',
      //   component: () => import('../views/chart/ChartList3.vue'),
      //   meta: {
      //     title: '身体监察',
      //     icon: 'Money',
      //     role: [
      //       'admin', 'admax',
      //     ],
      //   },
      // },
    ],
  },
  // 文档
  {
    path: 'document',
    name: 'document',
    meta: {
      icon: 'Document',
      title: '文档',
      role: [
        'admin', 'admax',
      ],
    },
    children: [
      {
        path: 'reactdocu',
        name: 'reactdocu',
        component: () => import('../views/document/ReactDocu.vue'),
        meta: {
          title: 'react文档',
          icon: 'VideoPause',
          role: [
            'admin', 'admax',
          ],
        },
      },
      {
        path: 'vuedocu',
        name: 'vuedocu',
        component: () => import('../views/document/VueDocu.vue'),
        meta: {
          title: 'vue文档',
          icon: 'VideoCamera',
          role: [
            'admin', 'admax',
          ],
        },
      },
    ],
  },
  // 表格
  {
    path: 'table',
    name: 'table',
    meta: {
      icon: 'Notebook',
      title: '表格',
      role: [
        'admin', 'admax',
      ],
    },
    children: [
      {
        path: 'tablelist1',
        name: 'tablelist1',
        component: () => import('../views/tablelist/TableList1.vue'),
        meta: {
          title: '货物管理',
          icon: 'Microphone',
          role: [
            'admin', 'admax',
          ],
        },
      },
      {
        path: 'tablelist2',
        name: 'tablelist2',
        component: () => import('../views/tablelist/TableList2.vue'),
        meta: {
          title: '权限管理',
          icon: 'Mute',
          role: [
            'admin', 'admax',
          ],
        },
      },
      {
        path: 'tablelist3',
        name: 'tablelist3',
        component: () => import('../views/tablelist/TableList3.vue'),
        meta: {
          title: '路由管理',
          icon: 'Mic',
          role: [
            'admin', 'admax',
          ],
        },
      },
    ],
  },
  // 图标
  {
    path: 'tool',
    name: 'tool',
    component: () => import('../views/setting/SettingPage.vue'),
    meta: {
      title: '设置',
      icon: 'Tools',
      role: [
        'admid', 'admax',
      ],
    },
    children: [],
  },
  // 错误
  {
    path: 'error',
    name: 'error',
    meta: {
      title: '错误',
      icon: 'Failed',
      role: [
        'admid', 'admax',
      ],
    },
    children: [
      {
        path: 'error403',
        name: 'error403',
        component: () => import('../views/errorlist/ErrorList3.vue'),
        meta: {
          title: '403页面',
          icon: 'CircleCloseFilled',
          role: [
            'admid', 'admax',
          ],
        },
        children: [],
      },
      {
        path: 'error404',
        name: 'error404',
        component: () => import('../views/errorlist/ErrorList4.vue'),
        meta: {
          title: '404页面',
          icon: 'QuestionFilled',
          role: [
            'admid', 'admax',
          ],
        },
        children: [],
      },
    ],
  },
];
