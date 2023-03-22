
import MpPlayer from '~/components/mp-player.vue';


import LeftAsideBar from '~/components/left-aside-bar.vue';

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
