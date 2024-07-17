<script setup lang="ts">
const me = ref('/me.png');
</script>

<template>
  <div>
    <div>
      I'm <Fancy>Andrè</Fancy>, <Fancy><Age /></Fancy>. An hardworking fullstack software engineer from Norway, looking for the chance to get hired full time.
    </div>
    <NuxtImg class="myImage" :src="me" />
    <div>
      Lately I've been working on getting my experience up with backend projects, as I feel that I've got the frontend experience needed to make just about anything.
    </div>
    <div>
      The biggest project being a discord bot, Anna, I have linked in the header, using technologies such as <Fancy>Docker</Fancy> for production deployment, <Fancy>Typescript</Fancy> as the language, <Fancy>SQLite</Fancy> for the database, and finally <Fancy>Nuxt</Fancy> for the dashboard. I've been proudly working on Anna for the greater half of a year.
    </div>
    <br />
    <div>
      <Fancy>Programming takes up a lot of my personal interest and time</Fancy>, alongside reading, playing video games, and socialising with my friends. I pride myself on being a patient and persistent type of person, working on a task until completion, much to the dismay of my attention to things like eating and taking breaks.
    </div>
  </div>
</template>

<style scoped lang="scss">
.myImage {
  width: 200px;
  height: 200px;
  border-radius: 100%;
  margin: 1rem 0;
}
</style>
