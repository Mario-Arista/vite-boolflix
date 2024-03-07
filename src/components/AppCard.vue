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
            <img :src="'https://image.tmdb.org/t/p/w342/' + posterMovie.poster_path" :alt="posterMovie.original_title">
        </div>
        <div class="hidden-info">
            <div class="original-title"><strong>Titolo originale:</strong> <span>{{ posterMovie.original_title }}</span></div>
            <div class="non-original-title"><strong>Titolo:</strong> <span>{{ posterMovie.title }}</span></div>
            <div class="original-language">
                <img :src="changeFlagUrlMovie(posterMovie)" :alt="posterMovie.original_language">
            </div>
            <div class="vote-avarage"><strong>Rating:</strong> <span>{{ posterMovie.vote_average.toFixed(2) }}</span></div>
        </div>
    </div>

    <div 
        class="card"
        v-if="posterSerieTv"
    >
        <div class="poster-container">
            <img :src="'https://image.tmdb.org/t/p/w342/' + posterSerieTv.backdrop_path" :alt="posterSerieTv.original_name">
        </div>
        <div class="hidden-info">
            <div class="original-title"><strong>Titolo originale:</strong> <span>{{ posterSerieTv.original_name }}</span></div>
            <div class="name-serie-tv"><strong>Titolo:</strong> <span>{{ posterSerieTv.name }}</span></div>
            <div class="original-language">
                <img :src="changeFlagUrlSerieTv(posterSerieTv)" :alt="posterSerieTv.original_language">
            </div>
            <div class="vote-avarage"><strong>Rating:</strong> <span>{{ posterSerieTv.vote_average.toFixed(2) }}</span></div>
        </div>
    </div>




</template>

<style lang="scss">
@use '../styles/variables.scss' as *;



.card {

    width: calc(100% / 5 - $cardOrizontalGap / 5 * 4);

    overflow-y: auto;

    background-color: transparent;

    // Test
    border: 1px dashed black;

    &:hover {

        .poster-container {
            display: none;
        }

        .hidden-info {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 10px;
            padding-left: 5px;
            padding-top: 5px;

        }

    }

    .poster-container {

        img {
            display: block;
            width: 100%;
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