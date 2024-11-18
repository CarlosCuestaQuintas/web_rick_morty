<template>
    <router-link class="contenedor" :to="{name: 'PersonajePage', params: {id: personaje.id}}">
        <div>{{ personaje.name }}</div>
        <img :src=personaje.image>
        <!-- <div>{{ personaje.episode }}</div> -->
    </router-link>
</template>

<script setup>
    const props = defineProps({
        personaje: Object
    });
</script>