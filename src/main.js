import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { BootstrapVue } from "bootstrap-vue";
// import { IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue);
// Vue.use(IconsPlugin)

Vue.config.productionTip = false;
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
