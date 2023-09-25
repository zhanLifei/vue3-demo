import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      navList: [
        {
            title: '计算属性-computed',
            url: '/computed'
        }
      ]
    }
  },
  mutations: {
    addNav(state, data){
        let status = true
        state.navList.map((item)=>{
            // 判断有没有重复的
            if(item.url == data.url || item.title == data.title){
                status = false
            }
        })
        if(status){
            state.navList.push(data)
        }
    },
    increment(state, data) {
      state.navList.splice(data,1)
    }
  },
  actions: {
    updateNavList(context, data) {
        context.commit('increment',data)
    }
  }
})

export default store