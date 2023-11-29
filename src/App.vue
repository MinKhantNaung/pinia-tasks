<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useTaskStore } from './stores/TaskStore'
import TaskDetails from './components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue';
import { ref } from 'vue';

const taskStore = useTaskStore()

const filterStatus = ref('all')
</script>

<template>
  <div class="d-flex justify-content-center align-items-center">
    <img src="./assets/pinia_logo.png" alt="pinia logo">
    <h1>Pinia Tasks</h1>
  </div>

  <!-- Add Task Form -->
  <div class="d-flex align-items-center justify-content-center mt-3">
    <TaskForm />
  </div>

  <div class="row mt-5">
    <div class="col-md-4 offset-md-4 card">
      <div class="card-body">

        <!-- filter -->
        <ul class="nav nav-tabs mb-2">
          <li class="nav-item">
            <button @click="filterStatus = 'all'" :class="{ 'bg-info text-white': filterStatus === 'all' }"
              class="nav-link">All</button>
          </li>
          <li class="nav-item">
            <button @click="filterStatus = 'fav'" :class="{ 'bg-info text-white': filterStatus !== 'all' }"
              class="nav-link">Favorites</button>
          </li>
        </ul>

        <div v-if="filterStatus === 'all'">
          <p class="text-secondary py-2">You have {{ taskStore.totalTasks }} tasks left to do !</p>
          <div v-for="task in taskStore.tasks" :key="task.id">
            <TaskDetails :task="task" />
          </div>
        </div>

        <div v-else>
          <p class="text-secondary py-2">You have {{ taskStore.favTasksCount }} tasks left to do !</p>
          <div v-for="task in taskStore.favTasks" :key="task.id">
            <TaskDetails :task="task" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>