<script>
import {store} from '../store';

export default {
    name: 'AppCard',
    
    data() {
        return {
            store,
        }
    },

}

</script>

<template>

    <div class="card">
        Regista: Wes Anderson<br>
        Film: Grand Hotel Budapest<br>
        Genere: Capolavoro
    </div>
    <div class="card">
        Regista: Wes Anderson<br>
        Film: Grand Hotel Budapest<br>
        Genere: Capolavoro
    </div>
    <div class="card">
        Regista: Wes Anderson<br>
        Film: Grand Hotel Budapest<br>
        Genere: Capolavoro
    </div>
    <div class="card">
        Regista: Wes Anderson<br>
        Film: Grand Hotel Budapest<br>
        Genere: Capolavoro
    </div>
    <div class="card">
        Regista: Wes Anderson<br>
        Film: Grand Hotel Budapest<br>
        Genere: Capolavoro
    </div>
    <div class="card">
        Regista: Wes Anderson<br>
        Film: Grand Hotel Budapest<br>
        Genere: Capolavoro
    </div>
    <div class="card">
        Regista: Wes Anderson<br>
        Film: Grand Hotel Budapest<br>
        Genere: Capolavoro
    </div>


</template>

<style lang="scss">
@use '../styles/variables.scss' as *;

.card {
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;

    background-color: whitesmoke;
    width: calc(100% / 5 - $cardOrizontalGap / 5 * 4);
}

</style>