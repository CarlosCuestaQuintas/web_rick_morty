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

        /*
        En este punto tengo una lista de las urls de los personajes
        Podría hacer un forEach para cada url y hacer una cajita (¿componente nuevo?) en la que poner el nombre y la imagen en miniatura
        
        // Dado que solo tenemos las urls tenemos que hacer un fetch ¿Qué información necesitamos?
            1) La id del personaje, con la que hacer el componente que luego pueda redirigir a la página específica.
            2) La imagen del personaje.
            3) La url del personaje (no me gusta hacer dos veces el mismo fetch, pero de momento voy a hacerlo así).
        ¿Puedo pasarle directamente el json como prop al componente?
        */

        data.forEach(p => {
            fetch(p).then(response => response.json()).then(response => listaPersonajes.value.push(response));
        });
    });
</script>