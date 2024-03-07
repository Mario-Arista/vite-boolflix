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

    <div class="container">
        <div class="row">
            <img src="/img/logo.png" alt="logo Boolflix">
            <div id="filter-boolflix">
                <input name="filter" type="search" v-model="store.searchedText" placeholder="Cerca il tuo film">
                <button @click="$emit('performSearch')">Cerca</button>
                <div class="img-cont">
                    <img src="/img/profile.jpeg" alt="immagine profilo">
                </div>
            </div>
        </div>
    </div>

    
</template>

<style lang="scss">
@use '../styles/variables.scss' as *;




.container {

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

                background-color: $primary_color;
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

</style>