<template>
  <div class="left-aside-bar-container bg-red-dark c-white" :class="{'hidden':activeLeftAside}">
    <img
      class="aside-bar-logo"
      width="250"
      height="59"
      src="~/static/img/foxbel-music.png"
      alt="FoxbelMusic Logo"
    >
    <img
      class="aside-bar-logo-mobile"
      width="80"
      height="60"
      src="~/static/img/foxbel-music-icon@2x.png"
      alt="FoxbelMusic Logo"
      @click="$event => {activeLeftAside = !activeLeftAside}"
    >
    <div class="left-aside-menu">
      <label class="mp-h4-700">Mi librería</label>
      <ul>
        <li
          v-for="item in this.menuLibrary"
          :class="{ 'activeTab': isActive(item.id) }"
          @click="onSelectTab(item.id)"
        ><a>{{ item.name }}</a></li>
      </ul>
    </div>
    <div class="left-aside-menu">
      <label class="mp-h4-700">Playlist</label>
      <ul>
        <li
          v-for="item in this.menuPlaylist"
          :class="{ 'activeTab': isActive(item.id) }"
          @click="onSelectTab(item.id)"
        ><a>{{ item.name }}</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/breakpoints";
@import "../assets/scss/color";

.left-aside-bar-container {
  position: relative;
  height: 100vh;
  max-width: 330px;
  padding: 50px 40px 0px 40px;
  z-index: 10;
  transition: all 0.5s;
  .aside-bar-logo {
    max-width: 250px;
  }

  .aside-bar-logo-mobile {
    transition: all 0.5s;
    align-self: center;
    display: none;
  }

  @include all-mobile() {
    padding: 50px 15px 0px 15px;
    position: absolute;
    display: flex;
    flex-direction: column;
    min-width: 200px;
    left: 0px;
    .aside-bar-logo {
      display: none;
    }
    .aside-bar-logo-mobile {
      display: block;
    }
    &.hidden{
      transition: all 0.5s;

      left: -190px;
      .aside-bar-logo-mobile {
        position: fixed;
        left: -20px;
        padding-top: 5px;
        background-color: color('red-dark');
        border-radius: 0px 100px 100px 0px;
      }
    }
    
  }

  .left-aside-menu {
    margin-top: 30px;

    .left-aside-title-list {
      margin-bottom: 4px;
    }

    ul {
      list-style: none;
      margin-left: 0;
      padding-left: 0;

      li {
        margin-top: 8px;
        display: flex;
        align-items: center;

        a {
          cursor: pointer;
        }

        &::before {
          content: ' ';
          transition: all 0.5s;
          height: 0px;
        }

        &.activeTab::before,
        &:hover::before {
          content: ' ';
          position: absolute;
          left: 0px;
          background-color: #E86060;
          width: 5px;
          height: 20px;
        }
      }

      li:nth-child(1) {
        margin-top: 0px;
      }
    }
  }
}
</style>
<script lang="js">
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      activeTab: 'menu/getActiveTab',
      menuLibrary: 'menu/getMenuLibrary',
      menuPlaylist: 'menu/getMenuPlaylist'
    }),
  },
  methods: {
    isActive(id) {
      return this.activeTab === id;
    },
    onSelectTab(id) {
      this.$store.commit('menu/updateActiveTab', id);
    }
  },
  data(){
    return {
      activeLeftAside:true,
    }
  }
}
</script>