<template>
      <div class="col-2 col-sm"  >
            <div class="rounded" style="background-color: #1a508b;">
                  <b style="color: white;" >Backlog</b>
                  <button class='btn btn-success btn-sm' @click="gantiHalaman('add-task1')" >add</button>
                  <task-card></task-card>
        
            </div>
      </div>
</template>

<script>
import TaskCard from './TaskCard.vue'
export default {
      name: "Category",
      components: {
            TaskCard

      }

}
</script>

<style>

</style>