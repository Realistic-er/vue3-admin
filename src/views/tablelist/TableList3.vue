<template>
  <div>
    <!-- 路由表格 -->
    <RouteTable @changedialog="changedialog"/>
    <!-- dialog弹出框 -->
    <el-dialog v-model="dialogTableVisible" title="添加路由"
    :close-on-click-modal="false">
      <AddDialog @changedialog="changedialog"/>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, defineComponent } from 'vue';
import RouteTable from '../../components/table3/RouteTable.vue';
import AddDialog from '../../components/table3/AddDialog3.vue';

const dialogTableVisible = ref(false);
const changedialog = (val) => {
  dialogTableVisible.value = !dialogTableVisible.value;
};
</script>

<style lang="scss" scoped>

</style>
