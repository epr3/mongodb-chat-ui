<template>
  <div class="field">
    <div class="control">
      <input
        :type="type"
        class="input"
        :value="value"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'b-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String
    },
    value: {
      type: [String, Number],
      required: true
    }
  }
};
</script>
