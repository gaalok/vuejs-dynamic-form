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
    listen: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,

    modelKey: {
      required: true,
      type: String,
    },

    modelValue: [String, Number],

    type: {
      required: true,
      type: String,
    },
  },

  methods: {
    handleInput(e) {
      this.$emit('change', {
        listen: this.listen,
        modelKey: this.modelKey,
        modelValue: e.target.value,
      });
    },
  },
};
</script>
