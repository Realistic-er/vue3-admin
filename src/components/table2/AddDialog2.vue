<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <!-- 账号名称 -->
    <el-form-item label="名称" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <!-- 角色 -->
    <el-form-item label="角色" prop="role">
      <el-select
        v-model="ruleForm.role"
        multiple
        placeholder="请选择角色"
        style="width: 240px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        确认
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import {
  reactive, ref, toRaw, defineEmits,
} from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { ElMessage } from 'element-plus';

const formSize = ref('default');
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: '',
  role: [],
});
const rules = reactive<FormRules>({
  // 货品名称
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    {
      min: 2, max: 10, message: '长度在2-10', trigger: 'blur',
    },
  ],
  // 图片
  role: [
    {
      required: true,
      message: '请选择角色',
      trigger: 'change',
    },
  ],
});
const emits = defineEmits(['changedialog']);
const options = [
  {
    value: '登录用户',
    label: '登录用户',
  },
  {
    value: '管理员',
    label: '管理员',
  },
  {
    value: '财务总监',
    label: '财务总监',
  },
  {
    value: '行政HR',
    label: '行政HR',
  },
  {
    value: 'BOSS',
    label: 'BOSS',
  },
];
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      ElMessage({
        message: `${toRaw(ruleForm)}`,
        type: 'success',
      });
      formEl.resetFields();
      emits('changedialog');
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const changeimage = (val) => {
  ruleForm.region = toRaw(val);
};
</script>
