<template>
<!-- NAVBAR-->
        <nav class="navbar">
            <div>
                  <img src="../logo-social.png" alt="logo" style="width: 50px;"> 
            </div>
            <div class="nav-link active" v-if="halaman == 'add-task' || halaman == 'home' || halaman == 'add-task1' || halaman == 'add-task2' || halaman == 'add-task3' || halaman == 'add-task4'">
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
       <category></category>

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

        
</template>

<script>
import Category from './components/Category.vue'

export default {
   name: "App",
   
   data(){
         return {
               message: 'hello world',
               halaman: 'home'
         }
   },
   components: {
      Category


   }
}
</script>

<style scoped>

</style>