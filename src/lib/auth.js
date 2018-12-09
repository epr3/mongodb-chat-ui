const getToken = () => localStorage.getItem('mongo-token');
const setToken = token => localStorage.setItem('mongo-token', token);
const removeToken = () => localStorage.removeItem('mongo-token');

export default {
  getToken,
  setToken,
  removeToken
};
