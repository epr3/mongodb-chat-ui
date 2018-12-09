<template>
  <div class="level">
    <div class="level-left">
      <div class="level-item">
        <span>Conversation with: User x</span>
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <b-button text="Open" />
      </div>
    </div>
  </div>
</template>

<script>
import BButton from './Button.vue';
export default {
  name: 'conversation-item',
  components: {
    BButton
  }
};
</script>
