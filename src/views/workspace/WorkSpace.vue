<template>
  <div>
    <el-descriptions
      class="margin-top"
      title="系统信息"
      :column="3"
      :border="true"
    >
    <el-descriptions-item v-for="infor in descriptioninfo"
    :key="infor">
      <template #label>
        <div class="cell-item">
          {{infor.labelname}}
        </div>
      </template>
      {{infor.info}}
    </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script lang="ts">
import { reactive, ref, defineComponent } from 'vue';
import { descriptioninfo } from '../../utils/rule';

export default defineComponent({
  setup() {
    return {
      descriptioninfo,
    };
  },
});
</script>

<style lang="scss" scoped>

</style>
