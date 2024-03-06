import { reactive } from 'vue'

export const store = reactive({

    // Testo cercato dall'utente nell'input
    searchedText: "",

    // Array dove salvare film cercati da mostrare in pagina
    movies: [],

    // Array dove salvare serieTV cercate da mostrare in pagina
    tvSeries: [],

});