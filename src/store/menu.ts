import { RouteRecordRaw } from 'vue-router';
import { deletetag, siftarray } from '../utils/rule';

interface menu {
  isCollapse: boolean,
  routearray: object[],
}
interface item {
  route: RouteRecordRaw,
}

export default {
  state: (): menu => ({
    isCollapse: false,
    routearray: [
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
    ],
  }),
  getters: {
    // 折叠
    pickcollapse(state:menu):boolean {
      return state.isCollapse;
    },
    // 导航块数组
    changeroute(state:menu):object[] {
      return state.routearray;
    },
  },
  mutations: {
    // 折叠动作
    changecollapse(state:menu, payload:menu): void {
      state.isCollapse = payload.isCollapse;
    },
    // 存入动作
    saveroute(state:menu, payload:item): void {
      if (!state.routearray.includes(payload.route) && payload.route.name !== 'workspace') {
        state.routearray.push(payload.route);
      }
    },
    // 关闭标签
    closeroute(state:menu, payload:item): void {
      state.routearray = deletetag(state.routearray, payload.route);
    },
  },
  actions: {
  },
};
