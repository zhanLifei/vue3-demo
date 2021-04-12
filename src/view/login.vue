<template>
    <titleName :msg="'toRefs()将响应式的对象变为普通对象 再解构，在模板中就可以直接使用属性'"></titleName>
    <div>{{name}}</div>
    <div>{{sex}}</div>
</template>

<script>
import titleName from '../components/titleName.vue'
import { toRefs } from 'vue'
export default {
  components: {titleName},
  setup(){
    let state = {
      name: 'zhanlifei',
      sex: '男'
    }

    // toRefs()将响应式的对象变为普通对象 再解构，在模板中就可以直接使用属性，不用state.name
    return {...toRefs(state)}
  }
}
</script>

<style>

</style>