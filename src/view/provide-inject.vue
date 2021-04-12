<template>
    <titleName :msg="title">
        <template v-slot:content>provide ：向子组件以及子孙组件传递数据。接收两个参数，第一个参数是 key，即数据的名称；第二个参数为 value，即数据的值</template>
        <template v-slot:content1>inject ：接收父组件或祖先组件传递过来的数据。接收一个参数 key，即父组件或祖先组件传递的数据名称</template>
    </titleName>
    <provideDom></provideDom>
</template>

<script>
import titleName from '../components/titleName.vue'
import provideDom from '../components/provide-dom.vue'
import { provide, toRefs } from 'vue'
export default {
  components: {titleName, provideDom},
  setup(){
    let state = {
      title: 'provide 与 inject',
      name: 'zhanlifei',
      sex: '男'
    }
    // 向子组件以及子孙组件传递名为info的数据
    provide('info', state)
    
    // toRefs()将响应式的对象变为普通对象 再解构，在模板中就可以直接使用属性，不用state.name
    return {...toRefs(state)}
  }
}
</script>

<style scoped>
    
</style>