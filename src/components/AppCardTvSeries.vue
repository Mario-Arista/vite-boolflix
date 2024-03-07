<script>
import {store} from '../store';

export default {
    name: 'AppCardTvSeries',
    
    data() {
        return {
            store,
        }
    },

    methods: {
        changeFlagUrlSerieTv(serieTv) {
            
            if (serieTv.original_language === "en") {

                // Se la lingua originale è "en", restituisco l'URL della bandiera "gb"
                return "https://flagcdn.com/20x15/gb.png";

            } else if (serieTv.original_language === "ja") {
                // Se la lingua originale è "ja", restituisco l'URL della bandiera "jp"
                return "https://flagcdn.com/20x15/jp.png";
                
            } else {
                return `https://flagcdn.com/20x15/${serieTv.original_language}.png`;
            }
        }
    },

}

</script>

<template>

    <div class="container">

        <h2>SERIE TV:</h2>

        <div id="all-series">

            <div class="telefilm"
                v-for="serieTv in store.tvSeries"
            >

                <div class="original-title"><strong>Titolo originale:</strong> <span>{{ serieTv.original_name }}</span></div>
                <div class="name-serie-tv"><strong>Titolo:</strong> <span>{{ serieTv.name }}</span></div>
                <div class="original-language">
                    <img :src="changeFlagUrlSerieTv(serieTv)" :alt="serieTv.original_language">
                </div>
                <div class="vote-avarage"><strong>Rating:</strong> <span>{{ serieTv.vote_average.toFixed(2) }}</span></div>
                
            </div>
 
        </div>



    </div>

</template>

<style lang="scss">
@use '../styles/variables.scss' as *;

#all-series {
    display: flex;
    flex-wrap: wrap;
    gap: $cardOrizontalGap;
    margin-bottom: 30px;



    .telefilm {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;
        padding-left: 5px;

        background-color: transparent;
        width: calc(100% / 5 - $cardOrizontalGap / 5 * 4);

        // Test
        border: 1px dashed black;

        strong {
            color: $primary_color;
        }
    }

}


</style>