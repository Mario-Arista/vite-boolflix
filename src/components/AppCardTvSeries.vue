<script>
import {store} from '../store';

export default {
    name: 'AppCardTvSeries',
    
    data() {
        return {
            store,
        }
    },

}

</script>

<template>

    <div class="container">

        <h2>SERIE TV:</h2>

        <div id="all-series">
            <div class="tv-serie">
                Regista: David Lynch<br>
                Film: Twin Peaks<br>
                Genere: Capolavoro
            </div>
            <div class="tv-serie">
                Regista: David Lynch<br>
                Film: Twin Peaks<br>
                Genere: Capolavoro
            </div>
            <div class="tv-serie">
                Regista: David Lynch<br>
                Film: Twin Peaks<br>
                Genere: Capolavoro
            </div>
            <div class="tv-serie">
                Regista: David Lynch<br>
                Film: Twin Peaks<br>
                Genere: Capolavoro
            </div>
            <div class="tv-serie">
                Regista: David Lynch<br>
                Film: Twin Peaks<br>
                Genere: Capolavoro
            </div>
        </div>



    </div>

</template>

<style lang="scss">
@use '../styles/variables.scss' as *;

#all-series {
    display: flex;
    flex-wrap: wrap;
    gap: $cardOrizontalGap;
    margin-bottom: 30px;

    // Test
    border: 1px dashed greenyellow;

    .tv-serie {
        display: flex;

        background-color: transparent;
        width: calc(100% / 5 - $cardOrizontalGap / 5 * 4);

        // Test
        border: 1px dashed black;
    }

}


</style>