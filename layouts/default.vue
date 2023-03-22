<template>
  <div class="page">
    <LeftAsideBar/>
    <div class="container mp-container">
      <MpHeader/>
      <Nuxt />
    </div>
    <MpPlayer/>
  </div>

</template>
<script lang="js">
import LeftAsideBar from '~/components/left-aside-bar.vue';
import MpHeader from '~/components/mp-header.vue';
import MpPlayer from '~/components/mp-player.vue';

export default{
  components: { MpHeader, LeftAsideBar, MpPlayer }
}

</script>