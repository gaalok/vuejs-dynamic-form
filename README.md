# vue-dynamic-form

> dynamic form based on vuejs

## Install

``` bash
npm install -S vuejs-dynamic-form
```
or
```bash
yarn add  vuejs-dynamic-form
```
```JavaScript
import VuejsDynamicForm from 'vuejs-dynamic-form';
Vue.use(VuejsDynamicForm);

```
## Demo
```html
<dy-form
  v-bind.sync="formData"
  :form-list="formConfig.formList"
  @provinceChange="provinceChange"
  @formSubmit="formSubmit">
</dy-form>

<script>
export default {
  data() {
    return {
      formData: {},
      formConfig: {
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
        ]
      },
    };
  },

  mounted() {
    for (let item of this.formConfig.formList) {
      if(item.modelKey !== undefined && this.formData[item.modelKey] === undefined) {
        this.$set(this.formData, item.modelKey, undefined);
      }
    }
  },

  methods: {
    provinceChange() {},
    formSubmit() {},
  }
}
</script>
```

## Available props
Prop|Type|Description
-|-|-|-
form-list|Array|表单组件列表
inline|Boolean|行内表单模式
label-position|String|label的align方式
labe-width|Number/String|label的宽度
form-item-class|String|每个表单组件项的类名

## FormList props
Prop|Type|options|Description
-|-|-|-
type|String|text/password/select/datepicker/button|表单项的类型
label|String|-|表单项label
modelKey|String|-|表单项的key，可以绑定到v-bind.sync的值
placeholder:String|-|占位符
options|Array|-|select的options
optionsUrl|String|-|select从服务器拉取options
listen|String|-|表单项监听的事件
nativeType|String|-|button原生type
