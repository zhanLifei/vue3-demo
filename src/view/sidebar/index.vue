<template>
    <div class="vue3">VUE<span style="float: right;cursor: pointer;" @click="collapse">{{isCollapse}}</span></div>
    <div>
        <ul>
            <li style="font-weight:600">VUE 2.0</li>
            <li class="pdl15">
                <ul>
                    <li @click="toPath('计算属性-computed','/computed')">计算属性-computed</li>
                    <li @click="toPath('Watch监听','/watch')">Watch监听</li>
                    <li @click="toPath('Watch深度监听','/watch2')">Watch深度监听</li>
                    <li @click="toPath('父子组件传值','/by-value')">父子组件传值</li>
                </ul>
            </li>
        </ul>
        <ul>
            <li style="font-weight:600">VUE 3.0</li>
            <li class="pdl15">
                <ul>
                    <li @click="toPath('首页','/index')">首页</li>
                    <li @click="toPath('登入','/login')">登入</li>
                    <li @click="toPath('详情页','/detail')">详情页</li>
                    <li @click="toPath('provide与inject','/provide-inject')">provide与inject</li>
                    <li @click="toPath('在monted中使用echarts','/monted-echarts')">在monted中使用echarts</li>
                    <li @click="toPath('在setup中使用echarts','/setup-echarts')">在setup中使用echarts</li>
                    <li @click="toPath('组合式API','/组合式API')">组合式API</li>
                    <li @click="toPath('ref获取dom','/ref获取dom')">ref获取dom</li>
                    <li @click="toPath('toRef','/toRef')">toRef</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import {ref} from 'vue'
import { useRouter } from 'vue-router'
import {useStore} from 'vuex'
export default {
    emits: ['valueChange'],
    setup(props, ctx){
        const store = useStore();
        const router = useRouter();
        // ref 函数只能监听简单类型数据, 数组对象不能监听, 需要使用 reactive函数
        const isCollapse = ref('<');
        const leftStyle = ref('')
        const leftStyle2 = ref('')
        const collapse = () =>{
            if(isCollapse.value == '<'){
                isCollapse.value = '>';
                leftStyle.value = 'left: -198px';
                leftStyle2.value = 'margin-left: 55px;';
            } else {
                isCollapse.value = '<';
                leftStyle.value = 'left: 0';
                leftStyle2.value = 'margin-left: 253px;';
            }
            ctx.emit('valueChange',{leftStyle, leftStyle2})
        }
        const toPath = (title,url) =>{
            store.commit('addNav', {title,url})
            // 跳转路由
            router.push(url)
        }
        return {isCollapse, leftStyle, leftStyle2, collapse, toPath }
    }
}
</script>

<style scoped>
.pdl15{
    padding-left: 5%;
}
ul li {
    color: #333;
    list-style: none;
    line-height: 30px;
    font-size: 14px;
    
}
ul li a{
    display: inline-block;
    width: 95%;
    padding-left: 5%;
    
}
ul li a:hover{
    background: #ccc;
    
}
</style>