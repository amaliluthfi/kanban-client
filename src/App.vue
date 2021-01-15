<template>
<!-- NAVBAR-->
      <div>
        <nav class="navbar" >
            <div>
                  <img src="../logo-social.png" alt="logo" style="width: 50px;" > 
            </div>
            <div class="nav-link active" v-if="halaman == 'update-page' || halaman == 'add-task' || halaman == 'home' || halaman == 'add-task1' || halaman == 'add-task2' || halaman == 'add-task3' || halaman == 'add-task4'">
                  <ul>
                        <li><a href="#"  @click="home()">home</a></li>
                        <li><a href="#" @click="getAll()">tasks</a></li>
                        <li><a href="#" @click="gantiHalaman('add-task')"> add task</a></li>
                  </ul>
            </div>
            <div class="nav-link active" v-else-if="halaman == 'login' || halaman == 'register'">
                  <ul>
                        <li><a href="#" @click="gantiHalaman('register')">register</a></li>
                        <li><a href="#" @click="gantiHalaman('login')">login</a></li>
                  </ul>
            </div>
            <div>
                  <button type="button" class="btn btn-danger" @click="logout()" >logout</button>
            </div>
        </nav>
      
<!-- MAIN PAGE -->
      <div class="row d-flex justify-content-between mt-2" v-if="halaman == 'home'">
       <category   
       v-if="halaman == 'home'" 
       v-for="category in categories" 
       :key="category.id" :category="category" 
       :tasks="tasks" 
       @deleteTask="deleteTask"
       @updatePage="updatePage"
       @gantiHalaman="gantiHalaman"
       @prevCategory="prevCategory"
       @nextCategory="nextCategory">
       </category>  

      </div>
<!-- LOG IN FORM -->
            <div class="login-page m-5" v-if="halaman == 'login'">
                  <h3>Log in form</h3>
                  <form @submit.prevent="login()">
                        <div class="row mb-3">
                              <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                              <div class="col-sm-10">
                                <input type="email" class="form-control" id="inputEmail3" v-model="email">
                              </div>
                        </div>
                        <div class="row mb-3">
                              <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                              <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword3" v-model="password">
                              </div>
                        </div>
                        <button type="submit" class="btn btn-primary">submit</button>
                        <div class="signup-buttons">
                          <a href="#" class="google-signup" @click.prevent="loginWithGoogle">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                          <title>Google</title>
                          <g fill="none" fill-rule="evenodd">
                          <path fill="#4285F4" d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"></path>
                          <path fill="#34A853" d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"></path>
                          <path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"></path>
                          <path fill="#EA4335" d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"></path>
                          </g></svg>Google</a>
                        </div>
                  </form>
            </div>     
<!-- REGISTER FORM-->
            <div class="register-page m-5" v-if="halaman == 'register'">
                  <h3>Register form</h3>
                  <form @submit.prevent="register()">
                        <div class="row mb-3">
                              <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                              <div class="col-sm-10">
                                <input type="email" class="form-control" id="email-register" v-model="email">
                              </div>
                        </div>
                        <div class="row mb-3">
                              <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                              <div class="col-sm-10">
                                <input type="password" class="form-control" id="password-regi" v-model="password">
                              </div>
                        </div>
                        <button type="submit" class="btn btn-primary">submit</button>
                  </form>

            </div> 

<!--ADD TASK -->
             <div class="add-page m-5" v-if="halaman == 'add-task' ||halaman == 'add-task1' || halaman == 'add-task2' || halaman == 'add-task3' || halaman == 'add-task4'">
                  <h3>Add form</h3>
                  <form @submit.prevent="createTask()">
                        <div class="row mb-3">
                              <label for="inputEmail3" class="col-sm-2 col-form-label">title</label>
                              <div class="col-sm-10">
                                <input type="title" class="form-control" id="inputEmail3" v-model="title">
                              </div>
                        </div>
                        <div class="row mb-3">
                              <label for="inputEmail3" class="col-sm-2 col-form-label">Category</label>
                              <div class="col-sm-10">
                                    <select class="form-select"  v-model="CategoryId">
                                          <option value="1" v-if="halaman == 'add-task' ||halaman == 'add-task1'" >Backlog</option>
                                          <option value="2" v-if="halaman == 'add-task' ||halaman == 'add-task2'">Todo</option>
                                          <option value="3" v-if="halaman == 'add-task' ||halaman == 'add-task3'">Doing</option>
                                          <option value="4" v-if="halaman == 'add-task' ||halaman == 'add-task4'">Complete</option>
                                        </select>
                                  </div>
                        </div>

                        <button type="submit" class="btn btn-primary">submit</button>
                  </form>

            </div> 

<!-- UPDATE PAGE -->
             <div class="update-page m-5" v-if="halaman == 'update-page' ">
                  <h3>Update form</h3>
                  <form @submit.prevent="updateTask(id)">
                        <div class="row mb-3">
                              <label for="inputEmail3" class="col-sm-2 col-form-label">title</label>
                              <div class="col-sm-10">
                                <input type="title" class="form-control" id="inputEmail3" v-model="title">
                              </div>
                        </div>
                        <div class="row mb-3">
                              <label for="inputEmail3" class="col-sm-2 col-form-label">Category</label>
                              <div class="col-sm-10">
                                    <select class="form-select"  v-model="CategoryId">
                                          <option value="1" v-if="halaman == 'update-page'" >Backlog</option>
                                          <option value="2" v-if="halaman == 'update-page'">Todo</option>
                                          <option value="3" v-if="halaman == 'update-page'">Doing</option>
                                          <option value="4" v-if="halaman == 'update-page'">Complete</option>
                                        </select>
                                  </div>
                        </div>

                        <button type="submit" class="btn btn-primary">submit</button>
                  </form>

            </div> 
      </div>
</template>

<script>
import axios from 'axios'
import Category from './components/Category.vue'
// import router from '../../kanban-server'

export default {

   name: "App",
   data(){
         return {
               message: 'hello world',
               halaman: 'home',
               baseUrl: 'http://localhost:3000',
               email: '',
               password: '',
               CategoryId: '',
               title: '',
               categories: [],
               tasks: [],
               id: ''
         }
   },
   components: {
      Category
   },
   methods: {
      gantiHalaman(page){
            this.halaman = page
      },
      checkAuth(){
            if(localStorage.getItem("access_token")){
                  this.halaman = 'home'
                  this.getAll()
                  this.getCategory()
            } else {
                  this.halaman = 'login'
            }
      },
      home(){
            this.checkAuth()
            this.getAll()
            this.getCategory()
      },
      register(){
            console.log(this.password);
            console.log(this.email);
             axios({
               method: 'post',
               url: `${this.baseUrl}/tasks/register`,
               data: {
                  email: this.email,
                  password: this.password
                     }
            }).then(response => {
                  this.checkAuth()

            }).catch(err => {
                  console.log(err);

            })
      },
      login(){
            axios({
               method: 'post',
               url: `${this.baseUrl}/tasks/login`,
               data: {
                  email: this.email,
                  password: this.password
                     }
            })
            .then(response => {
                  let {access_token} = response.data
                  localStorage.setItem('access_token', access_token)
                  this.checkAuth()
                  // this.getAll()
            }).catch(err => {
                  console.log(err);
            })
      },
      loginWithGoogle () {
         this.$gAuth
         .signIn()
         .then(GoogleUser => {
          // on success do something
            console.log(GoogleUser.Bc)
            var userInfo = {
            loginType: 'google',
            google: GoogleUser
          }

            return axios({
                  method: 'post',                  
                  url: `${this.baseUrl}/tasks/googleLogin`,
                  data: {
                        id_token: GoogleUser.Bc.id_token
                  }
            })
          }).then(response => {
                console.log(response);
                localStorage.setItem("access_token", response.data.access_token)
                this.checkAuth()

          }).catch(error => {
             console.log('error', error)
          })
    },
      getAll(){
            axios({
                  method: "get",
                  url: `${this.baseUrl}/tasks`,
                  headers: {
                        access_token: localStorage.getItem('access_token')
                  }
            }).then(response => {
                  // console.log(response.data);
                  this.tasks = response.data
                  console.log(this.tasks);
            }).catch(err => {
                  console.log(err);
            })
      },
      getCategory(){
            axios({
              method: 'get',
              url: `${this.baseUrl}/tasks/categories`,
              headers: {
                    access_token: localStorage.getItem('access_token')
              }
            }).then(response => {
                  console.log(response.data);
                  this.categories = response.data
                  console.log(this.categories);
            }).catch(err => {
                  console.log(err);
            })
      },
      createTask(){

            axios({
                  method: "post",
                  url: `${this.baseUrl}/tasks`,
                  data: {
                        title: this.title,
                        CategoryId: this.CategoryId
                  },
                  headers: {
                        access_token:localStorage.getItem('access_token')
                              
                  }
            }).then(response => {
                  this.home()

            }).catch(err => {
                  console.log(err);

            })
      },
      updatePage(id){
  
            axios({
                  method: 'get',
                  url: `${this.baseUrl}/tasks/${id}`,
                  headers: {
                        access_token: localStorage.getItem('access_token')
                  }
            }).then(response => {
                  console.log(response.data);
                  this.title = response.data.title
                  this.CategoryId = response.data.CategoryId
                  this.id = id
                  this.getCategory()

                  this.gantiHalaman('update-page')
            }).catch(err => {
                  console.log(err);
            })

      },
      updateTask(id){
            axios({
                  method: "put",
                  url: `${this.baseUrl}/tasks/${id}`,
                  data: { 
                        title: this.title,
                        CategoryId: this.CategoryId
                  },
                  headers: {
                        access_token: localStorage.getItem('access_token')
                  }
            }).then(response => {
                  console.log(response.data);
                  this.tasks.push(response.data)
                  this.checkAuth()
            }).catch(err => {
                  console.log(err);
            })

      },
      prevCategory(id, categoryId){
            axios({
                  method: "patch",
                  url: `${this.baseUrl}/tasks/${id}`,
                  data: { 
                        CategoryId: categoryId -1
                  },
                  headers: {
                        access_token: localStorage.getItem('access_token')
                  }
            }).then(response => {
                  console.log(response.data);
                  this.tasks.push(response.data)
                  this.checkAuth()
            }).catch(err => {
                  console.log(err);
            })
      },
      nextCategory(id, categoryId){
            this.categoryId
             axios({
                  method: "patch",
                  url: `${this.baseUrl}/tasks/${id}`,
                  data: { 
                        CategoryId: categoryId + 1
                  },
                  headers: {
                        access_token: localStorage.getItem('access_token')
                  }
            }).then(response => {
                  console.log(response.data);
                  this.tasks.push(response.data)
                  this.checkAuth()
            }).catch(err => {
                  console.log(err);
            })

      },
      
      deleteTask(id){
            
            axios({
                  method: 'delete',
                  url: `${this.baseUrl}/tasks/${id}`,
                  headers: {
                    access_token: localStorage.getItem('access_token')
              }
                  
            }).then(response => {
                  this.checkAuth()
            }).catch(err => {
                  console.log(err);
            })

      },
      logout(){
            localStorage.clear()
            this.gantiHalaman('login')
      }
   },
   created() {
         this.checkAuth()
   }
}
</script>

<style scoped>

</style>