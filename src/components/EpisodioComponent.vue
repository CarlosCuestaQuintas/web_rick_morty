<template>
    <router-link class="contenedor" :to="{name: 'EpisodioPage', params: {id: episodio.id}}">
        <div class="nombre">{{ episodio.name }}</div>
        <div class="episodio">{{ episodio.episode }}</div>
    </router-link>
    
    <!-- <div class="contenedor">
        <div class="nombre">{{ episodio.name }}</div>
        <div class="episodio">{{ episodio.episode }}</div>
    </div> -->
</template>

<style scoped>
    .contenedor {
        border: 1px solid black;
        border-radius: 10px;
        width: 500px;
        margin: 20px;
        height: fit-content;
    }
    .nombre {
        font-size: 60px;
        text-align: center;
    }
</style>

<script setup>
    const props = defineProps({
        episodio: Object
    });
</script>