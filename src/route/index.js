  
import { createRouter,createWebHistory} from "vue-router";
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/home',
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
            }
        ]
      },
      
    ]
  })



  export default router