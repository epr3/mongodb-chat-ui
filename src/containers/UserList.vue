<template>
  <div>
    <h2 class="subtitle">User list</h2>
    <template v-if="filteredUsers.length">
      <user-item
        v-for="user in filteredUsers"
        :key="user._id"
        :name="user.name"
        :email="user.email"
        :conversation-action="() => newConversation(user._id)"
      />
    </template>
    <p v-else>No other users here :(</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import UserItem from '../components/UserItem.vue';

export default {
  name: 'user-list',
  mounted() {
     this.getUsers();
  },
  components: {
    UserItem
  },
  computed: {
    ...mapGetters('user', ['filteredUsers'])
  },
  methods: {
    ...mapActions('user', ['getUsers']),
    newConversation(id) {
      this.$emit('chat:open', { userId: id, type: 'new' });
    }
  }
};
</script>
