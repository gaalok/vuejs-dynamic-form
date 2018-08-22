<template>
  <div id="app">
    <dy-form
      v-bind.sync="formData"
      :form-list="formConfig.formList"
      :inline="formConfig.inline"
      :label-width="formConfig.labelWidth"
      form-item-class="form-group"
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
      formConfig: {},
    };
  },

  mounted() {
    this.mockData();
  },

  methods: {
    sleep (ms) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
      });
    },

    getFormConfig() {
      const config = {
        labelWidth: 80,
        inline: true,
        formItemClass: 'form-group',
        formList: [
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
            // options: [
            //   { value: '1', label: '111' },
            //   { value: '2', label: '122' },
            //   { value: '3', label: '133' },
            // ],
            optionsUrl: 'http://192.168.56.1:8000/sponsor.json',
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
          {
            type: 'button',
            nativeType: 'reset',
            label: '清空'
          },
        ],
      };

      return this.sleep(1000).then(() => {
        this.formConfig = config;
      });
    },

    getFormData() {
      const data =  {
        username: 'test',
        province: '2',
        startDate: new Date(),
      };

      return this.sleep(500).then(() => {
        this.formData = data;
      })
    },

    mockData() {
      Promise.all([this.getFormConfig(), this.getFormData()]).then(() => {
        for (let item of this.formConfig.formList) {
          if(typeof item.modelKey !== 'undefined'
            && typeof this.formData[item.modelKey] === 'undefined') {
              this.$set(this.formData, item.modelKey, undefined);
          }
        }
      });
    },

    handleSubmit(e) {
      e.preventDefault();
      console.log({ ...this.formData });
    },
  },
};
</script>
