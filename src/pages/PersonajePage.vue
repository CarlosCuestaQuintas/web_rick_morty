<template>
    <div class="contendor">
        <img :src=datos.image>
        <div class="info" v-if="datos.name">
            <div class="titulo">Nombre</div>
            <div class="dato">{{ datos.name }}</div>
        </div>
        <div class="info" v-if="datos.status">
            <div class="titulo">Estado</div>
            <div class="dato">{{ datos.status }}</div>
        </div>
        <div class="info" v-if="datos.species">
            <div class="titulo">Especie</div>
            <div class="dato">{{ datos.species }}</div>
        </div>
        <div class="info" v-if="datos.tipo">
            <div class="titulo">Tipo</div>
            <div class="dato">{{ datos.tipo }}</div>
        </div>
        <div class="info" v-if="datos.gender">
            <div class="titulo">Género</div>
            <div class="dato">{{ datos.gender }}</div>
        </div>
        <div class="info" v-if="datos.origin">
            <div class="titulo">Origen</div>
            <div class="dato">{{ datos.origin.name }}</div>
        </div>
        <div class="info" v-if="datos.location">
            <div class="titulo">Ubicación</div>
            <div class="dato">{{ datos.location.name }}</div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onBeforeMount } from 'vue';
    import { useRoute } from 'vue-router';

    let route = useRoute();
    let id = ref(route.params.id);
    let datos = ref();

    onBeforeMount(async () => {
        let data = await fetch('https://rickandmortyapi.com/api/character/' + id.value).then(data => data.json());
        console.log(data);

        datos.value = data;
    });
</script>