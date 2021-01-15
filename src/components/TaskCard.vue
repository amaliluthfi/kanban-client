<template>
      <div>
            <div class="card" style="margin: 2px;" >
                  <div class="card-body">
                        <h5 class="card-title">{{ task.title }}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary" @click="updatePage(task.id)">Update</a>
                        <a href="#" class="btn btn-danger" @click="deleteTask(task.id)">Delete</a>
                        
                        <a href="#" id="left" v-if="task.CategoryId !== 1 " @click="prevCategory(task.id, task.CategoryId)"><i class="fas fa-chevron-left"></i></a>
                        <a href="#" id="right" v-if="task.CategoryId !== 4 " @click="nextCategory(task.id, task.CategoryId)"><i class="fas fa-chevron-right"></i></a>
                        
                  </div>
            </div>
      </div>
</template>

<script>
export default {
      name: "TaskCard",
      methods: {
            deleteTask(id){
                  this.$emit('deleteTask', id)
            },
            updatePage(id){
                  this.$emit('updatePage', id)

            },
            prevCategory(id, categoryId){
                  this.$emit('prevCategory', id, categoryId)
            },
            nextCategory(id, categoryId){
                  this.$emit('nextCategory', id, categoryId)
            }
      },
      props: ['task']

}
</script>

<style>
#left {
      margin-left: 10px;
      margin-right: 5px;
}

#right {
      margin-left: 5px;
      margin-right: 5px 
}
</style>