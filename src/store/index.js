import { store } from "quasar/wrappers";
import { createStore } from "vuex";

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state: { expertMode: false },
    mutations: {
      SET_EXPERT_MODE(state, expertMode) {
        state.expertMode = expertMode;
      },
    },
    actions: {
      updateExpertMode({ commit }, expertMode) {
        commit("SET_EXPERT_MODE", expertMode);
      },
    },
    getters: {
      expertMode: (state) => {
        return state.expertMode;
      },
    },

    modules: {
      absolute: {
        namespaced: true,
        state: {
          flour: 1000,
          water: 700,
          salt: 30,
          yeast: 1,
          sourdough: 30.0,
        },

        mutations: {
          SET_FLOUR(state, flour) {
            state.flour = flour;
          },
          SET_WATER(state, water) {
            state.water = water;
          },
          SET_SALT(state, salt) {
            state.salt = salt;
          },
          SET_YEAST(state, yeast) {
            state.yeast = yeast;
          },
          SET_SOURDOUGH(state, sourdough) {
            state.sourdough = sourdough;
          },
        },

        actions: {
          updateValues({ commit, rootState }, flour) {
            commit("SET_FLOUR", flour);
            commit(
              "SET_WATER",
              Math.round(
                (flour / 100) *
                  (rootState.percentage.water + Number.EPSILON) *
                  100
              ) / 100
            );
            commit(
              "SET_SALT",
              Math.round(
                (flour / 100) *
                  (rootState.percentage.salt + Number.EPSILON) *
                  100
              ) / 100
            );
            commit(
              "SET_YEAST",
              Math.round(
                (flour / 100) *
                  (rootState.percentage.yeast + Number.EPSILON) *
                  100
              ) / 100
            );
            commit(
              "SET_SOURDOUGH",
              Math.round(
                (flour / 100) *
                  (rootState.percentage.sourdough + Number.EPSILON) *
                  100
              ) / 100
            );
          },
        },

        getters: {
          flour: (state) => {
            return state.flour;
          },
          water: (state) => {
            return state.water;
          },
          salt: (state) => {
            return state.salt;
          },
          yeast: (state) => {
            return state.yeast;
          },
          sourdough: (state) => {
            return state.sourdough;
          },
        },
      },

      percentage: {
        namespaced: true,
        state: {
          water: 70,
          salt: 3,
          yeast: 0.1,
          sourdough: 3,
        },

        mutations: {
          SET_WATER(state, water) {
            state.water = water;
          },
          SET_SALT(state, salt) {
            state.salt = salt;
          },
          SET_YEAST(state, yeast) {
            state.yeast = yeast;
          },
          SET_SOURDOUGH(state, sourdough) {
            state.sourdough = sourdough;
          },
        },

        actions: {
          updateWater({ commit }, water) {
            commit("SET_WATER", water);
          },
          updateSalt({ commit }, salt) {
            commit("SET_SALT", salt);
          },
          updateYeast({ commit }, yeast) {
            commit("SET_YEAST", yeast);
          },
          updateSourdough({ commit }, sourdough) {
            commit("SET_SOURDOUGH", sourdough);
          },
          updateAll({ commit }, values) {
            commit("SET_WATER", values.water);
            commit("SET_SALT", values.salt);
            commit("SET_YEAST", values.yeast);
            commit("SET_SOURDOUGH", values.sourdough);
          },
        },

        getters: {
          water: (state) => {
            return state.water;
          },
          salt: (state) => {
            return state.salt;
          },
          yeast: (state) => {
            return state.yeast;
          },
          sourdough: (state) => {
            return state.sourdough;
          },
        },
      },
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
