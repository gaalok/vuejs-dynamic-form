<template>
  <div class="dy-input">
    <input
      :value="modelValue"
      @input="handleInput"
      :type="type"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled">
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

    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
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
