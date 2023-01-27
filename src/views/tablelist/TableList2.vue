<template>
  <div>
    <!-- 新增 -->
    <el-button type="primary"
      class="btn"
      @click="adddialog">新增</el-button>
    <el-table :data="tableData"
    :border="true"
    style="width: 100%">
      <el-table-column prop="name" label="账号名称" />
      <el-table-column prop="role" label="角色">
        <template #default="scope">
          <el-tag
            v-for="(role, index) in scope.row.role"
            :key="index"
            :type="role === 'BOSS' ? 'danger' : 'success'"
            disable-transitions
            style="margin-right:20px;"
            >{{ role }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template #default="scope">
          <el-button link type="primary" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 详情弹出框 -->
    <!--  -->
    <el-dialog v-model="dialogTableVisible"
      title="添加账号"
      :close-on-click-modal="false">
      <AddDialog @changedialog="changedialog"/>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, defineComponent } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import AddDialog from '../../components/table2/AddDialog2.vue';

const dialogTableVisible = ref(false);
const handleDelete = (val) => {
  ElMessageBox.confirm(
    '确认是否要删除这条数据？',
    'Warning',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    },
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: '删除成功',
      });
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消删除',
      });
    });
};
const tableData = [
  {
    name: 'admin',
    role: ['登录用户'],
  },
  {
    name: 'admax',
    role: ['登录用户', '管理员'],
  },
  {
    name: 'adboss',
    role: ['BOSS', '登录用户', '管理员'],
  },
];
const adddialog = () => {
  dialogTableVisible.value = !dialogTableVisible.value;
};
const changedialog = () => {
  dialogTableVisible.value = !dialogTableVisible.value;
};
</script>

<style lang="scss" scoped>
.btn {
  margin-bottom: 40px;
}
</style>
