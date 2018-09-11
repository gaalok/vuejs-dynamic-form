import DyForm from '@/components/form/index.vue';

const install = (Vue) => {
  Vue.component(DyForm.name, DyForm);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};
