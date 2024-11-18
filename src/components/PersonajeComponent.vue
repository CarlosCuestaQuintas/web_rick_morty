<template>
    <div>{{ personaje.name }}</div>
    <img :src=personaje.image>
    <!-- <div>{{ personaje.episode }}</div> -->
</template>

<script setup>
    const props = defineProps({
        personaje: Object
    });
</script>