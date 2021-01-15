<template >
      <div class="col-2 col-sm"   >
            <div class="rounded" style="background-color: #1a508b;">
                  <b style="color: white;" value >{{ category.name }}</b>
                  <button class='btn btn-success btn-sm' @click="gantiHalaman('add-task' + category.id)" >add</button>
                  <task-card  
                  v-for="task in tasks" 
                  key="task.id" 
                  :task="task" 
                  v-if="task.CategoryId == category.id" 
                  @deleteTask="deleteTask" 
                  @updatePage="updatePage"
                  @prevCategory="prevCategory"
                  @nextCategory="nextCategory">
                  </task-card>
        
            </div>
      </div>
      
</template>

<script>
import TaskCard from './TaskCard.vue'
export default {
      name: "Category",
      components: {
            TaskCard

      },
      methods: {
            deleteTask(id){
                  this.$emit('deleteTask', id)
            },
            updatePage(id){
                  this.$emit('updatePage', id)
            },
            gantiHalaman(page){
                  this.$emit('gantiHalaman', page)
            },
            prevCategory(id, categoryId){
                  this.$emit('prevCategory', id, categoryId)
            },
            nextCategory(id, categoryId){
                  this.$emit('nextCategory', id, categoryId)
            }
      },
      props: ['category', 'tasks']

}
</script>

<style>

</style>