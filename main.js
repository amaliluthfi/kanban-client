import Vue from 'vue'
import App from './App.vue'

new Vue({
      render: h => h(App)
}).$mount('#app')

// new Vue({
//       el: '#app',
//       data: {
//             message: 'hello world',
//             halaman: '',
//             email: '',
//             password: '',
//             baseUrl: 'http://localhost:3000',
//             tasks: [],
//             title: '',
//             CategoryId: ''
//       },
//       methods: {
//             checkAuth(){
//                   if(localStorage.getItem("access_token")){
//                         this.halaman = 'home'
//                   } else {
//                         this.halaman = 'login'
//                   }
//             },
//             home(){
//                   this.checkAuth()
//                   this.getAll()
//             },
//             gantiHalaman(page){
//                   this.halaman = page
//             },

//             login(){
//                  axios({
//                        method: 'post',
//                        url: `${this.baseUrl}/tasks/login`,
//                        data: {
//                              email: this.email,
//                              password: this.password
//                        }
//                  })
//                        .then(response => {
//                              let {access_token} = response.data
//                              localStorage.setItem('access_token', access_token)
//                              this.gantiHalaman('home')
//                        }).catch(err => {
//                              console.log(err);
//                        })
//             },
//             getAll(){
//                   axios({
//                         method: "get",
//                         url: `${this.baseUrl}/tasks`,
//                         headers: {
//                               access_token: localStorage.getItem('access_token')
//                         }
//                   }).then(response => {
//                         console.log(response.data);
//                         this.tasks = response.data
//                         // console.log(this.tasks[1];
//                   }).catch(err => {
//                         console.log(err);
//                   })
//             },
//             createTask(){
//                   console.log(this.CategoryId);
//                   console.log(this.title);
//                   axios({
//                         method: "post",
//                         url: `${this.baseUrl}/tasks`,
//                         data: {
//                               title: this.title,
//                               CategoryId: this.CategoryId
//                         },
//                         headers: {
//                               access_token:localStorage.getItem('access_token')
                              
//                         }
//                   }).then(response => {
//                         console.log(response.data);
//                         this.home()

//                   }).catch(err => {
//                         console.log(err);

//                   })
//             },
//             logout(){
//                   localStorage.clear()
//                   this.gantiHalaman('login')
//             }
//       },
//       created() {
//             this.checkAuth()
//             this.getAll()
//       }
// })
