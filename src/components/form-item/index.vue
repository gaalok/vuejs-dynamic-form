<template>
  <FormItem
    :label="itemConfig.label">

    <Input
      v-if="itemConfig.type === 'input'"
      :type="itemConfig.subType"
      v-bind="$attrs"
      v-on="$listeners"
      :placeholder="itemConfig.placeholder"
      :disabled="itemConfig.disabled"
      :readonly="itemConfig.readonly"
      :class="formItemContentClass">
    </Input>

    <Select v-else-if="itemConfig.type === 'select'"
      v-bind="$attrs"
      v-on="$listeners"
      :placeholder="itemConfig.placeholder"
      :disabled="itemConfig.disabled"
      :readonly="itemConfig.readonly"
      :class="formItemContentClass">
      <Option
        v-for="(oItem, oIndex) in itemConfig.options"
        :key="oIndex"
        :value="oItem.value"
        :label="oItem.label">
      </Option>
    </Select>

    <DatePicker
      v-else-if="itemConfig.type === 'datepicker'"
      :type="itemConfig.subType"
      v-bind="$attrs"
      v-on="$listeners"
      :placeholder="itemConfig.placeholder"
      :disabled="itemConfig.disabled"
      :readonly="itemConfig.readonly"
      :class="formItemContentClass">
    </DatePicker>

    <div v-else style="background: red;">未知类型组件</div>
  </FormItem>
</template>

<script>
export default {
  name: 'DyFormItem',

  props: {
    itemConfig: {
      required: true,
      type: Object,
    },
    formItemContentClass: String,
  },

  inheritAttrs: false,
};
</script>
