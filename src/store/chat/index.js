import mutations from './mutations';
import * as actions from './actions';

export default {
  state: {
    conversations: [],
    messages: []
  },
  mutations,
  actions,
  namespaced: true
};
