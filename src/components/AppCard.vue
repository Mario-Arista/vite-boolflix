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

        changeFlagUrlMovie(posterMovie) {
            
            if (posterMovie.original_language === "en") {

                // Se la lingua originale è "en", restituisco l'URL della bandiera "gb"
                return "https://flagcdn.com/20x15/gb.png";

            } else if (posterMovie.original_language === "ja") {
                // Se la lingua originale è "ja", restituisco l'URL della bandiera "jp"
                return "https://flagcdn.com/20x15/jp.png";
                
            } else {
                return `https://flagcdn.com/20x15/${posterMovie.original_language}.png`;
            }
        },

        changeFlagUrlSerieTv(posterSerieTv) {
            
            if (posterSerieTv.original_language === "en") {

                // Se la lingua originale è "en", restituisco l'URL della bandiera "gb"
                return "https://flagcdn.com/20x15/gb.png";

            } else if (posterSerieTv.original_language === "ja") {
                // Se la lingua originale è "ja", restituisco l'URL della bandiera "jp"
                return "https://flagcdn.com/20x15/jp.png";
                
            } else {
                return `https://flagcdn.com/20x15/${posterSerieTv.original_language}.png`;
            }
        }
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
                <div>Poster not available</div>
            </div>
        </div>
        <div class="hidden-info">
            <div class="original-language">
                <img :src="changeFlagUrlMovie(posterMovie)" :alt="posterMovie.original_language">
            </div>
            <div class="vote-avarage"><strong>Rating:</strong> <span>{{ posterMovie.vote_average.toFixed(2) }}</span></div>
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
                <div>Poster not available</div>
            </div>
        </div>
        <div class="hidden-info">
            <div class="original-language">
                <img :src="changeFlagUrlSerieTv(posterSerieTv)" :alt="posterSerieTv.original_language">
            </div>
            <div class="vote-avarage"><strong>Rating:</strong> <span>{{ posterSerieTv.vote_average.toFixed(2) }}</span></div>
            <div class="name-serie-tv"><strong>Title:</strong> <span>{{ posterSerieTv.name }}</span></div>
            <div class="description"><strong>Description:</strong> <span>{{ posterSerieTv.overview }}</span></div>
        </div>
    </div>




</template>

<style lang="scss">
@use '../styles/variables.scss' as *;

.card {

    width: calc(100% / 5 - $cardOrizontalGap / 5 * 4);
    height: 325px;

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
            height: 325px;

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

    strong {
        color: $primary_color;
    }
}


</style>