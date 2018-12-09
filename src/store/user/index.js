import mutations from './mutations';
import * as getters from './getters';
import * as actions from './actions';

export default {
  state: {
    users: [],
    currentUser: null,
    token: ''
  },
  mutations,
  getters,
  actions,
  namespaced: true
};
