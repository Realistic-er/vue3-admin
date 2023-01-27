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
    <el-form-item label="组件名称" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <!-- 路径 -->
    <el-form-item label="路径" prop="path">
      <el-input v-model="ruleForm.path" />
    </el-form-item>
    <!-- 路径名称 -->
    <el-form-item label="组件名称" prop="pathname">
      <el-input v-model="ruleForm.pathname" />
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
    <!-- 图标选择 -->
    <el-form-item label="图标" prop="icon">
      <component class="icons" :is="icons" v-show="iconshow"></component>
      <el-popover placement="bottom" :width="400" trigger="click">
        <template #reference>
          <el-button style="margin-right: 16px">点击选择图标</el-button>
        </template>
        <!-- 图标集合 -->
        <ul class="iconfather">
          <li v-for="icon in iconlist" :key="icon">
            <component class="icon" :is="icon.value"
            @click="choose(icon)"></component>
          </li>
        </ul>
      </el-popover>
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
import { iconlist } from '../../utils/icon';

const formSize = ref('default');
const ruleFormRef = ref<FormInstance>();
const iconshow = ref(false);
const icons = ref('');
const ruleForm = reactive({
  name: '',
  path: '',
  pathname: '',
  role: [],
  icon: '',
});
const rules = reactive<FormRules>({
  // 货品名称
  name: [
    { required: true, message: '组件名称', trigger: 'blur' },
    {
      min: 2, max: 10, message: '长度在2-5', trigger: 'blur',
    },
  ],
  // 路径
  path: [
    {
      required: true,
      message: '请输入路径',
      trigger: 'change',
    },
  ],
  // 路径名称
  pathname: [
    {
      required: true,
      message: '请输入路径名称',
      trigger: 'change',
    },
  ],
  // 路由权限
  role: [
    {
      required: true,
      message: '请选择路由权限',
      trigger: 'change',
    },
  ],
  icon: [
    {
      required: true,
      message: '请选择图标',
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
      iconshow.value = false;
      emits('changedialog');
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
  icons.value = '';
};

const changeimage = (val) => {
  ruleForm.region = toRaw(val);
};
const choose = (val) => {
  icons.value = val.value;
  ruleForm.icon = val.value;
  iconshow.value = true;
};
</script>

<style lang="scss" scoped>
.iconfather {
  display: flex;   /* flex布局 */
  justify-content: flex-start;   /* 左对齐 */
  flex-wrap: wrap;   /* 换行 */
  li {
    padding: 10px;
    width: calc((100% - 80px) / 4);
    .icon {
      width: 30px;
      height: 30px;
    }
  }
}

</style>
