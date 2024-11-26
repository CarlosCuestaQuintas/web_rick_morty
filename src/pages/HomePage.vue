<template>
        <div class="logo">
            <img src="https://www.themoviedb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png">
        </div>
        <Splide class="splide-episodios" :options="{gap:15,pagination:false,perPage:4}">
            <SplideSlide class="slide-episodio" v-for="episodio in listaEpisodios">
                <EpisodioComponent :episodio=episodio />
            </SplideSlide>
        </Splide>
</template>

<style scoped>
    @import '../assets/scss/home-page.scss';
</style>

<script setup>
    import { ref, onBeforeMount, onMounted } from 'vue';
    import EpisodioComponent from '@/components/EpisodioComponent.vue';

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