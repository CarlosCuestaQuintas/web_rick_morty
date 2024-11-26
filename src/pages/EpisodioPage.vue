<template>
    <!-- TODO: un botón de volver atrás -->
    <div class="titulo-episodio titulo">{{ episodio.name }}</div>
    <Splide class="splide-personajes" :options="{gap:15,pagination:false,perPage:6,drag:'free',snap:false}">
        <SplideSlide v-for="personaje in listaPersonajes">
            <PersonajeComponent :personaje=personaje />
        </SplideSlide>
    </Splide>
</template>

<script setup>
    import { ref, onBeforeMount } from 'vue';
    import { useRoute } from 'vue-router';
    import PersonajeComponent from '@/components/PersonajeComponent.vue';

    let route = useRoute();
    let id = ref(route.params.id);
    let episodio = ref();
    let listaPersonajes = ref([])

    onBeforeMount(async () => {
        episodio.value = await fetch('https://rickandmortyapi.com/api/episode/' + id.value).then(response => response.json());
        console.log(episodio.value);
        let data = episodio.value.characters;
        console.log(data);

        data.forEach(p => {
            fetch(p).then(response => response.json()).then(response => listaPersonajes.value.push(response));
        });
    });
</script>