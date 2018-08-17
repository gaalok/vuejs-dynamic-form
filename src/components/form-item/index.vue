<template>
  <div class="dy-form-item">

    <label class="dy-label"
      v-if="itemConfig.type !== 'button'"
      :style="labelStyle">{{itemConfig.label}}</label>

    <template
      v-if="itemConfig.type === 'text'
        || itemConfig.type === 'password'
        || itemConfig.type === 'email'">

      <dy-input
        :type="itemConfig.type"
        :listen="itemConfig.listen"

        v-bind="$attrs"
        v-on="$listeners"

        :placeholder="itemConfig.placeholder"
        :readonly="itemConfig.readonly"
        :disabled="itemConfig.disabled">
      </dy-input>
    </template>

    <template v-else-if="itemConfig.type === 'select'">
      <dy-select
        :options="itemConfig.options"
        :optionsUrl="itemConfig.optionsUrl"
        :listen="itemConfig.listen"

        v-bind="$attrs"
        v-on="$listeners"

        :placeholder="itemConfig.placeholder"
        :readonly="itemConfig.readonly"
        :disabled="itemConfig.disabled">
      </dy-select>
    </template>

    <template v-else-if="itemConfig.type === 'button'">
      <dy-button
        :label="itemConfig.label"
        :listen="itemConfig.listen"

        v-bind="$attrs"
        v-on="$listeners"

        :disabled="itemConfig.disabled">
      </dy-button>
    </template>

    <template
      v-else-if="itemConfig.type === 'date'">
      <dy-date
        v-bind="$attrs"
        v-on="$listeners"

        :listen="itemConfig.listen"

        :placeholder="itemConfig.placeholder"
        :disabled="itemConfig.disabled"
      ></dy-date>
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

  methods: {
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
