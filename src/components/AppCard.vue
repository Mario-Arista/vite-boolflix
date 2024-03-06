<script>
import {store} from '../store';

export default {
    name: AppCard,
    
    data() {
        return {
            store,
        }
    },

}

</script>

<template>

    <div class="movie">
        Film di Wes Anderson
    </div>

</template>

<style lang="scss">

.movie {
    background-color: red;
}

</style>