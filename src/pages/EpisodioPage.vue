<template>
    <div>{{ id }}</div>
    <!-- <div v-for="p in listaPersonajes">{{ p }}</div> -->
    <PersonajeComponent v-for="personaje in listaPersonajes" :personaje=personaje />
</template>

<script setup>
    import { ref, onBeforeMount } from 'vue';
    import { useRoute } from 'vue-router';
    import PersonajeComponent from '@/components/PersonajeComponent.vue';

    let route = useRoute();
    let id = ref(route.params.id);
    let listaPersonajes = ref([])

    onBeforeMount(async () => {
        // let data = await fetch('https://rickandmortyapi.com/api/character/' + id.value);
        let data = await fetch('https://rickandmortyapi.com/api/episode/' + id.value).then(data => data.json());
        // data = await data.json();
        console.log(data);
        // listaPersonajes.value = data.characters;
        // console.log(listaPersonajes.value);
        data = data.characters;
        console.log(data);

        data.forEach(p => {
            fetch(p).then(response => response.json()).then(response => listaPersonajes.value.push(response));
        });
    });
</script>