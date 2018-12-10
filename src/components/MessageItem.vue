<template>
  <div>
    <span>{{ author.name }}: {{ message }}</span>
  </div>
</template>

<script>
export default {
  name: 'message-item',
  props: {
    message: {
      type: String,
      required: true
    },
    author: {
      type: Object,
      required: true
    }
  }
};
</script>
