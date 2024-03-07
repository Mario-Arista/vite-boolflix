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

      // metodo per riempire l'array delle serie TV nello store in base alla ricerca
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=d73dfba09f18e671d0c3d7d2b090ca8f&query=` + this.store.searchedText.trim().split(' ').join('+'))
        .then(result => {
          this.store.tvSeries = result.data.results;
        
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

header {
  width: 100%;
  height: 100px;
  
  background: black;
  position: fixed;
  top: 0px;
  left: 0px;

}
</style>
