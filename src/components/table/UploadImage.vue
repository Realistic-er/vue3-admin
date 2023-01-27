<template>
  <div class="imagecontainer">
    <div class="imagepreview" v-for="(img,index) in imagelist"
    :key="index" >
      <!-- 图片展示 -->
      <img :src="img" alt="" class="img" v-if="isShowImage">
      <!-- 鼠标悬浮 Delete -->
      <div class="delete" v-if="isShowImage">
        <el-icon @click="deleteImage(index)" style="font-size:30px;"><Delete /></el-icon>
      </div>
    </div>
    <!-- 上传图片 -->
    <div class="image">
      <label for="image" class="input">
        <input id="image" type="file" @change="uploadimage($event)"/>
      </label>
      <!-- 图标 -->
      <component
      class="icon"
      :is="icon"></component>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {
  reactive, ref, defineComponent, defineEmits, defineExpose, watch,
} from 'vue';
import { ElMessage } from 'element-plus';

const icon = 'Plus';
let imagelist = reactive([]);
const emits = defineEmits(['changeimage']);
const isShowImage = ref(false);
const getObjectURL = (file) => {
  // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
  const url = URL.createObjectURL(file);
  return url;
};
const uploadimage = (ev: Event) => {
  if (imagelist.length <= 2) {
    const url = getObjectURL((ev.target as HTMLInputElement).files[0]);
    isShowImage.value = true;
    imagelist.push(url);
    document.getElementById('image').value = '';
    emits('changeimage', imagelist);
  } else {
    ElMessage({
      message: '只能上传六张图片。',
      type: 'warning',
    });
  }
};
const deleteImage = (index) => {
  imagelist.splice(index, 1);
};
// 清除预览图片数组
const removeimage = () => {
  imagelist = [];
  isShowImage.value = false;
};
watch(imagelist, (newVal, odlVal) => {
  if (imagelist.length === 0) {
    isShowImage.value = false;
  } else {
    isShowImage.value = true;
  }
}, { immediate: true, deep: true });
defineExpose({ imagelist, removeimage });

</script>

<style lang="scss" scoped>
@import "../../style/uploadimage.scss";
</style>
