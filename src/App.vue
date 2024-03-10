<script>
import axios from 'axios';
import {store} from './store';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  data() {
    return {

      store,
    }
  },

  components: {
    AppHeader,
    AppMain,

  },

  methods: {

    
    filterWithApi() {
      // metodo per riempire l'array movies nello store in base alla ricerca

      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d73dfba09f18e671d0c3d7d2b090ca8f&query=` + this.store.searchedText.trim().split(' ').join('+'))
        .then(res => {
          this.store.movies = res.data.results;
        })
        .catch(error => {
          console.error('Errore nel recupero del film:', error);
      });

      // metodo per riempire l'array movies nello store in base alla ricerca

      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=d73dfba09f18e671d0c3d7d2b090ca8f&query=` + this.store.searchedText.trim().split(' ').join('+'))
        .then(res => {
          this.store.tvSeries = res.data.results;
        })
        .catch(error => {
          console.error('Errore nel recupero del film:', error);
      });

      // metodo per riempire l'array con i generi dei film

      axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=d73dfba09f18e671d0c3d7d2b090ca8f')
        .then(res => {
          this.store.genreMovies = res.data.genres;
        })
        .catch(error => {
          console.error('Errore nel recupero del genere del film:', error);
      });

      // metodo per riempire l'array con i generi delle serie TV
      
      axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=d73dfba09f18e671d0c3d7d2b090ca8f`)
        .then(res => {
          this.store.genreTvSeries = res.data.genres;
        
        })
        .catch(error => {
          console.error('Errore nel recupero delle Serie Tv:', error);
      });
    },
  },

}
</script>

<template>

  <header>
    <AppHeader @performSearch="filterWithApi()"></AppHeader>
  </header>
  

  <AppMain></AppMain>


</template>

<style lang="scss">

@use './styles/variables.scss' as *;

header {
  width: 100%;
  height: 100px;
  
  background-color: black;
  position: fixed;
  top: 0px;
  left: 0px;

}

@media screen and (max-width: 1200px) {

  .card {

    width: calc(100% / 4 - $cardOrizontalGap / 4 * 3);
    height: 380px;

    .poster-container img {
      width: 100%;
      height: auto;
      object-fit: cover;
      object-position: bottom;
    }
  }

}

@media screen and (max-width: 992px) {

  header {
    height: 75px;
  }

  main {
    top: 75px;
    height: calc(100vh - 75px);

  }

  .card {
    width: calc(100% / 3 - $cardOrizontalGap / 3 * 2);
    height: 430px;
  
  }

  .container .row #logo-nav img {
    width: 80px;
  } 

  .container .row #logo-nav ul,
  .container .row #filter-boolflix .img-cont {
    display: none;
  }

}

@media screen and (max-width: 740px) {
  .card {

    width: calc(100% / 2 - $cardOrizontalGap / 2 * 1);
    height: 725px;
  }
}

@media screen and (max-width: 576px) {
  .card {

    width: 100%;
    height: 650px;
  }

}


</style>
