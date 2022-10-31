<template>
  <div>
    <titleName :msg="'计算属性-computed'"></titleName>
    <ul>
      <li>姓: <input type="text" v-model="firstName"></li>
      <li>名: <input type="text" v-model="lastName"></li>
    </ul>
    全名:{{fullName}}
  </div>
</template>

<script>
import titleName from '../../components/titleName.vue'
export default {
    components: { titleName },
    data(){
      return {
        firstName: '张',
        lastName: '三',
        aaa: '1'
      } 
    },
    computed: {
      fullName: {
        get(){
          console.log('get被调用了!!')
          return `${this.firstName}+${this.lastName}+${this.aaa}`
        },
        set(value){
          console.log('set', value)
        }
      }
    }
    // 简写方式
    // computed:{
    //   fullName(){
    //     return this.firstName + '-' + this.lastName
    //   }
    // }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
</script>

<style>

</style>