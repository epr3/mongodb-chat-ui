<template>
  <div class="section is-fullheight">
    <h2 class="title is-centered">Demo Chat</h2>
    <div class="columns is-centered">
      <div class="column is-one-third">
        <user-list @chat:open="openChat"/>
      </div>
      <div class="column is-one-third">
        <chat-window
          v-if="chatOpened"
          @chat:close="closeChat"
          :conversation-id="conversationId"
          :recipient-id="recipientId"
        />
        <conversation-list @chat:open="openChat" v-else />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import UserList from '../containers/UserList.vue';
import ConversationList from '../containers/ConversationList.vue';
import ChatWindow from '../containers/ChatWindow.vue';

export default {
  name: 'home',
  data: () => ({
    chatOpened: false,
    recipientId: '',
    conversationId: ''
  }),
  components: {
    UserList,
    ConversationList,
    ChatWindow
  },
  mounted() {
    this.getCurrentUser();
    this.getConversations();
    this.getUsers();

    this.socket.on('refresh messages', data => {
      this.conversationId = data;
    });
  },
  computed: {
    ...mapState(['socket'])
  },
  methods: {
    ...mapActions('user', ['getCurrentUser', 'getUsers']),
    ...mapActions('chat', ['getConversations']),
    openChat(data) {
      this.chatOpened = true;
      if (data.type === 'new') {
        this.recipientId = data.userId;
      } else this.conversationId = data.conversationId;
    },
    closeChat() {
      this.chatOpened = false;
      this.recipientId = '';
      this.conversationId = '';
    }
  }
};
</script>
