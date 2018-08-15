<template>
  <div class="dy-input">
    <input
      :value="modelValue"
      @input="handleInput"
      :type="type">
  </div>
</template>

<script>

export default {
  name: 'DyInput',

  props: {
    modelKey: {
      required: true,
      type: String,
    },

    modelValue: {
      type: [String, Number],
    },

    type: {
      required: true,
      type: String,
    },
  },

  methods: {
    handleInput(e) {
      this.$emit('input', {
        modelKey: this.modelKey,
        modelValue: e.target.value,
      });
    },
  },
};
</script>

<style lang="scss">
.dy-input {
  display: inline-block;
}
</style>
