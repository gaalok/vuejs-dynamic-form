<template>
  <div>
    <form
      :class="{
        'dy-form-inline': formConfig.inline,
        'dy-label-left': formConfig.labelPosition === 'left',
      }">

      <dy-form-item
        v-for="item in formConfig.itemList"
        :key="item.modelKey"
        :item-config="item"
        :model-value="model[item.modelKey]"
        @input="handleInput"
        :label-width="formConfig.labelWidth">
      </dy-form-item>

    </form>
  </div>
</template>

<script>
export default {
  name: 'DyForm',

  props: {
    model: {
      required: true,
      type: Object,
    },

    formConfig: {
      required: true,
      type: Object,
    },
  },

  methods: {
    handleInput(e) {
      this.model[e.modelKey] = e.modelValue;
    },
  },
};
</script>

<style lang="scss">
.dy-form-inline {
  .dy-form-item, .dy-input, .dy-select {
    display: inline-block;
  }
}

.dy-label-left {
  .dy-label {
    text-align-last: left;
  }
}
</style>

