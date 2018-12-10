<template>
  <div>
    <h2 class="subtitle">Conversations</h2>
    <template v-if="conversations.length">
      <conversation-item
        v-for="item in conversations"
        :key="item._id"
        :name="item._id"
        :conversation-action="() => openConversation(item._id)"
      />
    </template>
    <p v-else>No conversations yet</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import ConversationItem from '../components/ConversationItem.vue';

export default {
  name: 'conversation-list',
  components: {
    ConversationItem
  },
  mounted() {
    this.getConversations();
  },
  computed: {
    ...mapState('chat', ['conversations'])
  },
  methods: {
    ...mapActions('chat', ['getConversations']),
    openConversation(id) {
      this.$emit('chat:open', { conversationId: id, type: 'old' });
    }
  }
};
</script>
