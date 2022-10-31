<template>
  <Combined :user="value"></Combined>
</template>

<script>
import Combined from '../../components/combined.vue'
import { reactive } from "vue";
export default {
    components: { Combined },
    setup () {
        let value = reactive(['湛湛', '礼礼', '飞飞']);
        return { value }
    }
}
</script>

<style>

</style>