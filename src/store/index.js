import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    province: [],
  },
  getters: {},
  mutations: {
    getProvince(state, payload) {
      console.log(`payload: ${payload}`);
      return state.province.push({ name: "广东省" });
    },
  },
  actions: {},
  modules: {},
});
