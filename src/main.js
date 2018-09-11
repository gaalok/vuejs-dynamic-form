import Vue from 'vue';
import { Form, FormItem, Input, Select, Option, DatePicker } from 'iview';
import 'iview/dist/styles/iview.css';

import App from './App.vue';

Vue.component('Form', Form);
Vue.component('FormItem', FormItem);
Vue.component('Input', Input);
Vue.component('Select', Select);
Vue.component('Option', Option);
Vue.component('DatePicker', DatePicker);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
