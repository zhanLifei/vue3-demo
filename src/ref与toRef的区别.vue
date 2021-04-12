<template>
    <refAndToRef :msg="'ref与toRef的区别'"></refAndToRef>
    <p>{{ state1 }}</p>  //点击一下，变成4
    <button @click="add1">增加</button>

    <p>{{ state2 }}</p>    //点击一下，还是3
    <button @click="add2">增加</button>
</template>

<script>
import {ref, toRef} from 'vue'
import refAndToRef from './components/HelloWorld'
export default {
  components:{refAndToRef},
    setup() {
        const obj = {count: 3, count1: 9}
        const state1 = ref(obj.count)  //look
        const state2 = toRef(obj, 'count1')  //look

        const add1 = () => {
            state1.value ++
            console.log('原始值：', obj);   //原始值：3
            console.log('响应式数据对象ref：', state1);    //响应式数据对象ref：4
        }

        const add2 = () => {
            state2.value ++
            console.log('原始值：', obj);   // 原始值：4
            console.log('响应式数据对象toRef：', state2);    //响应式数据对象ref：4
        }

        return {state1, state2, add1, add2}
    }
    // `ref` 是对原数据的一个拷贝，不会影响到原始值；
    // `toRef` 是对原数据的一个引用，会影响到原始值。
    // 其中，如果你使用toref，但是视图（也就是dom里面的state2）并不会发生改变，所以
    // ref相对于用起来方便。
}
</script>