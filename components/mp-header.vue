<template>
  <div class="mp-header-container d-flex justify-content-between align-items-center mx-2">
    <div class="mp-search-container d-flex justify-content-between align-items-center col-12">
      <input type="text" placeholder="Buscar" class="col-12 px-0">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="c-gray mp-icon-search" />
    </div>
    <div class="mp-login d-flex justify-content-center align-items-center">
      <font-awesome-icon :icon="['fas', 'user']" class="c-red mr-2 mp-icon-user"/>
      <span>{{ this.currentUser?.name }}</span>
    </div>
  </div>
</template>
<style lang="scss">
.mp-header-container{
  width: 100%;
  .mp-search-container{
    position: relative;
    border: 1px solid #828282;
    border-radius: 100px;
    height: fit-content;
    overflow: hidden;
    padding: 6px 35px 7px 16px;
    input{
      border: none;
      outline: none;
    }
    .mp-icon-search{
      position: absolute;
      right: 16px;
      cursor: pointer;
    }
    max-width: 524px;
  }
  .mp-login{
    .mp-icon-user{
      width: 13px;
      height: 14px;
    }
  }
}
</style>
<script lang="js">
import { mapGetters } from 'vuex'
import { MusicService } from '~/services/music.service';

export default{
  computed: {
    ...mapGetters({
      currentUser: 'user/getCurrentUser'
    }),
  },
  mounted() {
      const musicService = new MusicService(this.$store.state.auth.accessToken);
      musicService.getRandomMusic()
      .then( el => el.data )
      .then((val) => {
        this.$store.commit('music/updateSongList',val.data);
        this.$store.commit('music/updateHeroSong',val.data[0]);
      });
      console.log(this.$store.state);
  },
}

</script>