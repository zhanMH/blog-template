import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style/resrt.css";
import "./assets/style/iconfont.css";
import "./plugins/iview.js";
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false;
Vue.use(mavonEditor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
