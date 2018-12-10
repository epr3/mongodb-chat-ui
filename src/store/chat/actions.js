import api from '../../lib/api';
import * as types from './mutationTypes';
import * as rootTypes from '../mutationTypes';

const API = api();

export const getConversations = async ({ commit }) => {
  try {
    commit(rootTypes.START_LOADING, null, { root: true });
    const response = await API.getConversations();
    commit(types.GET_CONVERSATIONS, response.data);
  } catch (e) {
    console.log(e.message);
  }
  commit(rootTypes.STOP_LOADING, null, { root: true });
};

export const getMessages = async ({ commit }, payload) => {
  try {
    commit(rootTypes.START_LOADING, null, { root: true });
    const response = await API.getMessages(payload);
    commit(
      rootTypes.EMIT_EVENT,
      {
        event: 'enter conversation',
        body: payload
      },
      { root: true }
    );
    commit(types.GET_MESSAGES, response.data);
  } catch (e) {
    console.log(e.message);
  }
  commit(rootTypes.STOP_LOADING, null, { root: true });
};

export const newConversation = async ({ commit }, payload) => {
  try {
    commit(rootTypes.START_LOADING, null, { root: true });
    const response = await API.postConversation(payload);
    commit(types.NEW_CONVERSATION, response.data);
    commit(
      rootTypes.EMIT_EVENT,
      {
        event: 'enter conversation',
        body: response.data._id
      },
      { root: true }
    );
  } catch (e) {
    console.log(e.message);
  }
  commit(rootTypes.STOP_LOADING, null, { root: true });
};

export const newMessage = async ({ commit }, payload) => {
  try {
    commit(rootTypes.START_LOADING, null, { root: true });
    const response = await API.postMessage(
      payload.conversationId,
      payload.message
    );
    commit(types.NEW_MESSAGE, response.data);
    commit(
      rootTypes.EMIT_EVENT,
      {
        event: 'new message',
        body: payload.conversationId
      },
      { root: true }
    );
  } catch (e) {
    console.log(e.message);
  }
  commit(rootTypes.STOP_LOADING, null, { root: true });
};
