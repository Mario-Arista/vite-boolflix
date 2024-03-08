<script>
import {store} from '../store';

export default {
    name: 'AppCard',

    props: {

        posterMovie: Array,
        posterSerieTv: Array,
    },
    
    data() {
        return {
            store,
        };
        
    },

    methods: {

        // Metodo per bandiere sia per movie che per Serie TV
        changeFlagUrl(poster) {
            
            if (poster.original_language === "en") {

                // Se la lingua originale è "en", restituisco l'URL della bandiera "gb"
                return "https://flagcdn.com/20x15/gb.png";

            } else if (poster.original_language === "ja") {

                // Se la lingua originale è "ja", restituisco l'URL della bandiera "jp"
                return "https://flagcdn.com/20x15/jp.png";
                
            } else {
                return `https://flagcdn.com/20x15/${poster.original_language}.png`;
            }
        },

    }
}

</script>

<template>



    <div 
        class="card"
        v-if="posterMovie"
    >
        <div class="poster-container">
            <img v-if="posterMovie.poster_path != null" :src="'https://image.tmdb.org/t/p/w342/' + posterMovie.poster_path" :alt="posterMovie.original_title">
            <div v-else class="replace-for-missing-poster">
                <div>Movie's poster not available</div>
            </div>
        </div>
        <div class="hidden-info">
            <div class="original-language">
                <img :src="changeFlagUrl(posterMovie)" :alt="posterMovie.original_language">
            </div>
            <div class="vote-avarage">
                <div v-for="star in 5" >
                    <i v-if="star <= Math.round(posterMovie.vote_average / 2)" class="fa-solid fa-star"></i>
                    <i v-else class="fa-regular fa-star"></i>
                </div>
            </div>
            <div class="original-title"><strong>Title:</strong> <span>{{ posterMovie.original_title }}</span></div>
            <div class="description"><strong>Description:</strong> <span>{{ posterMovie.overview }}</span></div>
        </div>
    </div>

    <div 
        class="card"
        v-if="posterSerieTv"
    >
        <div class="poster-container">
            <img v-if="posterSerieTv.poster_path != null" :src="'https://image.tmdb.org/t/p/w342/' + posterSerieTv.poster_path" :alt="posterSerieTv.name">
            <div v-else class="replace-for-missing-poster">
                <div>SerieTv's poster not available</div>
            </div>
        </div>
        <div class="hidden-info">
            <div class="original-language">
                <img :src="changeFlagUrl(posterSerieTv)" :alt="posterSerieTv.original_language">
            </div>
            <div class="vote-avarage">
                <div v-for="star in 5">
                    <i v-if="star <= Math.round(posterSerieTv.vote_average / 2)" class="fa-solid fa-star"></i>
                    <i v-else class="fa-regular fa-star"></i>
                </div>
            </div>
            <div class="name-serie-tv"><strong>Title:</strong> <span>{{ posterSerieTv.name }}</span></div>
            <div class="description"><strong>Description:</strong> <span>{{ posterSerieTv.overview }}</span></div>
        </div>
    </div>




</template>

<style lang="scss">
@use '../styles/variables.scss' as *;

.card {

    width: calc(100% / 5 - $cardOrizontalGap / 5 * 4);
    height: 360px;

    overflow-y: auto;


    &:hover {

        .poster-container {
            display: none;

        }

        .hidden-info {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            gap: 10px;
            padding: 15px;

            strong {

                color: $primary_color;

            }
            .vote-avarage {
                display: flex;
                flex-direction: row;
                gap: 1px;
            }

        }

    }

    .poster-container {

        img {
            display: block;
            width: 100%;
        }

        .replace-for-missing-poster {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 100%;
            height: 360px;

            background-color: $primary-color;

            font-family: "Barlow Condensed";
            font-size: 2em;
            font-weight: bold;
            text-transform: uppercase;

            div {

                text-align: center;                

            }

        }
    }

    .hidden-info {

        display: none;

    }


}


</style>