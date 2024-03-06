<script>

import {store} from '../store';

export default {
    name: 'AppHeader',

    data() {
        return {
            store,
        }
    },
}
</script>

<template>

    <header>
        <div class="container">
            Header Boolflix
        </div>
    </header>
    
</template>

<style lang="scss">

header {
    width: 100%;
    background: black;

    .container {

        color: white;
        padding: 20px 0px;

    }

}

</style>