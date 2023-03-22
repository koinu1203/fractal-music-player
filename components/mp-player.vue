<template>
  <div class="mp-player-container d-flex flex-row align-items-center justify-content-between c-white" :class="{'hidden':!this.show}">
    <div class="music-info-container d-flex flex-row align-items-center justify-content-start">
      <img
        :src="this.song?.album?.cover_medium"
        width="100"
        height="100"
        alt="current song image"
      >
      <div class="music-data d-flex flex-column  ml-3">
        <label class="mb-2 mp-h6-700">{{ this.song?.title }}</label>
        <span class="mp-h7-700">{{ this.song?.artist?.name }} - {{ this.song?.album?.title }}</span>
      </div>
    </div>
    <div class="buttons-player-container d-flex flex-row align-items-center justify-content-between">
      <div class="backward-step-icon apr-3 d-flex justify-content-center">
        <font-awesome-icon
          :icon="['fas', 'backward-step']"
          class="icon-player"
          style="color: white; width: 21px; height: 21px;"
        />
      </div>
      <div class="play-icon apr-3 d-flex justify-content-center" @click="togglePlay">
        <font-awesome-icon
          :icon="['fas', playerIcon]"
          class="icon-player "
          style="color: white; width: 16px; height: 21px;"
        />
      </div>
      <div class="forward-step-icon apr-3 d-flex justify-content-center">
        <font-awesome-icon
          :icon="['fas', 'forward-step']"
          class="icon-player"
          style="color: white; width: 21px; height: 21px;"
        />
      </div>
      <audio :src="this.song?.preview" preload="auto" id="musicPlayer" autoplay @play="onStartMusic" @ended="onEndedSong"></audio>
    </div>
    <div class="opcions-player-container d-flex flex-row align-items-center pr-4">
      <input
        type="range"
        class="mr-5 volumen-range"
        min="0"
        max="100"
        @change="$event => setVolumen($event.target.value)"
      >
      <font-awesome-icon
        :icon="['fas', volumeIcon]"
        class="volumen-icon"
        style="color: white; height: 42px;"
      />
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/breakpoints";

.mp-player-container {
  transition: all 0.5s;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 100px;
  z-index: 20;
  background: #EB5757;
  &.hidden{
    transform: translateY(100px);
  }
  .music-data {
    justify-content: center;
    overflow: hidden;
    max-width: 400px;
    label{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        height: 20px;
      }
  }
  @include all-mobile{
    .music-data{
      max-width: 200px;
    }
  }
  @include mobile{
    .music-data{
      margin-left: 8px !important;
      overflow: hidden;
      text-overflow: clip;
      max-width: 120px;
      
    }
  }
  .buttons-player-container {
    position: absolute;
    left: 48%;
    width: 172px;

    .play-icon {
      width: 60px;
      height: 60px;
      background: rgba(#FF7676, 0.8);
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        background-color: #FF7676;
      }
    }

    .backward-step-icon,
    .forward-step-icon {
      width: 36px;
      height: 36px;
    }

    .icon-player {
      align-self: center;
    }
    @include all-mobile{
      left: 45%;
    }
    @include mobile{
      left: 57%;
      justify-content: center !important;
      .backward-step-icon{
        display: none !important;
      }
      .play-icon{
        margin-right: 20px;
      }
    }
  }
  .opcions-player-container {
    height: 100%;
    .volumen-range{
      position: absolute;
      right: 50px;
    }
    @include all-mobile{
      .volumen-icon{
        height: 20px !important;
      }
      .volumen-range{
        width: 60px;
        right: 20px;

      }
    }
    @include mobile{
      display: none !important;
    }
  }
}</style>
<script lang="js">
import { mapGetters } from 'vuex'

export default{
  computed: {
    ...mapGetters({
      song: 'music/getCurrentSong',
      show: 'music/getHasCurrentSong'
    }),
  },
  data(){
    return {
      playerIcon:'pause',
      volumeIcon:'volume-low'
    }
  },
  methods:{
    togglePlay(){
      const musicPlayer = document.getElementById('musicPlayer');
      if(musicPlayer.paused){
        musicPlayer.play();
        this.playerIcon='pause';
      }else{
        musicPlayer.pause();
        this.playerIcon='play';
      }
    },
    setVolumen(event){
      document.getElementById('musicPlayer').volume = event/100;
      if(event>50){
        this.volumeIcon = 'volume-high';
      }else if(event>25){
        this.volumeIcon = 'volume-low';
      }else if(event>0){
        this.volumeIcon = 'volume-off';
      }else{
        this.volumeIcon = 'volume-xmark';
      }
    },
    onEndedSong(event){
      this.playerIcon='play';
    },
    onStartMusic(event){
      this.playerIcon='pause';
    }
  },
  mounted(){
    const musicPlayer = document.getElementById('musicPlayer');
    musicPlayer.volume = 0.5;
  }
}
</script>