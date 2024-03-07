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

                <div class="original-title"><strong>Titolo originale:</strong> <span>{{ movie.original_title }}</span></div>
                <div class="non-original-title"><strong>Titolo:</strong> <span>{{ movie.title }}</span></div>
                <div class="original-language"><strong>Lingue originale:</strong> <span>{{ movie.original_language }}</span></div>
                <div class="vote-avarage"><strong>Rating:</strong> <span>{{ movie.vote_average.toFixed(2) }}</span></div>

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

    .movie {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;
        padding-left: 5px;

        background-color: transparent;
        width: calc(100% / 5 - $cardOrizontalGap / 5 * 4);

        // Test
        border: 1px dashed black;

        strong {
            color: $primary_color;
        }
    }

}

</style>