import Vue from 'vue';
import Vuex from 'vuex';
import io from 'socket.io-client';

import user from './user';
import chat from './chat';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: '',
    loading: false,
    socket: io.connect('http://localhost:3000')
  },
  modules: {
    user,
    chat
  }
});
