<template>
  <titleName :msg="'reactive函数创建响应式对象 && 增删'"></titleName>
  <button @click="add()">增加</button>
  <ul>
    <li v-for="(item, index) in state.list" :key="index" @click="remStu(index)">{{item.name}}-------{{item.age}}</li>
  </ul>
</template>

<script lang='ts'>
import titleName from '../components/titleName.vue'
import { defineComponent, reactive } from 'vue'
export default defineComponent ({
  components: {titleName},
  setup(){
    // reactive 函数创建响应式对象
    let state = reactive({
      list : [
        {id: 1, name: 'zs', age : 18},
        {id: 2, name: 'ww', age : 20},
        {id: 3, name: 'ls', age : 22},
      ]
    });
    function add(){
      state.list.push({id: 4, name: 'lw', age: 24})
    }
    function remStu(index){
      // state.list = state.list.filter((item,idx) =>{
      //   return idx != index
      // })
      // 简写方式
      state.list = state.list.filter((item,idx) => idx !==index )
      console.log(index,state.list)
    }
    return { state, add, remStu }
  }
})
</script>

<style>

</style>