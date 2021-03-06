// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMdl from 'vue-mdl'
import store from './vuex/store'
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  render: h => h(App),
  router
})

Vue.use(VueMdl)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: h => h(App)
})
