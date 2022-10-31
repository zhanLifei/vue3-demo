<template>
  <div>
    <div>我的爸爸叫: {{name}}</div>
    子传父:
    <div>把儿子的事情告诉爸爸: {{message}}<button @click="to_message()">传送</button></div>
  </div>
</template>

<script>
export default {
    props:{
        father:{
            type: String,
            default: 'xxx'
        },
        message: {
            type: String,
            default: ''
        }
    },
    data(){
        return {
            msg: '我明年要买房!',
            name: ''
        }
    },
    methods: {
        to_message(){
            this.$emit('son_message', this.msg)
        },
        // 三秒钟后通过父组件改变name值
        aaa(data){
            this.name = data
        }
    },
    mounted(){
        this.name = this.father
    }
}
</script>

<style>

</style>