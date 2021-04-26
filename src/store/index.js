import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store =  new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    setToken(state, token) {
      localStorage.setItem('token1', token);
      state.token = token;
    },
    delToken(state) {
      localStorage.removeItem('token1');
      state.token = '';
    }
  },
  actions: {
  },
  modules: {
  }
})

// 在页面加载时读取localStorage里的状态信息
if (localStorage.getItem("token1")) {
  let token1 = localStorage.getItem("token1");
  store.commit("setToken", token1);
}

export default store;
