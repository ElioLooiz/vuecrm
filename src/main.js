import Vue from "vue";
import App from "./App.vue";
import Vuelidate from 'vuelidate';
import messagePlugin from '@/utils/message.plugin'
import "./registerServiceWorker";
import router from "./router";
import dateFilter from "@/filters/date.filter";
import store from "./store";
import 'materialize-css/dist/js/materialize.min';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;
Vue.filter('date', dateFilter);
Vue.use(Vuelidate);
Vue.use(messagePlugin);

firebase.initializeApp({
  apiKey: "AIzaSyDacDfa7poLiiohfDOb1ADA3QYLokaVR0A",
  authDomain: "vue-elio.firebaseapp.com",
  databaseURL: "https://vue-elio.firebaseio.com",
  projectId: "vue-elio",
  storageBucket: "vue-elio.appspot.com",
  messagingSenderId: "221266018899",
  appId: "1:221266018899:web:a86af86fd30ce57c823ca6",
  measurementId: "G-79Y3GJGKG4"
})

let app

firebase.auth().onAuthStateChanged(() => {

  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }

})


