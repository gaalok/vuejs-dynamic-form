<template>
  <div>
    <form
      :class="{
        'dy-form-inline': inline,
        'dy-label-left': labelPosition === 'left',
      }">

      <dy-form-item
        v-for="(item, index) in formList"
        :key="index"

        :item-config="item"
        :model-key="item.modelKey"
        :model-value="model[item.modelKey]"

        v-bind="$attrs"
        v-on="$listeners"

        @change="handleChange">
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

    formList: {
      required: true,
      type: Array,
    },

    inline: Boolean,
    labelPosition: String,
  },

  methods: {
    handleChange(e) {
      this.model[e.modelKey] = e.modelValue;

      if (e.listen) {
        this.$emit(e.listen, e);
      }
    },

    handleClick(item, e) {
      e.preventDefault();
      this.$emit(item.on, {
        handler: item.handler,
        event: e,
      });
    },
  },
};
</script>

<style lang="less">
.dy-form-inline {
  .dy-form-item, .dy-input, .dy-select, .dy-date {
    display: inline-block;
  }
}

.dy-label-left {
  .dy-label {
    text-align-last: left;
  }
}
</style>

