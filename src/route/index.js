  
import { createRouter,createWebHistory} from "vue-router";
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '',
        redirect: '/index' ,
        component: () => import("../view/sidebar/index"),
        children: [
            {
                path: '/index',
                component: () => import("../view/demo/index")
            },
            {
                path: '/login',
                component: () => import("../view/demo/login")
            },
            {
                path: '/detail',
                component: () => import("../view/demo/details")
            },
            {
                path: '/provide-inject',
                component: () => import("../view/demo/provide-inject")
            },
            {
                path: '/monted-echarts',
                component: () => import("../view/demo/monted-echarts")
            },
            {
                path: '/setup-echarts',
                component: () => import("../view/demo/setup-echarts")
            },
            {
                path: '/组合式API',
                component: () => import("../view/demo/组合式API")
            },
        ]
      },
      
    ]
  })



  export default router