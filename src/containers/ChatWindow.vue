<template>
  <div>
    <div>
      <span class="subtitle">Chat Window</span>
      <a class="delete" @click="$emit('chat:close')"/>
    </div>
    <div>
      <template v-if="messages.length">
        <message-item
          v-for="item in messages"
          :key="item._id"
          :message="item.body"
          :author="item.author"
        />
      </template>
      <p v-else>No messages yet.</p>
    </div>
    <div>
      <b-input v-model="message" type="text" placeholder="Type your message here"/>
      <b-button text="Send" @click="sendMessage"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import MessageItem from '../components/MessageItem.vue';
import BInput from '../components/Input.vue';
import BButton from '../components/Button.vue';

export default {
  name: 'chat-window',
  data: () => ({
    message: ''
  }),
  props: {
    recipientId: {
      type: String
    }
  },
  mounted() {
    if (this.currentConversation) {
      this.refreshChat();
      this.socket.emit('enter conversation', this.currentConversation);
    }
    this.socket.on('refresh messages', () => {
      this.refreshChat();
    });
  },
  components: {
    MessageItem,
    BInput,
    BButton
  },
  computed: {
    ...mapState(['socket']),
    ...mapState('chat', ['messages', 'currentConversation']),
    ...mapState('user', ['currentUser'])
  },
  methods: {
    ...mapActions('chat', ['getMessages', 'newConversation', 'newMessage']),
    refreshChat() {
      this.getMessages(this.currentConversation);
    },
    sendMessage() {
      if (this.currentConversation) {
        this.newMessage({
          conversationId: this.currentConversation,
          message: {
            body: this.message,
            author: this.currentUser._id
          }
        });
      } else {
        this.newConversation({
          userId: this.currentUser._id,
          recipientId: this.recipientId,
          body: this.message,
          author: this.currentUser._id
        });
      }
      this.message = '';
    }
  }
};
</script>
