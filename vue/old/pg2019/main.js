import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import  VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// import VueAxios from 'vue-axios'
// axios.create({ baseUrl  })
import axios from 'axios'
import Qs from 'qs'
//QS是axios库中带的，不需要我们再npm安装一个
import $ from 'jquery'
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;
Vue.prototype.$ = $;
// Vue.prototype.$url="http://127.0.0.1:3000/"

 Vue.prototype.$url="https://mycdn.imdo.co/"




// ,VueAxios,axios



Vue.use(VueQuillEditor)




// import Simditor from 'simditor'
import router from './router'

// import VueAwesomeSwiper from 'vue-awesome-swiper'

// Vue.use(VueAwesomeSwiper)
// import store from './store'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
