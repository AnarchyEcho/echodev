<script setup lang="ts">
const me = ref('/me.png');
</script>

<template>
  <div class="bio">
    <p>
      I'm <Fancy>Andrè</Fancy>, <Fancy><Age /></Fancy>. A passionate fullstack software engineer from Norway, prepared to drive success in a fresh environment.
    </p>
    <NuxtImg class="myImage" :src="me" />
    <p>
      Lately I've been working on upgrading my expertise in backend with <NuxtLink to="https://www.boot.dev/" target="_blank">Boot.Dev&#10548;</NuxtLink> and <NuxtLink to="https://www.noroff.no/studier/fagskole/backend-utvikling-2-aarig" target="_blank">Noroff&#10548;</NuxtLink>, as I feel that I've got the frontend expertise needed to make just about anything.
    </p>
    <p>
      The biggest project being a discord bot, <NuxtLink to="https://anna.echodev.sh">Anna&#10548;</NuxtLink>, I have linked in the header, using technologies such as <Fancy>Docker</Fancy> for production deployment, <Fancy>Typescript</Fancy> as the language, <Fancy>SQLite</Fancy> for the database, and finally <Fancy>Nuxt</Fancy> for the dashboard. I've been proudly working on <NuxtLink to="https://anna.echodev.sh">Anna&#10548;</NuxtLink> for about a year.
    </p>
    <br />
    <p>
      <Fancy>Programming takes up a lot of my personal interest and time</Fancy>, alongside reading, playing video games, and socialising with my friends. I would describe myself as being a patient and persistent type of person, working on a task until completion, sometimes to a fault.
    </p>
  </div>
</template>

<style scoped lang="scss">
.myImage {
  width: 200px;
  height: 200px;
  border-radius: 100%;
  margin: 1rem 0;
}
p {
  text-align: left;
  margin: 0;
  padding: 0;
}
</style>
