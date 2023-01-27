<template>
  <el-aside class="sidemenu" :width="isCollapse ? '60px' : '201px'">
    <el-menu
        background-color="#001529"
        class="el-menu-vertical-demo"
        :default-active="$route.path"
        :unique-opened="true"
        :collapse="isCollapse"
        :collapse-transition="false"
        text-color="#858e8b"
        @open="handleOpen"
        @close="handleClose"
        router
      >
      <template
      v-for="(item, index) in menu[0].children"
      :key="index">
        <el-menu-item
        v-if="item.children.length === 0"
        :index="'/home' + '/' + item.path"
        @click="savefirst(item)">
          <component class="icons" :is="item.meta.icon"></component>
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
        <template v-else>
          <el-sub-menu :index="index.toString()">
            <template #title>
              <component class="icons" :is="item.meta.icon"></component>
              <span>{{ item.meta.title }}</span>
            </template>
            <el-menu-item v-for="(menu, index) in item.children"
            :key="index"
            :index="'/home' + '/' + item.path + '/' + menu.path"
            @click="savefirst(menu)"
            >
              <component class="icons" :is="menu.meta.icon"></component>
              {{ menu.meta.title }}
            </el-menu-item>
          </el-sub-menu>
        </template>
      </template>

    </el-menu>
  </el-aside>
</template>

<script lang="ts">
import {
  reactive, ref, defineComponent, watch, toRef, computed,
} from 'vue';
import {
  Document, Menu as IconMenu, Location, Setting,
} from '@element-plus/icons-vue';
import { RouteRecordRaw, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const menu = JSON.parse(window.localStorage.getItem('menu'));
    const isCollapse = computed(() => store.getters.pickcollapse);
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log('123');
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log('123');
    };
    const router = useRouter();
    // 保存一级动作
    const savefirst = (item) => {
      store.commit('saveroute', { route: item });
    };
    return {
      menu, handleOpen, handleClose, isCollapse, savefirst,
    };
  },

});
</script>

<style lang="scss" scoped>
@import '../style/sidemenu.scss'
</style>
