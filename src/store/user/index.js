import mutations from './mutations';
import * as getters from './getters';

export default {
  state: {
    users: [],
    currentUser: null,
    token: ''
  },
  mutations,
  getters,
  namespaced: true
};
