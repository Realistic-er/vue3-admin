<template>
    <div class="container">
      <LoginForm />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '../../components/LoginForm.vue';

export default defineComponent({
  components: {
    LoginForm,
  },
  setup() {
    console.log('woshinidie');
  },
});
</script>

<style class="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/index.webp");
  background-repeat:no-repeat;
  background-size: cover;
  position: relative;
}
</style>
