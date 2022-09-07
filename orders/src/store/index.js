import { createStore } from "vuex";
import findOrdersById from "../utils/index.js";

const store = createStore({
  state: {
    all: [],
  },
  getters: {
    getAmountOfOrders(state) {
      return state.all.length;
    },
    getAll(state) {
      return state.all;
    },
  },
  actions: {
    getAllProducts({ commit }, id) {
      const result = findOrdersById(id);
      commit("setProducts", result);
    },
  },
  mutations: {
    setProducts(state, products) {
      state.all = products;
    },
  },
});
export default store;
