<template>
  <div class="mp-results-containe px-0">
    <label class="mp-h4-700 c-red mx-2">Resultados</label>
    <div class="d-flex flex-row justify-content-start flex-wrap mp-results-coverts">
      <div class="cover-separator" v-for="song in this.songList" @click="onClickCover(song)">
        <MpCover :img-cover="song.album.cover_medium" :title-cover="song.title" :artist-cover="song.artist.name"/>
      </div>
      <div v-if="!this.songList">
        <h1>Not found</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/breakpoints";
.mp-results-containe{
  
  margin-top: 80px;
  .mp-results-coverts{
    max-height: 650px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .cover-separator{
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 25px;
  }
  @include mobile{
    margin-top: 30px;
    .cover-separator{
      padding-right: 0px;
      margin-bottom: 20px;
    }
  }
}
</style>

<script lang="js">
import MpCover from './mp-cover.vue';
import { mapGetters } from 'vuex'

export default{
  components: { MpCover },
  computed: {
    ...mapGetters({
      songList: 'music/getSongList'
    }),
  },
  methods:{
    onClickCover: function(song){
      this.$store.commit('music/updateCurrentSong', song);
    }
  },
}
</script>