<template>
  <div>
    <form
      class="dy-form"
      :class="{
        'dy-form-inline': inline,
        'dy-label-left': labelPosition === 'left',
      }">

      <dy-form-item
        v-for="(item, index) in formList"
        :key="index"

        :item-config="item"

        v-bind="$attrs"
        v-on="$listeners"

        @change="handleChange"
        @reset="handleReset">
      </dy-form-item>

    </form>
  </div>
</template>

<script>
export default {
  name: 'DyForm',

  props: {
    formList: Array,
    inline: Boolean,
    labelPosition: String,
  },

  methods: {
    handleReset() {
      this.formList.forEach((item) => {
        this.$emit(`update:${item.modelKey}`, undefined);
      });
    },

    handleChange(e) {
      this.$emit(`update:${e.modelKey}`, e.modelValue);

      if (e.listen) {
        this.$emit(e.listen, e);
      }
    },
  },
};
</script>

<style lang="less">
@import '~../../styles/index.less';
</style>
