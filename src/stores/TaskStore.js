import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskStore = defineStore('taskStore', () => {
    const tasks = ref([
        {
            id: 1,
            title: 'Meet with her !',
            isFav: true
        }, 
        {
            id: 2,
            title: 'Be my love !',
            isFav: true
        }
    ])

    return { tasks }
})