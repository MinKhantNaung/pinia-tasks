<template>
    <div class="d-flex justify-content-between bg-light my-2">
        {{ task.title }}
        <span class="px-2">
            <i class="fa-solid fa-trash text-danger"></i> &nbsp;
            <i class="fa-solid fa-heart text-info"></i>
        </span>
    </div>
</template>

<script setup>
defineProps({
    task: Object
})
</script>