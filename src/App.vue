<template>
  <div id="app">
    <dy-form
      @click.native="mockData"
      :model="formData"
      :form-config="formConfig">
    </dy-form>

    <button @click="handleSubmit">提交</button>
  </div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      formData: {},

      formConfig: {
        labelWidth: 100,
        inline: true,
        itemList: [
          {
            type: 'text',
            label: '账号',
            modelKey: 'username',
          },
          {
            type: 'password',
            label: '密码',
            modelKey: 'password',
          },
        ],
      },
    };
  },

  methods: {
    mockData() {
      if (!this.flag) {
        const obj = {
          username: 'xujiale',
          password: '123456',
        };

        this.flag = true;
        this.formData = obj;
      }
    },

    handleSubmit() {
      console.log({ ...this.formData });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
