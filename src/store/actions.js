import * as types from './mutationTypes';

export const emitEvent = ({ commit }, payload) => {
  commit(types.EMIT_EVENT, payload);
};
