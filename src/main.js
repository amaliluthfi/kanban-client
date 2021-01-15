import Vue from 'vue'
import App from './App.vue'
import GoogleAuth from 'vue-google-oauth2'

const gauthOption = {
  clientId: '513670550880-00lu3p1gl3opgtpavmlvpghmahisqbl1.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)

new Vue({
      render: h => h(App)
}).$mount('#app')
