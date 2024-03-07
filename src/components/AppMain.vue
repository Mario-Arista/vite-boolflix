<script>
import {store} from '../store';

import AppCardMovie from './AppCardMovie.vue';
import AppCardTvSeries from './AppCardTvSeries.vue';


export default {
    name: 'AppMain',

    data() {
        return  {
            store,
        }
    },

    components: {
        AppCardMovie,
        AppCardTvSeries,
    },  
}
</script>

<template>
    
    <main>

        <AppCardMovie></AppCardMovie>

        <AppCardTvSeries></AppCardTvSeries>
        
    </main>

</template>

<style lang="scss">

@use '../styles/variables.scss' as *;

main {
    width: 100%;

    padding-top: 30px;
    padding-bottom: 30px;

}

</style>