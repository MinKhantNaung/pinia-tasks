import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskStore = defineStore('taskStore', () => {
    const tasks = ref([
        {
            id: 1,
            title: 'Go to Ocean !',
            isFav: true
        }, 
        {
            id: 2,
            title: 'Eat Chicken Noddle Soup !',
            isFav: true
        }
    ])

    return { tasks }
})