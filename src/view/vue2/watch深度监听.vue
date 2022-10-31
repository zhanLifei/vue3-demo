<template>
  <div>
      <titleName :msg="'watch深度监听'"></titleName>
      <h3>a的值为: {{numbers.a}}</h3>
      <button @click="numbers.a++">a++</button>
      <h3>b的值为: {{numbers.b}}</h3>
      <button @click="numbers.b++">b++</button>
  </div>
</template>

<script>
import titleName from '../../components/titleName.vue'
export default {
    components: { titleName },
    data(){
      return {
        isHost: false,
        numbers: {
          a: 1,
          b: 1
        }
      } 
    },
    methods: {
      changeMeather(){
        this.isHost = !this.isHost
      }
    },
    computed: {
      numbersNew() {
          return JSON.parse(JSON.stringify(this.numbers));
      }
    },
    // Vue watch深度监测时handler新值和旧值一样, 设置一个计算属性，使用序列化、反序列化保存监听对象的副本，然后在监听属性中监听这个计算属性即可
    watch: { // 监视属性
        numbersNew: {
            handler(newValue, oldValue) {
                    console.log("numbers对象里面的a被修改了！", newValue, oldValue);
            },
            deep: true
        }
      }
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
</script>

<style>

</style>