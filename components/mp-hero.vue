<template>
  <div class="mp-hero-container mt-5 d-flex flex-row align-items-center justify-content-start mx-2">
    <div class="img-container" @click="playHeroSong">
      <img :src="this.heroSong?.album?.cover_xl" width="250" height="250" alt="hero song image">
      <font-awesome-icon :icon="['fas', 'play']" style="color: white;" class="play-icon-hero"/>
    </div>
    <div class="hero-info-container c-white d-flex flex-column align-items-start justify-content-between">
      <div>
        <h4 class="mp-h4-700 mb-0">{{this.heroSong?.album?.title}}</h4>
        <p class="mp-h6-400 mb-3">Lo menjor de {{ this.heroSong?.artist?.name }}<span class="c-red-dark mp-h8-400 ml-3">{{ this.heroArtist?.nb_fan }} seguidores</span> </p>
        <p class="mp-h7-400 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt, arcu a suscipit cursus, diam neque ultricies nibh, viverra ultricies quam nisl quis augue. Nullam efficitur lorem et nisi porttitor, id convallis nunc rutrum. Donec scelerisque, eros ut commodo elementum, dui urna cursus dui, sed efficitur diam justo ut mi. Suspendisse aliquet metus sit amet augue ultrices laoreet. Nulla nunc lectus, dapibus nec interdum a, porttitor nec turpis. Suspendisse fringilla ligula nec sapien consequat, et scelerisque leo dapibus. Sed condimentum nunc ut lorem tempor, vel laoreet metus tempus. Curabitur ultrices pulvinar justo, auctor dictum mi euismod vel. Integer ac lorem at turpis imperdiet aliquam eget eget odio. Morbi a gravida ligula. </p>
      </div>
      <div class="d-flex flex-row align-items-center">
        <button class="mp-btn mp-btn-primary mr-3" @click="playHeroSong">Reproducir</button>
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
  cursor: pointer;
  position: relative;
  min-width: 250px;
  .play-icon-hero{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(4);
  }
}
</style>
<script>
import { mapGetters } from 'vuex'
export default{
  computed: {
    ...mapGetters({
      heroSong: 'music/getHeroSong',
      heroArtist: 'music/getHeroArtist'
    }),
  },
  methods:{
    playHeroSong(){
      this.$store.commit('music/updateCurrentSong',this.heroSong);
    }
  }
}
</script>