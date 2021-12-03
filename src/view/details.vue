<template>
    <titleName :msg="'详情页面'"></titleName>
    <div>{{ state.counter }}</div>
    <button type="button" @click="state.counter++">Increment</button>
</template>

<script>
import titleName from '../components/titleName.vue'
import { reactive } from 'vue';
export default {
  components: {titleName},
  setup() {
      const state = reactive({ counter: 0 });
      return { state };
    }
}
</script>

<style>

</style>