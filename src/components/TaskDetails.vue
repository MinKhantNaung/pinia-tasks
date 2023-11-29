<template>
    <div class="d-flex justify-content-between bg-light my-2">
        {{ task.title }}
        <span class="px-2">
            <button @click="taskStore.deleteTask(task.id)">
                <i class="fa-solid fa-trash" style="cursor: pointer;"></i>
            </button> &nbsp;
            <button @click="taskStore.toggleFav(task.id)" :class="{'text-info': task.isFav}">
                <i class="fa-solid fa-heart" style="cursor: pointer;"></i>
            </button>
        </span>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useTaskStore } from '../stores/TaskStore';

defineProps({
    task: Object
})

const taskStore = useTaskStore()

</script>