import { reactive } from 'vue'

export const store = reactive({

    // Testo cercato dall'utente nell'input
    searchedText: "",

    // Array dove salvare film cercati da mostrare in pagina
    movies: [],

    // Array dove salvare tutti i generi dei film
    genreMovies: [],

    // Array dove salvare ID e primi 5 attori al click su una card Movie
    castMovie: [],

    // Array dove salvare serieTV cercate da mostrare in pagina
    tvSeries: [],

    // Array dove salvare tutti i generi dei film
    genreTvSeries: [],

    // Array dove salvare ID e primi 5 attori al click su una card Serie TV
    castSerieTv: [],

});