// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee,faCartPlus,faPlus,faMinus, faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {store} from './store/store'
library.add(faCoffee)
library.add(faCartPlus)
library.add(faPlus)
library.add(faMinus)
library.add(faTimes)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(BootstrapVue);
/* eslint-disable no-new */
new Vue({
  store:store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
