<template>
  <div class="container">{{ conversations }}</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'conversation-list',
  computed: {
    ...mapState('chat', ['conversations'])
  }
};
</script>
