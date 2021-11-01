import Vue from 'vue'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import App from "./App.vue";
import VueFullPage from 'vue-fullpage.js'
import 'fullpage.js/dist/fullpage.css'
import 'bootstrap'
Vue.use(VueFullPage);

new Vue({
  el: '#app',
  render: h => h(App)
});