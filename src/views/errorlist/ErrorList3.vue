<template>
  <div class="gifcontainer">
    <img src="../../assets/403.gif" alt="">
  </div>
</template>

<script lang="ts">
import { reactive, ref, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
    };
  },
});
</script>

<style lang="scss" scoped>
.gifcontainer {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
