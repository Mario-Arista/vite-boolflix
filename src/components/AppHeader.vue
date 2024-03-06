<script>

import {store} from '../store';

export default {
    name: AppHeader,

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <header>
        <div class="container">Barra di navigazione</div>
    </header>
    
</template>

<style lang="scss">

header {
    width: 100%;
    background: black;

}

</style>