
<template>
  <div>
    <titleName :msg="title"></titleName>
    父传子:
    <son :father="fatherName" :message="message" @son_message="son_message" ref="refDemo"></son>
  </div>
</template>

<script>
import titleName from '../../components/titleName.vue'
import son from '../../components/son.vue'
export default {
    components: {titleName, son},
    data() {
        return {
            title: '父子组件传值',
            fatherName: 'zhanlifei',
            message: '??'
        }
    },
    methods:{
        son_message(message){
            this.message = message;
        }
    },
    mounted(){
        setTimeout(() => {
            this.$refs.refDemo.aaa('zhanlifei(湛礼飞)')
        }, 3000);
    }
}
</script>

<style>

</style>