  
import { createRouter,createWebHistory} from "vue-router";
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '',
        redirect: '/index' ,
        component: () => import("../view/home/index"),
        children: [
            // vue2案例
            {
                path: '/computed',
                component: () => import("../view/vue2/计算属性-computed")
            },
            {
                path: '/watch',
                component: () => import("../view/vue2/watch监听")
            },
            {
                path: '/watch2',
                component: () => import("../view/vue2/watch深度监听")
            },
            {
                path: '/by-value',
                component: () => import("../view/vue2/父子组件传值")
            },
            // vue3案例
            {
                path: '/index',
                component: () => import("../view/vue3/index")
            },
            {
                path: '/login',
                component: () => import("../view/vue3/login")
            },
            {
                path: '/detail',
                component: () => import("../view/vue3/details")
            },
            {
                path: '/provide-inject',
                component: () => import("../view/vue3/provide-inject")
            },
            {
                path: '/monted-echarts',
                component: () => import("../view/vue3/monted-echarts")
            },
            {
                path: '/setup-echarts',
                component: () => import("../view/vue3/setup-echarts")
            },
            {
                path: '/组合式API',
                component: () => import("../view/vue3/组合式API")
            },
            {
                path: '/ref获取dom',
                component: () => import("../view/vue3/ref获取dom")
            },
            {
                path: '/toRef',
                component:() => import("../view/vue3/toRef")
            }
        ]
      },
      
    ]
  })



  export default router