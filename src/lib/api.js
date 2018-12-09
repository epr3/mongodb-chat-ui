import axios from 'axios';
import auth from './auth';

const create = (baseURL = 'http://localhost:3000') => {
  const api = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  });

  api.interceptors.request.use(
    config => {
      const token = auth.getToken();
      if (
        !!token &&
        (!config.url.includes('login') || !config.url.includes('register'))
      ) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    err => Promise.reject(err)
  );

  const postLogin = (email, password) =>
    api.post('/login', { email, password });
  const postRegister = (email, password) =>
    api.post('/register', { email, password, name });
  const getUsers = () => api.get('/users');
  const getUser = () => api.get('/users.me');
  const getConversations = () => api.get('/chat');
  const postConversation = conversationObj =>
    api.post('/chat', conversationObj);
  const getMessages = conversationId => api.get(`/chat/${conversationId}`);
  const postMessage = (conversationId, messageObj) =>
    api.post(`/chat/${conversationId}`, messageObj);

  return {
    postLogin,
    postRegister,
    getUsers,
    getUser,
    getConversations,
    postConversation,
    getMessages,
    postMessage
  };
};

export default create;
