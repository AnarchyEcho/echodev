<script setup lang="ts">
const me = ref('/me.png');
</script>

<template>
  <div class="bio">
    <p>
      I'm <Fancy>Andrè</Fancy>, <Fancy><Age /></Fancy>. An hardworking fullstack software engineer from Norway, looking for the chance to get hired full time.
    </p>
    <NuxtImg class="myImage" :src="me" />
    <p>
      Lately I've been working on getting my experience up with backend projects, as I feel that I've got the frontend experience needed to make just about anything.
    </p>
    <p>
      The biggest project being a discord bot, <NuxtLink to="https://anna.echodev.sh">Anna&#10548;</NuxtLink>, I have linked in the header, using technologies such as <Fancy>Docker</Fancy> for production deployment, <Fancy>Typescript</Fancy> as the language, <Fancy>SQLite</Fancy> for the database, and finally <Fancy>Nuxt</Fancy> for the dashboard. I've been proudly working on <NuxtLink to="https://anna.echodev.sh">Anna&#10548;</NuxtLink> for the greater half of a year.
    </p>
    <br />
    <p>
      <Fancy>Programming takes up a lot of my personal interest and time</Fancy>, alongside reading, playing video games, and socialising with my friends. I would describe myself as being a patient and persistent type of person, working on a task until completion, much to the dismay of my attention to things like eating and taking breaks.
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
