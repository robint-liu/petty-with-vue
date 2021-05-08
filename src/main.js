import Vue from 'vue'
import Vant from "vant"
import App from './App.vue'
import '@i61/fancy-lib-flexible'
import 'vant/lib/index.css';

Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  render: h => h(App),
}).$mount('#app')

const VConsole = require('vconsole')
new VConsole()