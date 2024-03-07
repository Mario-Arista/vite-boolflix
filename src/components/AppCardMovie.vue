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

            <div class="movie">
                Regista: Wes Anderson<br>
                Film: Grand Hotel Budapest<br>
                Genere: Capolavoro
            </div>

            <div class="movie">
                Regista: Wes Anderson<br>
                Film: Grand Hotel Budapest<br>
                Genere: Capolavoro
            </div>
            <div class="movie">
                Regista: Wes Anderson<br>
                Film: Grand Hotel Budapest<br>
                Genere: Capolavoro
            </div>
            <div class="movie">
                Regista: Wes Anderson<br>
                Film: Grand Hotel Budapest<br>
                Genere: Capolavoro
            </div>
            <div class="movie">
                Regista: Wes Anderson<br>
                Film: Grand Hotel Budapest<br>
                Genere: Capolavoro
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

        background-color: transparent;
        width: calc(100% / 5 - $cardOrizontalGap / 5 * 4);

        // Test
        border: 1px dashed black;
    }

}

</style>