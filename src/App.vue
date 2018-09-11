<template>
  <div id="app">
    <dy-form
      v-model="formModel"
      :form-config="formConfig">
    </dy-form>
  </div>
</template>

<script>
import DyForm from '@/components/form/index.vue';

export default {
  name: 'app',

  components: { DyForm },

  data() {
    return {
      formModel: {},
      formConfig: {
        formItemList: [],
      },
    };
  },

  mounted() {
    this.getFormConfig();
    this.getFormData();
  },

  methods: {
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },

    getFormConfig() {
      const formConfig = {
        inline: true,
        labelWidth: 80,
        labelPosition: 'right',
        formItemClass: 'form-group',
        formItemContentClass: 'form-content',
        formItemList: [
          {
            type: 'input',
            subType: 'text',
            key: 'username',
            label: '账号',
            value: '111',
            placeholder: '请输入账号',
          },
          {
            type: 'select',
            key: 'province',
            label: '省份',
            placeholder: '请选择',
            options: [
              { value: '1', label: '111' },
              { value: '2', label: '122' },
              { value: '3', label: '133' },
            ],
          },
          {
            type: 'datepicker',
            key: 'date',
            label: '日期',
            placeholder: '请选择日期',
          },
          {
            type: 'datepicker',
            subType: 'daterange',
            key: 'daterange',
            label: '日期范围',
            placeholder: '请选择日期范围',
          },
        ],
      };

      return this.sleep(1000).then(() => {
        this.formConfig = formConfig;
      });
    },

    getFormData() {
      const data = {
        username: 'test',
        province: '2',
        date: new Date(),
      };

      return this.sleep(500).then(() => {
        // this.formModel = data;
      });
    },

  },
};
</script>

<style>
.form-content {
  width: 200px;
}
</style>
