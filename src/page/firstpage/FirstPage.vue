<template>
  <div class="container">
    <!-- 左边导航栏 -->
    <SideMenu />
    <!-- 右边盒子 -->
    <div class="right" :style="{'margin-left': isCollapse ? '60px' : '201px'}">
      <TopMenu />
      <div class="outcontainer">
        <div class="sidecontainer">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import SideMenu from '../../components/SideMenu.vue';
import TopMenu from '../../components/TopMenu.vue';

export default defineComponent({
  components: {
    SideMenu, TopMenu,
  },
  setup() {
    console.log('woshinidie');
    const store = useStore();
    const isCollapse = computed(() => store.getters.pickcollapse);
    return {
      isCollapse,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../../style/firstpage.scss'
</style>
