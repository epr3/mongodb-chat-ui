<template>
  <div class="section is-fullheight">
    <h2 class="title is-centered">Demo Chat</h2>
    <div class="columns is-centered">
      <div class="column is-one-third"><user-list /></div>
      <div class="column is-one-third"><conversation-list /></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import UserList from '../containers/UserList.vue';
import ConversationList from '../containers/ConversationList.vue';
export default {
  name: 'home',
  components: {
    UserList,
    ConversationList
  },
  mounted() {
    this.getCurrentUser();
    this.getConversations();
    this.getUsers();
  },
  methods: {
    ...mapActions('user', ['getCurrentUser', 'getUsers']),
    ...mapActions('chat', ['getConversations'])
  }
};
</script>
