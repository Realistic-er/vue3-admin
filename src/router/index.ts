import { createRouter, createWebHistory } from 'vue-router';
import { routecommon, routeadmin, childrenArray } from '@/utils/router';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = routecommon;
let registerRouteFresh = true;
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(async (to, from, next) => {
  const account = window.localStorage.getItem('account');
  // 已经登录
  if (account) {
    // 第一次挂载路由
    if (registerRouteFresh) {
      const array = [];
      childrenArray.forEach((v) => {
        const arrayrole = v.meta.role as any;
        if (arrayrole.indexOf(account) !== -1) {
          array.push(v);
        }
      });
      console.log(array);
      routeadmin[0].children = array;
      routeadmin.forEach((i) => {
        router.addRoute(i);
      });
      window.localStorage.setItem('menu', JSON.stringify(routeadmin));
      next({ ...to, replace: true });
      registerRouteFresh = false;
    } else {
      next();
    }
    // 没有登录，返回登录页面
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next('login');
    }
  }
});

export default router;
