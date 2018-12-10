<template>
  <div class="section is-fullheight">
    <h2 class="title is-centered">Demo Chat</h2>
    <div class="columns is-centered">
      <div class="column is-one-third">
        <user-list @chat:open="openChat" />
      </div>
      <div class="column is-one-third">
        <chat-window
          v-if="chatOpened"
          @chat:close="closeChat"
          :recipient-id="recipientId"
        />
        <conversation-list @chat:open="openChat" v-else />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import UserList from '../containers/UserList.vue';
import ConversationList from '../containers/ConversationList.vue';
import ChatWindow from '../containers/ChatWindow.vue';

export default {
  name: 'home',
  data: () => ({
    chatOpened: false,
    recipientId: ''
  }),
  components: {
    UserList,
    ConversationList,
    ChatWindow
  },
  mounted() {
    this.getCurrentUser();
  },
  methods: {
    ...mapActions('user', ['getCurrentUser']),
    ...mapActions('chat', ['setCurrentConversation']),
    openChat(data) {
      this.chatOpened = true;
      if (data.type === 'new') {
        this.recipientId = data.userId;
      } else this.setCurrentConversation(data.conversationId);
    },
    closeChat() {
      this.chatOpened = false;
      this.recipientId = '';
    }
  }
};
</script>
