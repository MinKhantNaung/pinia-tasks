<template>
    <div class="text-center">
        <form @submit.prevent="handleSubmit">
            <input v-model="newTask" type="text" placeholder="Enter new task..." class="form-control">
            <button type="submit" class="btn btn-sm btn-primary mt-3">Submit</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/TaskStore'

const taskStore = useTaskStore()

const newTask = ref('')

const handleSubmit = () => {
    if (newTask.value.length > 0) {
        taskStore.addTask({
            id: Math.floor(Math.random() * 10000),
            title: newTask.value,
            isFav: false
        })

        newTask.value = ''
    } else {
        alert('Fill completely new task !')
    }
}
</script>