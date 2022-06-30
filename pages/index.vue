<script setup lang="ts">
const me = ref('/me.png');
</script>

<template>
  <div class="body">
    <Head>
      <Title>Home</Title>
    </Head>

    <div class="info">
      <h2>Who am I</h2>
      <p>My name is Andrè, i'm 24 years old</p>
      <img :src="me" class="myImage">
      <h2>About me</h2>
      <p>I have one year of education in IT development with training in a company.</p>
      <p> I've got expertise in software development, programming, and react.js, specializing in front-end. I like leadership positions, working in teams, but also alone, I am structured and goal-oriented, and otherwise a calm person.</p>
      <h2>My experience</h2>
      <p>I've worked as a Hardware repairer/maintainer and a System Admin, but most notably I have been working as a Software Engineer. (All the details are on my <a href="https://www.linkedin.com/in/andr%C3%A8-hagen-a0a821217/">LinkedIn</a>)</p>
      <p>On top of that I have many years of experience of working in teams but also by myself, often ending up in a leading/important role.</p>
      <h2>Education</h2>
      <p>My coding knowledge mostly comes from a coding course I took over the span of a year in Bergen called Kodehode, on top of a history of interest in coding and tech in general.</p>
      <p>I also have a formal education in Media, with a focus on Photography, from Nordahl Grieg Videregående.</p>
      <h2>And hobbies</h2>
      <p>My hobbies include gaming, coding, Dungeons & Dragons, and I also really like traveling to other countries when I can, mostly the UK.</p>
      <p>I also love learning new things in coding and tech 24/7 and do so in my free time with frameworks and languages.</p>
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
a {
  color: #ffa500;
}
.myImage {
  width: 200px;
  height: 200px;
  border-radius: 100%;
}
</style>
