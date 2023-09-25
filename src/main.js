import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
// import {setupI18n} from './lang'
import * as echarts from 'echarts'
const app = createApp(App)
app.use(router)
app.use(store)
// app.use(i18n)
// setupI18n(app)
app.mount('#app').echarts=echarts
