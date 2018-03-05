import { COUNT } from '../actionTypes';
import mockPromise from '../../utils/mockPromise';

export default {
  namespaced: true,
  state() {
    return {
      value: 10,
    };
  },
  getters: {
    countPlus5(state) {
      return state.value + 5;
    },
    countPlus10(state, getters) {
      return getters.countPlus5 + 5;
    },
  },
  actions: {
    async [COUNT.INCREASE_COUNT_ASYNC]({ state, commit, rootState }) {
      commit(COUNT.INCREASE_COUNT_ASYNC);
      try {
        const data = await mockPromise({ a: 1, b: 2, c: 3 }, 2000);
        commit(COUNT.INCREASE_COUNT_ASYNC_SUCCESS);
        return data;
      } catch (err) {
        commit(COUNT.INCREASE_COUNT_ASYNC_FAIL);
        throw err;
      }
    },
  },
  mutations: {
    [COUNT.INCREASE_COUNT](state) {
      state.value++;
    },
    [COUNT.DECREASE_COUNT](state) {
      state.value--;
    },
    [COUNT.INCREASE_COUNT_WITH_AMOUNT](state, payload) {
      state.value += payload.amount;
    },
    [COUNT.INCREASE_COUNT_ASYNC](state) {
      console.log(state);
    },
    [COUNT.INCREASE_COUNT_ASYNC_SUCCESS](state) {
      state.value++;
    },
    [COUNT.INCREASE_COUNT_ASYNC_FAIL](state) {
    },
  },
};
