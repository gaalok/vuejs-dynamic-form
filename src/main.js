import Vue from 'vue';
import App from './App.vue';

import Input from './components/input/index.vue';
import Form from './components/form/index.vue';
import FormItem from './components/form-item/index.vue';
import Select from './components/select/index.vue';
import Button from './components/button/index.vue';

[
  Input,
  Form,
  FormItem,
  Select,
  Button,
].forEach(component => Vue.component(component.name, component));

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
