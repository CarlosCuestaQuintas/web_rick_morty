<template>
    <div class="contenedor">
        <!-- <div v-for="episodio in listaEpisodios">{{ episodio.id }}  {{ episodio.name }}</div> -->
        <EpisodioComponent v-for="episodio in listaEpisodios" :episodio=episodio />
    </div>
</template>

<style scoped>
    .contenedor {
        display: flex;
        flex-wrap: wrap;
    }
</style>

<script setup>
    import { ref, onBeforeMount } from 'vue';
    import EpisodioComponent from '@/components/EpisodioComponent.vue';
    // Creo que aquí irá otro import

    let listaEpisodios = ref([]);

    onBeforeMount(async () => {
        console.log("onBeforeMount");
        let data = await fetch('https://rickandmortyapi.com/api/episode/');
        data = await data.json();
        console.log(data);
        data.results.forEach(episodio => {
            listaEpisodios.value.push(episodio);
        });

        // Si existe data.info.next significa que hay más páginas de episodios
        while (data.info.next) {
            data = await fetch(data.info.next);
            data = await data.json();
            console.log(data);
            data.results.forEach(episodio => {
                listaEpisodios.value.push(episodio);
            });
        }
    });
</script>