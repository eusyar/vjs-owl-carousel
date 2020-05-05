import Vue from 'vue'
import App from './App.vue'

import 'script-loader!jquery/dist/jquery.min'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
