<template>
  <div class="dy-form-item">

    <label class="dy-label"
      :style="labelStyle">{{itemConfig.label}}</label>

    <template
      v-if="itemConfig.type === 'text'
        || itemConfig.type === 'password'
        || itemConfig.type === 'email'">

      <dy-input
        :model-key="itemConfig.modelKey"
        :type="itemConfig.type"
        v-bind="$attrs"
        v-on="$listeners"
        :placeholder="itemConfig.placeholder"
        :readonly="itemConfig.readonly"
        :disabled="itemConfig.disabled">
      </dy-input>
    </template>

    <template
      v-else-if="itemConfig.type === 'select'">
      <dy-select
        :model-key="itemConfig.modelKey"
        :options="itemConfig.options"
        :optionsUrl="itemConfig.optionsUrl"
        v-bind="$attrs"
        v-on="$listeners"
        :placeholder="itemConfig.placeholder"
        :readonly="itemConfig.readonly"
        :disabled="itemConfig.disabled">
      </dy-select>
    </template>

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
