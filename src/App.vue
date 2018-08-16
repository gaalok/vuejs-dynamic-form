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
        labelWidth: 60,
        inline: true,
        itemList: [
          {
            type: 'text',
            label: '账号',
            modelKey: 'username',
            placeholder: '请输入账号',
          },
          {
            type: 'password',
            label: '密码',
            modelKey: 'password',
            placeholder: '请输入密码',
          },
          {
            type: 'select',
            label: '省',
            modelKey: 'province',
            placeholder: '请选择省',
            options: [
              { value: '1', label: '111' },
              { value: '2', label: '122' },
              { value: '3', label: '133' },
            ],
            optionsUrl: '/mock/options.json',
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
