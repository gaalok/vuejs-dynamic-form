<template>
  <Form
    :model="value"
    :inline="formConfig.inline"
    :label-width="formConfig.labelWidth"
    :label-position="formConfig.labelPosition">

    <DyFormItem
      v-for="(item, index) in formConfig.formItemList"
      :key="index"
      :item-config="item"
      :value="value[item.key]"
      :class="formConfig.formItemClass"
      :form-item-content-class="formConfig.formItemContentClass"
      @input="handleInput($event, item.key)">
    </DyFormItem>

  </Form>
</template>

<script>
import DyFormItem from '@/components/form-item/index.vue';

export default {
  name: 'DyForm',

  components: { DyFormItem },

  props: {
    value: {
      type: Object,
      required: true,
    },

    formConfig: {
      type: Object,
      required: true,
    },
  },

  methods: {
    handleInput(val, key) {
      this.$emit('input', { ...this.value, [key]: val })
    },
  },
};
</script>
