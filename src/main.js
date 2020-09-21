import Vue from "vue";
import App from "./App.vue";
import Vuelidate from 'vuelidate';
import "./registerServiceWorker";
import router from "./router";
import dateFilter from "@/filters/date.filter";
import store from "./store";
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false;
Vue.filter('date', dateFilter);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
