<script>
import {store} from '../store';

export default {
    name: 'AppCardMovie',
    
    data() {
        return {
            store,
        }
    },

}

</script>

<template>

    <div class="container">

        <h2>FILM:</h2>

        <div id="all-movies">

            <div class="movie"
                v-for="movie in store.movies"
            >

                <div class="original-title">{{ movie.original_title }}</div>
                <div class="non-original-title">{{ movie.title }}</div>
                <div class="original-language">{{ movie.original_language }}</div>
                <div class="vote-avarage">{{ movie.vote_average.toFixed(1) }}</div>

            </div>

        </div>

    </div>

</template>

<style lang="scss">
@use '../styles/variables.scss' as *;

#all-movies {
    display: flex;
    flex-wrap: wrap;
    gap: $cardOrizontalGap;
    margin-bottom: 30px;

    // Test
    border: 1px dashed greenyellow;

    .movie {
        display: flex;
        flex-direction: column;

        background-color: transparent;
        width: calc(100% / 5 - $cardOrizontalGap / 5 * 4);

        // Test
        border: 1px dashed black;
    }

}

</style>