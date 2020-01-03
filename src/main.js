import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/styles.css";

Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.http.options.root =
  "https://the-trader-app-vue.firebaseio.com/the-trader-app-vue";

Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

var vm = new Vue({
  router,
  store,
  render: h => h(App)
});

vm.$mount("#app");
