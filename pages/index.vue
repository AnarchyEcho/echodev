<script setup lang="ts">
const me = ref('/me.png');
</script>

<template>
  <div class="body">
    <Head>
      <Title>Home</Title>
    </Head>

    <div>
      <h2>Who am I</h2>
      <p>My name is Andrè, i'm 24 years old</p>
      <img :src="me" class="myImage">
      <h2>About me</h2>
      <p>I love learning new things in coding and tech 24/7 and do so in my free time with frameworks and languages so I have as much experience and knowledge as possible, since I like coding that much.</p>
      <p>My hobbies include gaming, coding, Dungeons & Dragons, and I also really like traveling to other countries when I can, mostly the UK.</p>
      <h2>My experience</h2>
      <p>I've worked as a Hardware repairer/maintainer and a System Admin, but most notably I have been and am working as a Software Engineer. (All the details are on my LinkedIn in the footer down below)</p>
      <p>On top of that I have many years of experience of working in teams but also by myself, often ending up in a leading/important role.</p>
      <h2>My education</h2>
      <p>I have a formal education in Media, with a focus on Photography, from Nordahl Grieg Videregående.</p>
      <p>Most of my coding knowledge comes from a history of interest in coding and tech in general, but mostly from a coding course I took over the span of a year in Bergen called Kodehode.</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  margin-left: 1rem;
  text-align: center;
    @media (max-width: 768px) {
    text-align: left;
  }
}
h2 {
  color: #ffa500;
}
.myImage {
  width: 200px;
  height: 200px;
  border-radius: 100%;
}
</style>
