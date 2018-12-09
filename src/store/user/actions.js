import auth from '../../lib/auth';
import api from '../../lib/api';
import * as types from './mutationTypes';
import * as rootTypes from '../mutationTypes';

const API = api();

export const login = async ({ commit }, payload) => {
  try {
    commit(rootTypes.START_LOADING, null, { root: true });
    const response = await API.postLogin(payload);
    commit(types.LOGIN, response.data.data);
    auth.setToken(response.data.data.token);
  } catch (e) {
    console.log(e.message);
  }
  commit(rootTypes.STOP_LOADING, null, { root: true });
};

export const register = async ({ commit }, payload) => {
  try {
    commit(rootTypes.START_LOADING, null, { root: true });
    const response = await API.postRegister(payload);
    commit(types.REGISTER, response.data.data);
    auth.setToken(response.data.data.token);
  } catch (e) {
    console.log(e.message);
  }
  commit(rootTypes.STOP_LOADING, null, { root: true });
};

export const logout = ({ commit }) => {
  commit(rootTypes.START_LOADING, null, { root: true });
  commit(types.LOGOUT);
  auth.removeToken();
  commit(rootTypes.STOP_LOADING, null, { root: true });
};

export const getUsers = async ({ commit }) => {
  try {
    commit(rootTypes.START_LOADING, null, { root: true });
    const response = await API.getUsers();
    commit(types.GET_USERS, response.data.data);
  } catch (e) {
    console.log(e.message);
  }
  commit(rootTypes.STOP_LOADING, null, { root: true });
};

export const getCurrentUser = async ({ commit }) => {
  try {
    commit(rootTypes.START_LOADING, null, { root: true });
    const response = await API.getUser();
    commit(types.GET_CURRENT_USER, response.data.data);
  } catch (e) {
    console.log(e.message);
  }
  commit(rootTypes.STOP_LOADING, null, { root: true });
};
