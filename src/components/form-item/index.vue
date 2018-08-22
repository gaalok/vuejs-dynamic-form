<template>
  <div
    class="dy-form-item"
    :class="[itemConfig.type !== 'button' ? formItemClass : '']">

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

        :model-key="itemConfig.modelKey"
        :model-value="$attrs[itemConfig.modelKey]"

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

        :model-key="itemConfig.modelKey"
        :model-value="$attrs[itemConfig.modelKey]"

        :placeholder="itemConfig.placeholder"
        :readonly="itemConfig.readonly"
        :disabled="itemConfig.disabled">
      </dy-select>
    </template>

    <template v-else-if="itemConfig.type === 'button'">
      <dy-button
        :label="itemConfig.label"
        :listen="itemConfig.listen"
        :native-type="itemConfig.nativeType"

        v-bind="$attrs"
        v-on="$listeners"

        :disabled="itemConfig.disabled">
      </dy-button>
    </template>

    <template
      v-else-if="itemConfig.type === 'datepicker'">
      <dy-datepicker
        v-bind="$attrs"
        v-on="$listeners"

        :listen="itemConfig.listen"

        :model-key="itemConfig.modelKey"
        :model-value="$attrs[itemConfig.modelKey]"

        :placeholder="itemConfig.placeholder"
        :disabled="itemConfig.disabled"
      ></dy-datepicker>
    </template>

    <div v-else style="background: red;">未知类型组件</div>

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

    formItemClass: [String, Object, Array],

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
