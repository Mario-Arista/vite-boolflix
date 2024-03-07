<script>
import {store} from '../store';

import AppCard from './AppCard.vue';

export default {
    name: 'AppMain',

    data() {
        return  {
            store,
        }
    },

    components: {
        AppCard,
    },  
}
</script>

<template>
    
    <main :class="{ 'd-none': store.movies.length === 0 && store.tvSeries.length === 0 }">

        <div class="container">

            <h2>FILM:</h2>

            <div class="all-posters">

                <AppCard v-for="movie in store.movies"
                    :posterMovie="movie"
                ></AppCard>

            </div>

        </div>

        <div class="container">

            <h2>SERIE TV:</h2>

            <div class="all-posters">

                <AppCard 
                    v-for="serieTv in store.tvSeries"
                    :posterSerieTv="serieTv"
                ></AppCard>

            </div>

        </div>
        
    </main>

</template>

<style lang="scss">

@use '../styles/variables.scss' as *;

main {
    width: 100%;
    height: calc(100vh - 100px);
    position: absolute;
    top: 100px;
    left: 0px;

    overflow-y: auto;

    // margine di 30px sommato alla dimensione del Header in position fixed
    padding-top: 30px; 

    padding-bottom: 30px;

    &.d-none{
        display: none;
    }

    .all-posters {
        display: flex;
        flex-wrap: wrap;
        gap: $cardOrizontalGap;
        margin-bottom: 30px;
    }
}


</style>