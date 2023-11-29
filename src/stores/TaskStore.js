import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useTaskStore = defineStore('taskStore', () => {
    // state
    const tasks = ref([])

    // getters
    const favTasks = computed(() => {
        return tasks.value.filter(task => task.isFav)
    })

    const favTasksCount = computed(() => {
        return tasks.value.filter(task => task.isFav).length
    })

    const totalTasks = computed(() => {
        return tasks.value.length
    })

    // actions
    function getTasks() {
        fetch('http://localhost:3000/tasks')
        .then(response => response.json())
        .then(response => tasks.value = response)
    }

    function addTask(task) {
        tasks.value.push(task)
    }

    function deleteTask(id) {
        const indexToRemove = tasks.value.findIndex(task => task.id === id);

        if (indexToRemove !== -1) {
            tasks.value.splice(indexToRemove, 1);
        }
    }

    function toggleFav(id) {
        const task = tasks.value.find(task => task.id == id)
        task.isFav = !task.isFav
    }

    // reseting state setup store
    function $reset() {
        tasks.value = []
    }

    // set up pinia syntax is like composable, don't forget to return
    return {
        tasks,
        favTasks,
        favTasksCount,
        totalTasks,
        getTasks,
        addTask,
        deleteTask,
        toggleFav,
        $reset,
    }
})