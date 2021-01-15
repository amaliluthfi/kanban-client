import Vue from 'vue'
import App from './App.vue'
import GoogleAuth from 'vue-google-oauth2'

const gauthOption = {
  clientId: '513670550880-2427hvstgngi99orm0g5g46ijq1vuqgs.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)

new Vue({
      render: h => h(App)
}).$mount('#app')
