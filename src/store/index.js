import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state, action) {
      state.count += action.payload;
    },
  },
  actions: {},
  modules: {},
});
