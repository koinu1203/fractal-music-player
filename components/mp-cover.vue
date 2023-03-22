<template>
  <div class="mp-cover-container d-flex flex-column">
    <div class="img-cover-container">
      <img
        src="https://e-cdns-images.dzcdn.net/images/artist/e5fc443d2abc03b487234ba4de65a001/250x250-000000-80-0-0.jpg"
        width="160"
        height="160"
        alt="cover img"
      >
      <font-awesome-icon
        :icon="['fas', 'play']"
        style="color: white;"
        class="play-icon"
      />
      <font-awesome-icon
        :icon="['fas', 'ellipsis-vertical']"
        style="color: white;"
        width="4"
        height="18"
        class="ellipsis-vertical-icon"
      />
    </div>
    <label class="mp-h6-700 c-gray-dark mt-2 mb-0">21</label>
    <span class="mp-h7-400 c-gray">Adele</span>
  </div>
</template>
<style lang="scss">
.mp-cover-container {
  max-width: 160px;
  max-height: 206px;
  text-align: start;
  &:hover{
    opacity: 0.9;
  }
  .img-cover-container {
    cursor: pointer;
    position: relative;
    max-width: 160px;
    max-height: 160px;
    .play-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: scale(3);
    }
    .ellipsis-vertical-icon{
      position: absolute;
      top: 8px;
      right: 8px;
    }
  }
  label{
    line-height: 17.5px;
  }
  span{
    line-height: 15px;
  }
}
</style>