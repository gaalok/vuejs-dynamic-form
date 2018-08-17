<template>
  <div class="dy-date">
    <datepicker
      :language="zh"
      format="yyyy-MM-dd"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="date"
      @selected="handleSelected"
      >
    </datepicker>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import { zh } from 'vuejs-datepicker/dist/locale';

export default {
  name: 'DyDate',

  components: {
    Datepicker,
  },

  props: {
    placeholder: String,
    disabled: Boolean,

    modelKey: {
      required: true,
      type: String,
    },

    modelValue: {
      type: [String, Number],
    },
  },

  data() {
    return {
      zh,
      date: '',
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
