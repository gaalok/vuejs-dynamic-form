import Vue from 'vue'
import App from './App.vue'
import vuejsDynamicForm from './vuejs-dynamic-form'

Vue.use(vuejsDynamicForm)

new Vue({
  el: '#app',
  render: h => h(App)
})
