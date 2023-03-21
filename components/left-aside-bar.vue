<template>
  <div class="left-aside-bar-container bg-red-dark c-white">
    <img class="aside-bar-logo" width="250" height="59" src="~/static/img/foxbel-music.png" alt="FoxbelMusic Logo">
    <div class="left-aside-menu">
      <label class="mp-h4-700">Mi librería</label>
      <ul>
        <li><a>Recientes</a></li>
        <li><a>Artistas</a></li>
        <li><a>Álbums</a></li>
        <li><a>Canciones</a></li>
        <li><a>Estaciones</a></li>
      </ul>
    </div>
    <div class="left-aside-menu">
      <label class="mp-h4-700">Playlist</label>
      <ul>
        <li><a>Metal</a></li>
        <li><a>Para bailar</a></li>
        <li><a>Rock 90s</a></li>
        <li><a>Baladas</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.left-aside-bar-container{
  position: relative;
  height: 100vh;
  max-width: 330px;
  padding: 50px 40px 0px 40px;
  .aside-bar-logo{
    max-width: 250px;
  }
  .left-aside-menu{
    margin-top: 30px;
    .left-aside-title-list{
      margin-bottom: 4px;
    }
    ul{
      list-style: none;
      margin-left: 0;
	    padding-left: 0;
      li{
        margin-top: 8px;
        a{
          cursor: pointer;
        }
      }
      li:nth-child(1){
        margin-top: 0px;
      }
    }
  }
}


</style>