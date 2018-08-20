import Input from './components/input';
import Form from './components/form';
import FormItem from './components/form-item';
import Select from './components/select';
import Button from './components/button';
import Date from './components/date';

const components = [
  Input,
  Form,
  FormItem,
  Select,
  Button,
  Date,
];

const install = (Vue) => {
  components.forEach(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};
