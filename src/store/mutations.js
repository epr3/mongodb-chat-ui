import * as types from './mutationTypes';

export default {
  [types.START_LOADING]: state => {
    state.loading = true;
  },
  [types.STOP_LOADING]: state => {
    state.loading = false;
  },
  [types.SET_ERROR]: (state, payload) => {
    state.error = payload;
  },
  [types.RESET_ERROR]: state => {
    state.error = '';
  }
};