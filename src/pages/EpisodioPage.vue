<template>
    <div>{{ id }}</div>
</template>

<script setup>
    import { ref, onBeforeMount } from 'vue';
    import { useRoute } from 'vue-router';

    let route = useRoute();
    let id = ref(route.params.id);
    let listaPersonajes = ref([])

    onBeforeMount(async () => {
        // let data = await fetch('https://rickandmortyapi.com/api/character/' + id.value);
        let data = await fetch('https://rickandmortyapi.com/api/episode/' + id.value).then(data => data.json());
        // data = await data.json();
        console.log(data);
        listaPersonajes.value = data.characters;
        console.log(listaPersonajes.value);
    });
</script>