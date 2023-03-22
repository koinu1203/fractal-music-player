<template>
  <div class="mp-hero-container mt-5 d-flex flex-row align-items-center justify-content-start mx-2">
    <div class="img-container">
      <img :src="this.heroSong?.coverImg" width="250" height="250" alt="hero song image">
      <font-awesome-icon :icon="['fas', 'play']" style="color: #57e389;" class="play-icon"/>
    </div>
    <div class="hero-info-container c-white d-flex flex-column align-items-start justify-content-between">
      <div>
        <h4 class="mp-h4-700 mb-0">Adele 21</h4>
        <p class="mp-h6-400 mb-3">Lo menjor de <span class="c-red-dark mp-h8-400 ml-3"> seguidores</span> </p>
        <p class="mp-h7-400 mb-0">Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.8​ </p>
      </div>
      <div class="d-flex flex-row align-items-center">
        <button class="mp-btn mp-btn-primary mr-3">Reproducir</button>
        <button class="mp-btn mp-btn-line mr-3">Seguir</button>
        <font-awesome-icon :icon="['fas', 'ellipsis']" class="ellipsis-icon"/>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.mp-hero-container{
  width: 100%;
  height: 250px;
  background: linear-gradient(0deg, rgba(167, 0, 0, 0.5), rgba(167, 0, 0, 0.5));
  mix-blend-mode: normal;
  .hero-info-container{
    height: 100%;
    padding: 40px 21px 20px 30px;
    .ellipsis-icon{
      cursor: pointer;
    }
  }
}
.img-container{
  position: relative;
  min-width: 250px;
}
</style>
<script>
import { mapGetters } from 'vuex'
export default{
  computed: {
    ...mapGetters({
      heroSong: 'music/getHeroSong'
    }),
  },
  
}
</script>