import * as types from './mutationTypes';

export default {
  [types.GET_CURRENT_USER]: (state, payload) => {
    state.currentUser = { ...payload };
  },
  [types.GET_USERS]: (state, payload) => {
    state.users = [...payload];
  },
  [types.LOGIN]: (state, payload) => {
    state.currentUser = { ...payload.user };
    state.token = payload.token;
  },
  [types.REGISTER]: (state, payload) => {
    state.currentUser = { ...payload.user };
    state.token = payload.token;
  },
  [types.LOGOUT]: state => {
    state.currentUser = null;
    state.token = '';
  }
};
