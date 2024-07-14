<script setup lang="ts">
const me = ref('/me.png');
</script>

<template>
  <div class="body">
    <Head>
      <Title>EchoDev</Title>
    </Head>

    <div class="info">
      <div class="wrapper">
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
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  margin-left: 10rem;
  margin-right: 10rem;
  text-align: center;
  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
h2 {
  color: #ffa500;
}
a {
  color: #ffa500;
}
.info {
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
}
.myImage {
  width: 200px;
  height: 200px;
  border-radius: 100%;
  margin: 1rem 0;
}
.wrapper {
  max-width: 65%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
}
.wrapper > p {
  text-align: left;
}
</style>
