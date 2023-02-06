<template>
  <div class="topmenu">
    <!-- 上边 -->
    <div class="top">
      <div class="left">
        <!-- 伸缩按钮 -->
        <component class="icons" :is="isCollapse ? 'Expand' : 'Fold'"
        @click="change"></component>
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 搜索框 -->
      <div class="right">
        <!-- 四个小图标按钮 -->
        <component
        v-for="icon in iconname"
        :key="icon"
        class="icons"
        :is="icon"
        @click="changescreen(icon)"></component>
        <!-- 头像 -->
        <img src="../assets/index.webp" alt="">
        <!-- 退出 -->
        <el-button text type="success" @click="open">退出</el-button>
      </div>
    </div>
    <!-- 下边 -->
    <div class="bottom">
      <el-tag
      v-for="route in routearray"
      :key="route.name"
      type=""
      :effect="$route.name === route.name ? 'dark' : 'plain'"
      :closable="route.name !== 'workspace'"
      @click="clicktag(route)"
      @close="handleClose(route)">
      {{ route.meta.title }}
    </el-tag>
    </div>
    <!-- 搜索弹出框 -->
    <el-dialog v-model="dialogTableVisible"
    title="搜索"
    width="300px"
    top="30px">
      <el-autocomplete
        v-model="state1"
        :fetch-suggestions="querySearch"
        clearable
        class="inline-input w-50"
        placeholder="Please Input"
        @select="handleSelect"
      >
        <template #prefix>
          <el-icon class="el-input__icon">
            <search />
          </el-icon>
        </template>
      </el-autocomplete>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import {
  reactive, ref, defineComponent, computed, toRaw, onMounted,
} from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import screenfull from 'screenfull';
import { ElMessage, ElMessageBox } from 'element-plus';
import { iconname } from '../utils/rule';

interface RestaurantItem {
  value: string
  link: string
}

const store = useStore();
const router = useRouter();
const state1 = ref('');
const isCollapse = ref(false);
const dialogTableVisible = ref(false);
const routearray = computed(() => store.getters.changeroute);
const currentroute = ref(router.currentRoute.value.name);
// 控制全屏
let isFullScreen = false;
const change = () => {
  isCollapse.value = !isCollapse.value;
  store.commit('changecollapse', { isCollapse: isCollapse.value });
};
const clicktag = (route) => {
  router.push({ name: route.name });
  store.commit('saveroute', { route });
};
const handleClose = (route) => {
  store.commit('closeroute', { route });
  router.push({
    name: 'workspace',
  });
};
// 全屏按钮点击事件
const changescreen = (icon) => {
  // 是否全屏
  if (icon === 'FullScreen') {
    if (!isFullScreen) {
      screenfull.toggle();
    } else {
      screenfull.exit();
    }
    isFullScreen = !isFullScreen;
  } else if (icon === 'Search') {
    dialogTableVisible.value = !dialogTableVisible.value;
  }
};
const restaurants = ref<RestaurantItem[]>([]);
const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    );
  };
};
const querySearch = (queryString: string, cb: any) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value;
  // call callback function to return suggestions
  cb(results);
};

const loadAll = () => [
  { value: '工作台', link: 'workspace' },
  { value: '品牌销量', link: 'chartlist1' },
  { value: '销售部', link: 'chartlist2' },
  { value: '身体监察', link: 'chartlist3' },
  { value: '文档', link: 'document' },
  { value: 'react文档', link: 'reactdocu' },
  { value: 'vue文档', link: 'vuedocu' },
  { value: '货物管理', link: 'tablelist1' },
  { value: '权限管理', link: 'tablelist2' },
  { value: '路由管理', link: 'tablelist3' },
  { value: '图表', link: 'tool' },
];

const handleSelect = (item: RestaurantItem) => {
  console.log(item);
};

const open = () => {
  ElMessageBox.confirm(
    '是否选择退出?',
    'Warning',
    {
      confirmButtonText: '退出',
      cancelButtonText: '取消',
      type: 'warning',
    },
  )
    .then(() => {
      router.push({
        name: 'Login',
      });
      ElMessage({
        type: 'success',
        message: '退出成功',
      });
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '退出失败',
      });
    });
};

onMounted(() => {
  restaurants.value = loadAll();
});
</script>

<style lang="scss" scoped>
@import "../style/topmenu.scss";
</style>
