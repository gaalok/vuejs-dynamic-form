<template>
  <div class="dy-date">
    <datepicker
      :language="zh"
      format="yyyy-MM-dd"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      @selected="handleSelected">
    </datepicker>
  </div>
</template>

<script>
import datepicker from 'vuejs-datepicker';
import { zh } from 'vuejs-datepicker/dist/locale';

export default {
  name: 'DyDatepicker',

  components: {
    datepicker,
  },

  props: {
    placeholder: String,
    disabled: Boolean,

    modelKey: {
      required: true,
      type: String,
    },

    modelValue: [String, Number, Date],
  },

  data() {
    return {
      zh,
    };
  },

  methods: {
    handleSelected(date) {
      this.$emit('change', {
        listen: this.listen,
        modelKey: this.modelKey,
        modelValue: date,
      });
    },
  },

};
</script>
