<script>

import {store} from '../store';

export default {
    name: 'AppHeader',
    userRequestInput: '',

    data() {
        return {
            store,
        }
    },

    methods: {

        SearchingString() {
            this.store.searchedText = this.userRequestInput;
        }

    },

}
</script>

<template>

    <header>
        <div class="container">
            <input name="filter" type="search" v-model="userRequestInput" placeholder="Cerca il tuo film">
            <button @click="() => { SearchingString(); $emit('creatingCards') }">Cerca</button>
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