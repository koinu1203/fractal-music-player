<template>
  <div class="mp-results-containe px-0">
    <label class="mp-h4-700 c-red mx-2">Resultados</label>
    <div class="d-flex flex-row justify-content-start flex-wrap">
      <div class="cover-separator">
        <MpCover/>
      </div>
      <div class="cover-separator">
        <MpCover/>
      </div>
      <div class="cover-separator">
        <MpCover/>
      </div>
      <div class="cover-separator">
        <MpCover/>
      </div>
      <div class="cover-separator">
        <MpCover/>
      </div>
      <div class="cover-separator">
        <MpCover/>
      </div>
      <div class="cover-separator">
        <MpCover/>
      </div>
      <div class="cover-separator">
        <MpCover/>
      </div>
      <div class="cover-separator">
        <MpCover/>
      </div>
      <div class="cover-separator">
        <MpCover/>
      </div>
      <div class="cover-separator">
        <MpCover/>
      </div>
      <div class="cover-separator">
        <MpCover/>
      </div>
      <div class="cover-separator">
        <MpCover/>
      </div>
      <div class="cover-separator">
        <MpCover/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.mp-results-containe{
  margin-top: 80px;
  .cover-separator{
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 25px;
  }
}
</style>

<script lang="js">
import { MusicService } from '~/services/music.service';
import MpCover from './mp-cover.vue';

export default{
    mounted() {
        const musicService = new MusicService(this.$store.state.auth.accessToken);
        musicService.getRandomMusic().then((val) => {
            console.log(val);
        });
    },
    components: { MpCover }
}
</script>