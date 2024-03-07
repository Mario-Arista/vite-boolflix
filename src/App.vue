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

      axios.get('https://api.themoviedb.org/3/search/movie?api_key=d73dfba09f18e671d0c3d7d2b090ca8f&query=' + this.store.searchedText) 
        .then(res => {
          
          this.store.movies = res.data.results;
      });

    }

  },

}
</script>

<template>


  <AppHeader></AppHeader>
  <AppMain :creatingCards="filterWithApi()"></AppMain>


</template>

<style lang="scss">

</style>
