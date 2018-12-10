<template>
  <div class="level">
    <div class="level-left">
      <div class="level-item">
        <span>Conversation: {{ name }}</span>
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <b-button text="Open" @click="conversationAction" />
      </div>
    </div>
  </div>
</template>

<script>
import BButton from './Button.vue';
export default {
  name: 'conversation-item',
  props: {
    name: {
      type: String,
      required: true
    },
    conversationAction: {
      type: Function,
      required: true
    }
  },
  components: {
    BButton
  }
};
</script>
