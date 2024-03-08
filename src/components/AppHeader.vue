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
            <div id="logo-nav">
                <img src="/img/logo.png" alt="logo Boolflix">
                <ul>
                    <li>Home</li>
                    <li>Tv series</li>
                    <li>Movies</li>
                    <li>Originals</li>
                    <li>New arrivals</li>
                    <li>My list</li>
                </ul>
            </div>

            <div id="filter-boolflix">
                <input name="filter" type="search" v-model="store.searchedText" placeholder="Search your film or tv Series">
                <button @click="$emit('performSearch')">Search</button>
                <div class="img-cont">
                    <i class="fa-solid fa-bell">
                        <div class="notif">1</div>
                    </i>
                    <img src="/img/profile.jpeg" alt="immagine profilo">
                    <i class="fa fa-angle-down"></i>
                </div>
            </div>
        </div>
    </div>

    
</template>

<style lang="scss">
@use '../styles/variables.scss' as *;




.container {

    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;

        #logo-nav {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 5px;

            img {
                width: 180px;
            }
            ul {
                display: flex;
                gap: 5px;
                list-style-type: none;
                color: #121212;
                

                li {
                    
                    filter: brightness(3.5);

                    &:hover {
                        filter: brightness(7.5);
                    }
                }
                
            }
        }
        

        #filter-boolflix {
            display: flex;
            align-items: center;
            gap: 10px;

            input {
                max-width: 200px;
                    
                padding: 8px 10px;
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
                display: flex;
                align-items: center;
                gap: 5px;

                

                .fa-bell {
                    position: relative;
                    padding-right: 10px;

                    .notif {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;

                        top: -5px;
                        right: 5px;

                        width: 12px;
                        height: 12px;

                        font-size: 8px;
                        background-color: $primary-color;
                        border-radius: 50%;
                    }
                    

                }

                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
            }
        }
    }

}

</style>