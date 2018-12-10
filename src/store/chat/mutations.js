import * as types from './mutationTypes';

export default {
  [types.GET_CONVERSATIONS]: (state, payload) => {
    state.conversations = [...payload];
  },
  [types.NEW_CONVERSATION]: (state, payload) => {
    state.currentConversation = payload.conversationId;
    state.messages.push({ ...payload });
  },
  [types.GET_MESSAGES]: (state, payload) => {
    state.currentConversation = payload.conversationId;
    state.messages = [...payload.message];
  },
  [types.NEW_MESSAGE]: (state, payload) => {
    state.messages.push({ ...payload });
  },
  [types.SET_CURRENT_CONVERSATION]: (state, payload) => {
    state.currentConversation = payload;
  }
};
