<template>
    <div>{{form.name}}</div>
</template>

<script>
import { inject } from 'vue'
export default {
    setup(){
        let infoObj = {
            name: '子组件传过来的数据'
        }
        
        // 接收父组件或祖先组件传递过来的数据。接收一个参数 key
        let form = inject('info')
        console.log('接受父组件传过来的值',form)

        return {form, infoObj}
    }
}
</script>

<style>

</style>