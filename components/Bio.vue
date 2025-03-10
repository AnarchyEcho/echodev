<script setup lang="ts">
const me = ref('/me.png');
</script>

<template>
  <div class="bio">
    <p>
      I'm <Fancy>Andrè</Fancy>, <Fancy><Age /></Fancy>. A passionate fullstack software engineer from Norway, prepared to drive success in a fresh environment.
    </p>
    <NuxtImg class="myImage" alt="Circle shaped portrait of Andre, aka EchoDev." :src="me" />
    <p>
      Currently I'm attending <NuxtLink to="https://www.noroff.no/studier/fagskole/backend-utvikling-2-aarig" target="_blank">Noroff for Backend Development&#10548;</NuxtLink> via their online schooling.
    </p>
    <p>
      As for personal projects, the project I've learned the most from, and currently my largest scale personal project, is a discord bot by the name of <NuxtLink to="https://anna.echodev.sh">Anna&#10548;</NuxtLink>, I have it linked in the header, and it uses technologies such as <Fancy>Docker</Fancy> for production deployment, with <Fancy>SQLite</Fancy> as the database solution, and finally <Fancy>Nuxt</Fancy> for the dashboard, all programmed in <Fancy>Typescript</Fancy>.
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
