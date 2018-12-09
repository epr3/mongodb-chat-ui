import Vue from 'vue';
import Vuex from 'vuex';
import io from 'socket.io-client';

import mutations from './mutations';
import * as actions from './actions';

import user from './user';
import chat from './chat';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: '',
    loading: false,
    socket: io.connect('http://localhost:3000')
  },
  mutations,
  actions,
  modules: {
    user,
    chat
  }
});
