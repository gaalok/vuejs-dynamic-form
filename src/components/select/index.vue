<template>
  <div class="dy-select">
    <select name="" id="">
      <option value="">{{ placeholder }}</option>

      <option
        v-for="item in realOptions"
        :key="item.value"
        :value="item.value"
        @change="handleChange">
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DySelect',

  props: {
    options: Array,
    optionsUrl: String,
    placeholder: String,
  },

  data() {
    return {
      optionsFromUrl: [],
    };
  },

  computed: {
    realOptions() {
      return this.optionsFromUrl.length
        ? this.optionsFromUrl
        : this.options;
    },
  },

  mounted() {
    if (this.optionsUrl) {
      this.getOptionsFromUrl();
    }
  },

  methods: {
    getOptionsFromUrl() {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', this.optionsUrl, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            this.optionsFromUrl = data;
          }
        }
      };
      xhr.send(null);
    },

    handleChange(e) {
      console.log(e);
    },
  },
};
</script>
