import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import info from "./info";
import category from "./category";
import record from "./record";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
    async fetchCurrency() {
      const key = process.env.VUE_APP_FIXER;
      const base = "USD";
      const currencies = "RUB, USD, EUR, KZT, CNY";

      const Fixer = require("fixer-node");
      const fixer = new Fixer(key);

      const result = await fixer.base({ symbols: currencies });
      //let fixer = require("fixer-api");
      //fixer.baseUrl = "http://data.fixer.io/api/";

      //const result = await fixer.base({ base: "AUD", symbols: "USD, EUR" });
      // fetch(
      //   `http://data.fixer.io/api/latest?access_key=${key}&base=${base}&symbols=${currencies}`
      // );

      return await result;
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth,
    info,
    category,
    record
  }
});
