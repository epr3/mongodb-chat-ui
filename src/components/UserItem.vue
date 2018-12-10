<template>
  <div class="level">
    <div class="level-left">
      <div class="level-item">
        <span>{{ name }}</span>
      </div>
      <div class="level-item">
        <span>{{ email }}</span>
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <b-button text="Start conversation" @click="conversationAction" />
      </div>
    </div>
  </div>
</template>

<script>
import BButton from './Button.vue';
export default {
  name: 'user-item',
  props: {
    name: {
      type: String,
      required: true
    },
    email: {
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
