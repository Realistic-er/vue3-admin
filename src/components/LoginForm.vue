<template>
  <div class="formcontainer">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="size"
    >
      <!-- 这是登录账号 -->
      <el-form-item label="账号" prop="account">
        <el-input
          v-model="ruleForm.account"
          autocomplete="off"
        />
      </el-form-item>
      <!-- 这是登录密码 -->
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >Submit</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { reactive, ref, defineComponent } from 'vue';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { accountrule, passwordrule } from '../utils/rule';

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    // 表单尺寸
    const size = ref('default');
    // 表单绑定数据
    const ruleForm = reactive({
      account: '',
      password: '12adx',
    });
    // 验证ref点
    const ruleFormRef = ref('');
    const checkAge = (rule: any, value: any, callback: any) => {
      if (!value) {
        callback(new Error('Please input the age'));
      } else {
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'));
          } else {
            if (value < 18) {
              callback(new Error('Age must be greater than 18'));
            }
            callback();
          }
        }, 1000);
      }
    };
    const rules = reactive({
      account: accountrule,
      password: passwordrule,
    });
    // 提交表单数据
    const submitForm = (formEl:any) => {
      if (!formEl) return;
      formEl.validate((valid:boolean) => {
        // 校验成功--登录成功
        if (valid) {
          store.commit('changestore', { account: ruleForm.account });
          router.push({
            path: '/home/workspace',
          });
          ElMessage({
            message: `登录账号为' + ${ruleForm.account}`,
            type: 'success',
          });
          return true;
        }
        return false;
      });
    };
    const resetForm = (formEl:any) => {
      if (!formEl) return;
      formEl.resetFields();
    };

    return {
      size,
      ruleForm,
      ruleFormRef,
      checkAge,
      rules,
      submitForm,
      resetForm,
    };
  },
});

</script>

<style lang="scss" scoped>
@import "../style/loginform.scss";
</style>
