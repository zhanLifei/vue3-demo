<template>
  <div>{{name}}</div>
  <div>{{age}}</div>
</template>

<script>
import { toRefs } from 'vue'
export default {
    setup(){
        const obj = {
            name: 'zlf',
            age: 28
        }

        return { ...toRefs(obj) }
    }
}
</script>

<style>

</style>