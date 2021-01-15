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
       @gantiHalaman="gantiHalaman">
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
                  <form @submit.prevent="updateTask()">
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
      </div>
</template>

<script>
import axios from 'axios'
import Category from './components/Category.vue'

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

                  this.gantiHalaman('update-page')
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