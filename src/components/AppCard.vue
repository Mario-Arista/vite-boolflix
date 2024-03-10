<script>
import axios from 'axios';
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

            // Booleana per mostrare elementi nella card el click 
            showHiddenInfo: false,
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

        // Funzione lanciate al click sulla card Movie
        clickOnMovie(movieId) {
            // Mostra le informazioni aggiuntive
            this.showHiddenInfo = !this.showHiddenInfo;

            // Verifica se l'ID del film è già presente nello store
            if (!this.store.castMovie.some(movie => movie.id === movieId)) {
                // Se il film non è presente nello store, effettua la chiamata API per ottenere il cast del film
                axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=d73dfba09f18e671d0c3d7d2b090ca8f`)
                    .then(result => {
                        // Prendo i primi 5 attori
                        const top5Actors = result.data.cast.slice(0, 5);

                        // Estraggo solo i nomi degli attori
                        const actorNames = top5Actors.map(actor => actor.name);

                        // Creo un oggetto con l'ID del film e i primi 5 attori
                        const movieData = {
                            id: movieId,
                            cast: actorNames
                        };

                        // Aggiungo i dati del film allo store
                        this.store.castMovie.push(movieData);

                    })
                    .catch(error => {
                        console.error('Errore nel recupero del cast del film:', error);
                    });
            }
        },

        // Funzione lanciata al click sulla card Serie TV
        clickOnSerieTv(SerieId) {

            // Mostra le informazioni aggiuntive
            this.showHiddenInfo = !this.showHiddenInfo;

            // Se è una serie TV, effettua la chiamata API per ottenere i crediti della serie TV
            axios.get(`https://api.themoviedb.org/3/tv/${SerieId}/credits?api_key=d73dfba09f18e671d0c3d7d2b090ca8f`)
                .then(res => {
                    // Prendo l'id 
                    const castIDSerie = res.data.id;

                    // Prendo i primi 5 attori
                    const top5ActorsSerie = res.data.cast.slice(0, 5);

                    // Estraggo solo i nomi degli attori
                    const actorNamesSerie = top5ActorsSerie.map(actor => actor.name);

                    // Creo un oggetto con l'ID del film e i primi 5 attori
                    const serieData = {
                        id: castIDSerie,
                        cast: actorNamesSerie
                    };

                    if (!this.store.castSerieTv.some(data => data.id === serieId))  {
                        // Aggiungo i primi 5 attori del film allo store con l'ID del film
                        this.store.castSerieTv.push(serieData);
                    }
                    
                })
                .catch(error => {
                    console.error('Errore nel recupero del cast della serie TV:', error);
            });
        }
    }
}

</script>

<template>


    <!-- MOVIE CARD -->
    <div 
        class="card"
        v-if="posterMovie"
        @click="clickOnMovie(posterMovie.id)"
    >
        <!-- container con img poster  e rimpiazzo se null--> 
        <div 
            class="poster-container"
            v-show="!showHiddenInfo"

        >
            <img v-if="posterMovie.poster_path != null" :src="'https://image.tmdb.org/t/p/w342/' + posterMovie.poster_path" :alt="posterMovie.original_title">
            <div v-else class="replace-for-missing-poster">
                <div>Movie's poster not available</div>
            </div>
        </div>

        <!-- Informazioni Nascoste -->
        <div 
            class="hidden-info"
            v-show="showHiddenInfo"
        >
            <!-- Bandierina -->
            <div class="original-language">
                <img :src="changeFlagUrl(posterMovie)" :alt="posterMovie.original_language">
            </div>

            <!-- Stelline con voto -->
            <div class="vote-avarage">
                <div v-for="star in 5" >
                    <i v-if="star <= Math.round(posterMovie.vote_average / 2)" class="fa-solid fa-star"></i>
                    <i v-else class="fa-regular fa-star"></i>
                </div>
            </div>

            <!-- Generi dei film -->
            <div class="genres">
                <div class="genre" v-for="genre in store.genreMovies">
                    <span v-if="posterMovie.genre_ids.includes(genre.id)"> 
                        {{ genre.name + " " }} 
                    </span>
                </div>
            </div>

            <!-- titolo -->
            <div class="original-title"><strong>Title:</strong> <span>{{ posterMovie.original_title }}</span></div>

            <!-- descrizione -->
            <div class="description" v-if="!posterMovie.overview == ''">
                <strong>Description:</strong> <span>{{ posterMovie.overview }}</span>
            </div>

            <!-- Cast -->
            <div v-if="store.castMovie.length > 0">
            <div v-for="movieData in store.castMovie">
                <div v-if="movieData.id === posterMovie.id" class="cast">
                    <span v-for="actor in movieData.cast" style="color: black;">{{ "Cast: " + actor + " " }}</span>
                </div>
            </div>
        </div>

        </div>
    </div>

    <!-- SERIE-TV CARD -->

    <div 
        class="card"
        v-if="posterSerieTv"
        @click="clickOnSerieTv(posterSerieTv.id)"
    >
        <!-- container con img poster  e rimpiazzo se null--> 
        <div 
            class="poster-container"
            v-show="!showHiddenInfo"
        >
            <img v-if="posterSerieTv.poster_path != null" :src="'https://image.tmdb.org/t/p/w342/' + posterSerieTv.poster_path" :alt="posterSerieTv.name">
            <div v-else class="replace-for-missing-poster">
                <div>SerieTv's poster not available</div>
            </div>
        </div>

        <!-- Informazioni Nascoste -->
        <div 
            class="hidden-info"
            v-show="showHiddenInfo"
        >
            <!-- Bandierina -->
            <div class="original-language">
                <img :src="changeFlagUrl(posterSerieTv)" :alt="posterSerieTv.original_language">
            </div>

            <!-- stelline con voto -->
            <div class="vote-avarage">
                <div v-for="star in 5">
                    <i v-if="star <= Math.round(posterSerieTv.vote_average / 2)" class="fa-solid fa-star"></i>
                    <i v-else class="fa-regular fa-star"></i>
                </div>
            </div>

            <!-- generi serie TV  -->
            <div class="genres">
                <div class="genre" v-for="genre in store.genreTvSeries">
                    <span v-if="posterSerieTv.genre_ids.includes(genre.id)"> 
                        {{ genre.name + " " }} 
                    </span>
                </div>
            </div>

            <!-- Titolo -->
            <div class="name-serie-tv"><strong>Title:</strong> <span>{{ posterSerieTv.name }}</span></div>

            <!-- Descrizione -->
            <div class="description" v-if="!posterSerieTv.overview == ''">
                <strong>Description:</strong> <span>{{ posterSerieTv.overview }}</span>
            </div>

            <!-- Cast -->
            <div v-if="store.castSerieTv.length > 0">
                <div v-for="serieData in store.castSerieTv">
                    <div v-if="serieData.id === posterSerieTv.id" class="cast">
                        <span v-for="actor in serieData.cast" style="color: black;">{{ "Main Actors: " + actor + " " }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>




</template>

<style lang="scss">
@use '../styles/variables.scss' as *;

.card {

    width: calc(100% / 5 - $cardOrizontalGap / 5 * 4);
    height: 360px;


    .poster-container {

        height: 100%;

        &:hover {
            filter: grayscale(1.3);
        }

        img {
            display: block;
            height: 100%;

        }

        .replace-for-missing-poster {
            display: flex;
            justify-content: center;
            align-items: center;

            height: 100%;

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
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        padding: 15px;

        height: 100%;

        overflow-y: auto;

        background: linear-gradient(to top, $primary-color, black,);

        strong {

            color: $primary_color;

        }

        .genres .genre {
            
            display: flex;
            flex-direction: column;
            align-items: center;

            span {
                font-size: 0.8em;
                margin-bottom: 2px;
                padding: 2px 4px;
                border-radius: 8px;
                color: $primary-color;
                background-color: black;
            }
            
        }
        .vote-avarage {
            display: flex;
            flex-direction: row;
            gap: 1px;
        }

    }


}


</style>