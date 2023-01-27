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
    <!-- 名称 -->
    <el-form-item label="名称" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <!-- 图片 -->
    <el-form-item label="图片" prop="region">
      <UploadImage ref="uploadimage"  @changeimage="changeimage"/>
    </el-form-item>
    <!-- 进货时间 -->
    <el-form-item label="进货时间" prop="date" required>
      <el-date-picker
        v-model="ruleForm.date"
        type="date"
        label="选择进货时间"
        placeholder="选择进货时间"
        style="width: 100%"
      />
    </el-form-item>
    <!-- 进货数量 -->
    <el-form-item label="进货数量" prop="inputcount">
      <el-input v-model.number="ruleForm.inputcount" />
    </el-form-item>
    <!-- 价格 -->
    <el-form-item label="价格" prop="price">
      <el-input v-model.number="ruleForm.price" />
    </el-form-item>
    <el-form-item label="Activity form" prop="notes">
      <el-input v-model="ruleForm.notes" type="textarea" />
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
import UploadImage from './UploadImage.vue';

const uploadimage = ref();
const formSize = ref('default');
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: '',
  region: [],
  date: '',
  inputcount: '',
  price: '',
  notes: '',
});
const rules = reactive<FormRules>({
  // 货品名称
  name: [
    { required: true, message: '请输入品牌名称', trigger: 'blur' },
    {
      min: 2, max: 10, message: '长度在2-10', trigger: 'blur',
    },
  ],
  // 图片
  region: [
    {
      required: true,
      message: '请上传图片',
      trigger: 'change',
    },
  ],
  // 进货日期
  date: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  // 进货数量
  inputcount: [
    {
      required: true,
      message: '请输入进货数量',
      trigger: 'change',
    },
    { type: 'number', message: '进货数量必须是数字' },
  ],
  // 价格
  price: [
    {
      required: true,
      message: '请输入价格',
      trigger: 'change',
    },
    { type: 'number', message: '价格必须是数字' },
  ],
  // 备注
  notes: [
    { required: true, message: '请输入备注', trigger: 'blur' },
    {
      min: 2, max: 100, message: '长度在2-100', trigger: 'blur',
    },
  ],
});
const emits = defineEmits(['changedialog']);
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      ElMessage({
        message: `${toRaw(ruleForm)}`,
        type: 'success',
      });
      emits('changedialog');
      uploadimage.value.removeimage();
      formEl.resetFields();
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
