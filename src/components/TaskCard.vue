<template>
      <div>
            <div class="card" style="margin: 2px;" >
                  <div class="card-body">
                        <h5 class="card-title">{{ task.title }}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary" @click="udpateTask()">Update</a>
                        <a href="#" class="btn btn-danger" @click="deleteTask()">Delete</a>
                  </div>
            </div>
      </div>
</template>

<script>
export default {
      name: "TaskCard",

}
</script>

<style>

</style>