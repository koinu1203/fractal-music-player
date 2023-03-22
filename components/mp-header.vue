<template>
  <div class="mp-header-container d-flex justify-content-between align-items-center mx-2">
    <div class="mp-search-container d-flex justify-content-between align-items-center col-12">
      <input type="text" placeholder="Buscar" @keyup="$event=>onSearchTitle($event.target.value)" class="col-12 px-0">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="c-gray mp-icon-search" style="width: 18px; height: 18px;" />
    </div>
    <div class="mp-login d-flex justify-content-center align-items-center">
      <font-awesome-icon :icon="['fas', 'user']" class="c-red mr-2 mp-icon-user"/>
      <span>{{ this.currentUser?.name }}</span>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/breakpoints";
.mp-header-container{
  width: 100%;
  .mp-search-container{
    position: relative;
    border: 1px solid #828282;
    border-radius: 100px;
    height: fit-content;
    overflow: hidden;
    padding: 6px 35px 7px 16px;
    max-width: 440px;

    input{
      border: none;
      outline: none;
    }
    .mp-icon-search{
      position: absolute;
      right: 16px;
      cursor: pointer;
    }
    @include all-mobile{
      width: 20vw;
      max-width: 300px;

    }
    @include mobile{
      max-width: 200px;
    }
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
import { mapGetters } from 'vuex';

export default{
  computed: {
    ...mapGetters({
      currentUser: 'user/getCurrentUser'
    }),
  },
  methods:{
    onSearchTitle(event){
      if(event.length>0){
        this.$store.dispatch('music/findSongsByTitle',event);
      }else{
        this.$store.dispatch('music/findSongsByTitle','a');
      }
    }
  },
  mounted() {
    this.$store.dispatch('music/findSongsByTitle','a');
  },
}

</script>