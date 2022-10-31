<template>
  <div class="warpper">
      <div class="left" :style="leftStyle">
          <div class="vue3">VUE<span style="float: right;cursor: pointer;" @click="collapse">{{isCollapse}}</span></div>
            <div>
                <ul>
                    <li><router-link to='' style="font-weight:600">VUE 2.0</router-link></li>
                    <li class="pdl15">
                        <ul>
                            <li><router-link to='/computed'>计算属性-computed</router-link></li>
                            <li><router-link to='/watch'>Watch监听</router-link></li>
                            <li><router-link to='/watch2'>Watch深度监听</router-link></li>
                            <li><router-link to='/by-value'>父子组件传值</router-link></li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li><router-link to='' style="font-weight:600">VUE 3.0</router-link></li>
                    <li class="pdl15">
                        <ul>
                            <li><router-link to='/index'>首页</router-link></li>
                            <li><router-link to='/login'>登入</router-link></li>
                            <li><router-link to='/detail'>详情页</router-link></li>
                            <li><router-link to='/provide-inject'>provide与inject</router-link></li>
                            <li><router-link to='/monted-echarts'>在monted中使用echarts</router-link></li>
                            <li><router-link to='/setup-echarts'>在setup中使用echarts</router-link></li>
                            <li><router-link to='/组合式API'>组合式API</router-link></li>
                        </ul>
                    </li>
                </ul>
          </div>
      </div>
      <div class="right" :style="leftStyle2">
          <router-view/>
      </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
        // ref 函数只能监听简单类型数据, 数组对象不能监听, 需要使用 reactive函数
        const isCollapse = ref('<');
        const leftStyle = ref('')
        const leftStyle2 = ref('')
        const collapse = () =>{
            if(isCollapse.value == '<'){
                isCollapse.value = '>';
                leftStyle.value = 'left: -198px';
                leftStyle2.value = 'margin-left: 70px;';
            } else {
                isCollapse.value = '<';
                leftStyle.value = 'left: 0';
                leftStyle2.value = 'margin-left: 273px;';
            }
            
        }

        return {isCollapse, leftStyle, leftStyle2, collapse }
    }
}
</script>

<style scoped>
.warpper{
    display: flex;
    justify-content: space-between;
}
.left{
    width: 240px;
    background: #fafafa;
    position: fixed;
    top: 0;
    bottom: 0;
    border-right: 1px solid #ddd;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    transition: left .25s ease;
    box-sizing: border-box;
}
.left .vue3{
    line-height: 50px;
    border-bottom: 1px solid #ddd;
    text-align: center;
    white-space: nowrap;
    font-weight: 700;
    font-size: 16px;
    padding-right: 15px;
}
.pdl15{
    padding-left: 5%;
}
.left ul li {
    color: #333;
    list-style: none;
    line-height: 30px;
    font-size: 14px;
    
}
.left ul li a{
    display: inline-block;
    width: 95%;
    padding-left: 5%;
    
}
.left ul li a:hover{
    background: #ccc;
    
}
.right{
    width: 80%;
    margin-left: 273px;
}
</style>