<template>
  <button @click="$emit('click')" class="button">{{ text }}</button>
</template>

<script>
export default {
  name: 'b-button',
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>
