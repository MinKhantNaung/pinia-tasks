<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useTaskStore } from './stores/TaskStore'
import TaskDetails from './components/TaskDetails.vue';

const taskStore = useTaskStore()
</script>

<template>
  <div class="d-flex justify-content-center align-items-center">
    <img src="./assets/pinia_logo.png" alt="pinia logo">
    <h1>Pinia Tasks</h1>
  </div>

  <div class="row mt-5">
    <div class="col-md-4 offset-md-4 card">
      <div class="card-body">
        <div v-for="task in taskStore.tasks" :key="task.id">
          <TaskDetails :task="task" />
        </div>
      </div>
    </div>
  </div>
</template>