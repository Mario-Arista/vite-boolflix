<script>
import {store} from '../store';

import AppCard from './AppCard.vue';

export default {
    name: AppMain,

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
    <main>
        <div class="container">
            <AppCard></AppCard>
        </div>
    </main>
</template>

<style lang="scss">

main {
    width: 100%;
    background: greenyellow;

}

</style>