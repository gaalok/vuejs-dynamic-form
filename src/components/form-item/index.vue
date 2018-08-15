<template>
  <div class="dy-form-item">
    <label class="dy-label"
      :style="labelStyle">{{itemConfig.label}}</label>

    <dy-input
      :model-key="itemConfig.modelKey"
      :type="itemConfig.type"
      v-bind="$attrs"
      v-on="$listeners"
      ></dy-input>

  </div>
</template>

<script>

export default {
  name: 'DyFormItem',

  props: {
    itemConfig: {
      required: true,
      type: Object,
    },

    labelWidth: {
      type: [Number, String],
      default: '',
    },
  },

  computed: {
    labelStyle() {
      const width = typeof this.labelWidth === 'number'
        ? `${this.labelWidth}px`
        : this.labelWidth;

      return {
        width,
      };
    },
  },
};
</script>

<style lang="scss">
.dy-form-item {
  padding: 10px;
}

.dy-label {
  display: inline-block;
  padding-right: 12px;
  text-align: right;
}
</style>
