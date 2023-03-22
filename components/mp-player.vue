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
        />
      </div>
      <div class="play-icon apr-3 d-flex justify-content-center" @click="togglePlay">
        <font-awesome-icon
          :icon="['fas', playerIcon]"
          class="icon-player "
        />
      </div>
      <div class="forward-step-icon apr-3 d-flex justify-content-center">
        <font-awesome-icon
          :icon="['fas', 'forward-step']"
          class="icon-player"
        />
      </div>
      <audio :src="this.song?.preview" preload="auto" id="musicPlayer" autoplay @play="onStartMusic" @ended="onEndedSong"></audio>
    </div>
    <div class="opcions-player-container d-flex flex-row align-items-center pr-5">
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
      />
    </div>
  </div>
</template>
<style lang="scss">
.mp-player-container {
  transition: all 0.5s;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 100px;
  z-index: 4;
  background: #EB5757;
  &.hidden{
    transform: translateY(100px);
  }
  .music-data {
    justify-content: center;
  }

  .buttons-player-container {
    position: absolute;
    left: 50%;
    width: 172px;

    svg {
      transform: scale(1.5);
    }

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
  }

  .opcions-player-container {
    height: 100%;
    .volumen-range{
      position: absolute;
      right: 50px;
    }
    .volumen-icon {
      transform: scale(2);
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