<template>
    <!-- <div class="contenedor-general"> -->
        <!-- <div v-for="episodio in listaEpisodios">{{ episodio.id }}  {{ episodio.name }}</div> -->
        <div class="logo">
            <img src="https://www.themoviedb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png">
        </div>
        <Splide class="splide-episodios" :options="{gap:15,pagination:false,perPage:4}">
            <SplideSlide v-for="episodio in listaEpisodios">
                <!-- <EpisodioComponent v-for="episodio in listaEpisodios" :episodio=episodio /> -->
                <EpisodioComponent :episodio=episodio />
                <!-- <div>{{ episodio.name }}</div> -->
            </SplideSlide>
        </Splide>
    <!-- </div> -->
</template>

<style scoped>
    /* Si pongo contenedor aquí y también en EpisodioComponent.vue entonces los divs contenedor de EpisodioComponent.vue heredarán estos atributos, pero no al revés. Tengo que cambiar los nombres */
    .contenedor-general {
        width: 1300px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .splide-episodios {
        width: 1300px;
        margin: 0 auto;
    }

    .logo {
        width: fit-content;
        margin: 0 auto;
    }

    img {
        width: 800px;
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