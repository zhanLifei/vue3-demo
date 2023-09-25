<template>
    <!-- 导航栏 -->
    <div class="warppers">
        <div class="nav">
            <span class="nav-item" v-for="(item, index) in store.state.navList"  :key='index' :style='color'>
                <router-link class="title" :to='item.url'>{{item.title}}</router-link>
                <span class="clear" @click="toUrl(store.state.navList, index)">✖</span>
            </span>
        </div>
    </div>
</template>

<script>
import {useStore} from 'vuex'
import { useRouter } from 'vue-router'
import { onMounted, computed, watch } from 'vue'
export default {
    setup(){
        const store = useStore();
        const router = useRouter();
        const toUrl = (data, index) => {
            store.dispatch('updateNavList', index)
            // 获取关闭tab后的最后一个URL
            var lastUrl = data[data.length-1].url
            // 跳转路由
            router.push(lastUrl)
        }
        
        computed(() => {
            
        });
        watch(store.state.navList, () => {
            
        })
        onMounted(() => {
            
        });
        return {store, toUrl}
    }
}
</script>

<style scoped>
.warppers{
    width: 100%;
    overflow-x: scroll;
    white-space: nowrap;
}
 .nav{
      
  }
  .nav .nav-item{
      border: 1px solid #ccc;
      margin-right: 10px;
      padding: 5px 10px;
  }
  .nav .nav-item .title{margin-right: 15px;}
  .nav .nav-item .clear{cursor: pointer;}
</style>