<template>
  <div>
      <titleName :msg="'watch监听'"></titleName>
      <h3>今天天气很{{isHost ? '炎热' : '凉爽'}}</h3>
      <button @click="changeMeather">切换</button>
      <br>
      <br>
      <h3>a的值为: {{number.a}}</h3>
      <button @click="number.a++">a++</button>
      <h3>b的值为: {{number.b}}</h3>
      <button @click="number.b++">b++</button>
  </div>
</template>

<script>
import titleName from '../../components/titleName.vue'
export default {
    components: { titleName },
    data(){
      return {
        isHost: false,
        number: {
          a: 1,
          b: 1
        }
      } 
    },
    methods: {
      changeMeather(){
        this.isHost = !this.isHost
      },
      numbers(){
        this.number.a++
      }
    },
    
    watch: {
      'isHost': {
        immediate: true, //初始化调用下handler
        handler(news, old){
          console.log(news, old)
        }
      },

      'number.a': {
        handler(news, old){
          console.log(news, old)
        }
      },
      'number.b': {
        handler(news, old){
          console.log(news, old)
        }
      },
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
</script>

<style>

</style>