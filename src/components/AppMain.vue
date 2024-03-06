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
    <main>
        <div class="container">
            <AppCard></AppCard>
        </div>
    </main>
</template>

<style lang="scss">

@use '../styles/variables.scss' as *;

main {
    width: 100%;

    // Test
    background: greenyellow;

    .container {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: $cardVerticalGap $cardOrizontalGap;

        padding: 30px 0px;
    }

}

</style>