<template>
  <button
    :type="nativeType"
    :disabled="disabled"
    @click="handleClick">
    {{label}}
  </button>
</template>

<script>
export default {
  name: 'DyButton',

  props: {
    label: String,
    listen: String,
    nativeType: {
      type: String,
      default: 'button'
    },

    disabled: Boolean,
  },

  methods: {
    handleClick(e) {
      this.$emit(this.listen, e);
    },
  },
};
</script>
