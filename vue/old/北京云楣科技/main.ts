import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";
//智断，挑选服务器
let url = [
  "https://mycdn.imdo.co",
  "http://132.232.21.30:3000",
  "http://127.0.0.1:3000"
];
//如果test=0进入开发者模式
let test = 0;
if (test == 0) {
  Vue.prototype.$url = url[2];
  uu();
} else {
  axios
    .get("https://mycdn.imdo.co/areyouok")
    .then(function(res) {
      if (res.status == 200) {
        Vue.prototype.$url = url[0];
        uu();
        return;
      }
    })
    .catch(() => {
      Vue.prototype.$url = url[1];
      console.log("主服务器荡机，备用服务器运作中", "");
      uu();
    });
}
function uu() {
  Vue.config.productionTip = false;
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
}