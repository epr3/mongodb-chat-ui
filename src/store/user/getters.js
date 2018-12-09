export const isAuthenticated = state => !!state.token;
export const filteredUsers = state =>
  state.users.filter(user => user._id !== state.currentUser._id);
