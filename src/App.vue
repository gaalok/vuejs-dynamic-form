<template>
  <div id="app">
    <dy-form
      :model="formData"
      :form-list="formList"
      :label-width="labelWidth"
      :inline="inline"
      @usernameChange="handleChange"
      @provinceChange="handleChange"
      @formSubmit="handleSubmit">
    </dy-form>
  </div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      formData: {},

      labelWidth: 80,
      inline: true,

      formList: [
        {
          type: 'text',
          label: '账号',
          modelKey: 'username',
          placeholder: '请输入账号',
          listen: 'usernameChange',
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
          // optionsUrl: './mock/options.json',
          listen: 'provinceChange',
        },
        {
          label: '开始时间',
          type: 'datepicker',
          modelKey: 'startDate',
          placeholder: '请选择日期',
        },
        {
          type: 'button',
          label: '提交',
          listen: 'formSubmit',
        },
      ],
    };
  },

  mounted() {
    setTimeout(() => this.mockData(), 1000);
  },

  methods: {
    mockData() {
      const obj = {
        username: 'xujiale',
        password: '123456',
        province: '2',
      };

      this.formData = obj;
    },

    handleChange(e) {
      console.log(e);
    },

    handleSubmit(e) {
      e.preventDefault();
      console.log({ ...this.formData });
    },
  },
};
</script>
