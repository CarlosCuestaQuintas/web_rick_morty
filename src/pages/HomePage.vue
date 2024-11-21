<template>
    <div class="contenedor-general">
        <!-- <div v-for="episodio in listaEpisodios">{{ episodio.id }}  {{ episodio.name }}</div> -->
        <EpisodioComponent v-for="episodio in listaEpisodios" :episodio=episodio />
    </div>
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