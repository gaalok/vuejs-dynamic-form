import Vue from 'vue'
import App from './App.vue'
import VueDynamicForm from './vue-dynamic-form'

Vue.use(VueDynamicForm)

new Vue({
  el: '#app',
  render: h => h(App)
})
