<template>
    <div class="contenedor-personaje">
        <img :src=datos.image>

        <div class="contenedor-datos">
            <div class="seccion-datos" v-if="datos.name">
                <div class="titulo-dato">Nombre</div>
                <div class="info-dato">{{ datos.name }}</div>
            </div>
            
            <div class="seccion-datos" v-if="datos.status">
                <div class="titulo-dato">Estado</div>
                <div class="info-dato">{{ datos.status }}</div>
            </div>
            
            <div class="seccion-datos" v-if="datos.species">
                <div class="titulo-dato">Especie</div>
                <div class="info-dato">{{ datos.species }}</div>
            </div>
            
            <div class="seccion-datos" v-if="datos.type">
                <div class="titulo-dato">Tipo</div>
                <div class="info-dato">{{ datos.type }}</div>
            </div>
            
            <div class="seccion-datos" v-if="datos.gender">
                <div class="titulo-dato">Género</div>
                <div class="info-dato">{{ datos.gender }}</div>
            </div>
            
            <div class="seccion-datos" v-if="datos.origin">
                <div class="titulo-dato">Origen</div>
                <div class="info-dato">{{ datos.origin.name }}</div>
            </div>
            
            <div class="seccion-datos" v-if="datos.location">
                <div class="titulo-dato">Ubicación</div>
                <div class="info-dato">{{ datos.location.name }}</div>
            </div>
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