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
            this.store.searchedText = this.userRequestInput.trim().split(' ').join('+');
            console.log(this.store.searchedText);
        }

    },

}
</script>

<template>

    <header>
        <div class="container">
            <div class="row">
                <img src="/img/logo.png" alt="logo Boolflix">
                <div id="filter-boolflix">
                    <input name="filter" type="search" v-model="userRequestInput" placeholder="Cerca il tuo film">
                    <button @click="() => { SearchingString(); $emit('creatingCards') }">Cerca</button>
                    <div class="img-cont">
                        <img src="/img/profile.jpeg" alt="immagine profilo">
                    </div>
                </div>
            </div>


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

        .row {
            display: flex;
            justify-content: space-between;
            align-items: center;

            img {
                width: 180px;
            }

            #filter-boolflix {
                display: flex;
                gap: 10px;

                input {
                    width: 200px;

                    padding: 8px 12px;
                    border: none;

                    font-family: "Barlow Condensed";
                    font-size: 1em;
                    
                }

                button {
                    padding: 8px 12px;
                    border: none;

                    font-family: "Barlow Condensed";
                    font-weight: bold;
                    font-size: 1em;
                    text-transform: uppercase;

                    background-color: #DC1B28;
                    margin-right: 20px;
                }

                .img-cont {
                    width: 50px;
                    height: 50px;

                    img {
                        width: 100%;
                    }
                }
            }
        }

    }

}

</style>