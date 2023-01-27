<template>
  <div>
    <el-table :data="tableData" :border="true" style="width: 100%">
      <el-table-column type="expand">
        <template #default="props">
            <el-table :data="props.row.children" :border="true" v-show="props.row.children">
              <!-- 路径 -->
              <el-table-column label="路径" prop="path">
                <template #default="scope">
                  <el-tag type="danger" effect="dark">
                    {{'/home' + '/' + props.row.path + '/' + scope.row.path}}
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column label="路由名称" prop="name" />
              <el-table-column label="组件名称" prop="meta.title" />
              <!-- 角色权限 -->
              <el-table-column label="角色权限" prop="meta.role">
                <template #default="scope">
                  <el-tag type="danger" effect="dark"
                  v-for="(role, index) in scope.row.meta.role"
                  :key="index"
                  style="margin-right:20px;">
                  {{ role }}
                  </el-tag>
                </template>
              </el-table-column>
              <!-- 图标名称 -->
              <el-table-column label="图标名称" prop="meta.icon">
                <template #default="scope">
                  <component class="icons" :is="scope.row.meta.icon"
                  ></component>
                </template>
              </el-table-column>
            </el-table>
        </template>
      </el-table-column>
      <!-- 完整路径展示 -->
      <el-table-column label="路径" prop="path">
        <template #default="scope">
          <el-tag type="success" effect="dark">
            {{'/home' + '/' + scope.row.path}}
          </el-tag>
        </template>
      </el-table-column>
      <!-- 路由名称 -->
      <el-table-column label="路由名称" prop="name" />
      <!-- 组件名称 -->
      <el-table-column label="组件名称" prop="meta.title" />
      <!-- 角色权限 -->
      <el-table-column label="角色权限" prop="meta.role">
        <template #default="scope">
          <el-tag type="danger" effect="dark"
          v-for="(role, index) in scope.row.meta.role"
          :key="index"
          style="margin-right:20px;">
          {{ role }}
          </el-tag>
        </template>
      </el-table-column>
      <!-- 图标名称 -->
      <el-table-column label="图标名称" prop="meta.icon">
        <template #default="scope">
          <component class="icons" :is="scope.row.meta.icon"
          ></component>
        </template>
      </el-table-column>
      <!-- 添加 -->
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button link type="primary" @click="handleAdd(scope.row)"
            >新增</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import {
  reactive, ref, defineComponent, defineEmits,
} from 'vue';
import { routecommon, routeadmin } from '@/utils/router';

const tableData = routeadmin[0].children;
const emits = defineEmits(['changedialog']);
const handleAdd = (val) => {
  emits('changedialog', val);
};
</script>

<style lang="scss" scoped>

</style>
