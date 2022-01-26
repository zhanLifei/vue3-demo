  
import { createRouter,createWebHistory} from "vue-router";
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '',
        redirect: '/index' ,
        component: () => import("../view/home"),
        children: [
            {
                path: '/index',
                component: () => import("../view/index")
            },
            {
                path: '/login',
                component: () => import("../view/login")
            },
            {
                path: '/detail',
                component: () => import("../view/details")
            },
            {
                path: '/provide-inject',
                component: () => import("../view/provide-inject")
            },
            {
                path: '/monted-echarts',
                component: () => import("../view/monted-echarts")
            },
            {
                path: '/setup-echarts',
                component: () => import("../view/setup-echarts")
            },
            {
                path: '/组合式API',
                component: () => import("../view/组合式API")
            },
        ]
      },
      
    ]
  })



  export default router