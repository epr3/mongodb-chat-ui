<template>
  <div class="container">{{ filteredUsers }}</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'user-list',
  computed: {
    ...mapGetters('user', ['filteredUsers'])
  }
};
</script>
