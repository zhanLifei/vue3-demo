<template>
    <div class="warpper">
        <div class="left" :style="leftStyle">
            <!-- 侧边栏 -->
            <sidebar @valueChange="collapse"/>
        </div>
        <div class="right" ref="myRef" :style="leftStyle2">
            <!-- 导航栏 -->
            <top-nav-tab :navWid="navWid"></top-nav-tab>
            <div>
                <!-- 内容 -->
                <router-view/>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import topNavTab from "../topNavTab/index.vue";
  import sidebar from "../sidebar/index.vue"
  import {ref, onMounted} from 'vue'
  export default {
    components: { topNavTab, sidebar },
    setup(){
        const navWid = ref(null)
        const myRef = ref(null);
        const leftStyle = ref('');
        const leftStyle2 = ref('');
        const collapse = (e) => {
            leftStyle.value = e.leftStyle._value
            leftStyle2.value = e.leftStyle2._value
        }
        onMounted(() => {
            navWid.value = myRef.value?.offsetWidth
            console.log('接收props值',navWid.value)
        });
        return { leftStyle, leftStyle2, collapse, myRef , navWid}
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
  .right{
      width: 100%;
      margin-right: 15px;
      margin-left: 253px;
      background: #fafafa;
      overflow: hidden;
  }
  </style>