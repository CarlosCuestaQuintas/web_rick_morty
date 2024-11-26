<template>
    <div class="contenedor-episodio">
        <router-link :to="{name: 'EpisodioPage', params: {id: episodio.id}}">
            <div class="nombre">{{ episodio.name }}</div>
            <div class="episodio">{{ episodio.episode }}</div>
        </router-link>
    </div>
</template>

<style scoped>
    @import '../assets/scss/episodio-component.scss';
</style>

<script setup>
    const props = defineProps({
        episodio: Object
    });
</script>