import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import Lern from './lern'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false
//console.log(`импортирована а=${Lern.a} и b=${Lern.b}`)
console.log(App)
new Vue({
  render: h => h(App),
}).$mount('#app')
