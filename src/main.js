import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Primary from '@/components/Primary.vue'
import Navigation from '@/components/Navigation.vue'

Vue.use(Element)
Vue.config.productionTip = false

Vue.component('Primary', Primary)
Vue.component('Navigation', Navigation)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
