<template>
  <div class="salecontainer">
    <!-- 新增按钮 -->

    <ul>
      <li v-for="(info,index) in infolist"
      :key="index" @click="handleclick(info)">
        <!-- 头像 -->
        <img :src="info.avatar" alt="">
        <p>{{info.name}}</p>
      </li>
    </ul>
    <!-- 抽屉 -->
    <el-drawer v-model="drawer" title="I am the title"
    :with-header="false" size="60%">
      <el-descriptions
        :border="true"
        :column="2"
        >
          <el-descriptions-item label="名字">{{info.name}}</el-descriptions-item>
          <el-descriptions-item label="年龄">{{info.age}}</el-descriptions-item>
          <el-descriptions-item label="性别">{{info.sex}}</el-descriptions-item>
          <el-descriptions-item label="职位">{{info.job}}</el-descriptions-item>
          <el-descriptions-item label="联系方式">{{info.phone}}</el-descriptions-item>
      </el-descriptions>
      <!-- 工作量统计 -->
      <LineChart :info="info"/>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import {
  reactive, ref, defineComponent, toRaw, provide,
} from 'vue';
import LineChart from '../../components/chartlist2/LineChart.vue';
import { infolist } from '../../utils/info/sale';

const drawer = ref(false);
const info = reactive({
  name: '',
  age: 0,
  sex: '',
  avatar: '',
  job: '',
  phone: '',
  salenumber: [],
  saleprice: [],
});
const handleclick = (val) => {
  drawer.value = !drawer.value;
  info.name = val.name;
  info.age = val.age;
  info.sex = val.sex;
  info.avatar = val.avatar;
  info.job = val.job;
  info.phone = val.phone;
  info.salenumber = val.salenumber;
  info.saleprice = val.saleprice;
  // provide('info', info);
};
</script>

<style lang="scss" scoped>
@import "../../style/chartlist2.scss";
</style>
