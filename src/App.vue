<template>
    <router-view/>
</template>

<script>

import * as echarts from 'echarts'
import { provide } from 'vue'

export default {
    name: 'App',
    setup(){
        provide('ec',echarts)//provide
    }
}
</script>
<style>
body{
    background: #f2f2f2;
}
*{
    margin: 0;
    padding: 0;
}
.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden;}
.clearfix{*zoom:1;}
a{
    color: #333;
    text-decoration: none;
}
ul li{
    list-style: none;
}
</style>
