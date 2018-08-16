<template>
  <button
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

    disabled: Boolean,
  },

  methods: {
    handleClick(e) {
      this.$emit(this.listen, e);
    },
  },
};
</script>
