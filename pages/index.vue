<template>
  <div>
    <MpHero/>
    <MpResults/>
  </div>
</template>

<script>
import MpHero from '~/components/mp-hero.vue';
import MpResults from '~/components/mp-results.vue';

export default {
    name: "IndexPage",
    middleware: ["mp-auth"],
    components: { MpHero, MpResults }
}

</script>
