<template>
    <!-- <div v-for="p in listaPersonajes">{{ p }}</div> -->
    <!-- <PersonajeComponent v-for="personaje in listaPersonajes" :personaje=personaje /> -->
    <div class="titulo-episodio">{{ episodio.name }}</div>
    <Splide class="splide-personajes" :options="{gap:15,pagination:false,perPage:6,drag:'free',snap:false}">
        <SplideSlide v-for="personaje in listaPersonajes">
            <PersonajeComponent :personaje=personaje />
        </SplideSlide>
    </Splide>
</template>

<style scoped>
    .titulo-episodio {
        color: white;
        font-size: 60px;
        text-align: center;
        text-shadow: black 1px 0 10px;
    }
</style>

<script setup>
    import { ref, onBeforeMount } from 'vue';
    import { useRoute } from 'vue-router';
    import PersonajeComponent from '@/components/PersonajeComponent.vue';

    let route = useRoute();
    let id = ref(route.params.id);
    let episodio = ref();
    let listaPersonajes = ref([])

    onBeforeMount(async () => {
        // let data = await fetch('https://rickandmortyapi.com/api/character/' + id.value);
        episodio.value = await fetch('https://rickandmortyapi.com/api/episode/' + id.value).then(response => response.json());
        // data = await data.json();
        console.log(episodio.value);
        // listaPersonajes.value = data.characters;
        // console.log(listaPersonajes.value);
        let data = episodio.value.characters;
        console.log(data);

        data.forEach(p => {
            fetch(p).then(response => response.json()).then(response => listaPersonajes.value.push(response));
        });
    });
</script>