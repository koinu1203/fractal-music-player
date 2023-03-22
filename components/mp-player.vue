<template>
  <div class="mp-player-container d-flex flex-row align-items-center justify-content-between c-white" :class="{'hidden':true}">
    <div class="music-info-container d-flex flex-row align-items-center justify-content-start">
      <img
        src="https://e-cdns-images.dzcdn.net/images/artist/55b503a64bfd5262675a2a87730df068/250x250-000000-80-0-0.jpg"
        width="100"
        height="100"
        alt="current song image"
      >
      <div class="music-data d-flex flex-column  ml-3">
        <label class="mb-2 mp-h6-700">Canción</label>
        <span class="mp-h7-700">Artista - Álbum</span>
      </div>
    </div>
    <div class="buttons-player-container d-flex flex-row align-items-center justify-content-between">
      <div class="backward-step-icon apr-3 d-flex justify-content-center">
        <font-awesome-icon
          :icon="['fas', 'backward-step']"
          class="icon-player"
        />
      </div>
      <div class="play-icon apr-3 d-flex justify-content-center">
        <font-awesome-icon
          :icon="['fas', 'play']"
          class="icon-player "
        />
      </div>
      <div class="forward-step-icon apr-3 d-flex justify-content-center">
        <font-awesome-icon
          :icon="['fas', 'forward-step']"
          class="icon-player"
        />
      </div>
    </div>
    <div class="opcions-player-container d-flex flex-row align-items-center pr-5">
      <input
        type="range"
        class="mr-5 volumen-range"
      >
      <font-awesome-icon
        :icon="['fas', 'volume-off']"
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
    .volumen-icon {
      transform: scale(2);
    }
  }
}</style>