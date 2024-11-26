<template>
    <router-link class="contenedor" :to="{name: 'PersonajePage', params: {id: personaje.id}}">
        <div class="nombre-personaje">{{ personaje.name }}</div>
        <img :src=personaje.image>
        <!-- <div>{{ personaje.episode }}</div> -->
    </router-link>
</template>

<style scoped>
    .nombre-personaje {
        color: white;
        font-size: 20px;
        text-align: center;
    }
</style>

<script setup>
    const props = defineProps({
        personaje: Object
    });
</script>