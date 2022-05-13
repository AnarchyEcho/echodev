<script setup lang="ts">
const projects: any[] = await $fetch('https://api.github.com/users/KodeAndre/repos');
</script>

<template>
  <div>
    <Head>
      <Title>My Projects</Title>
    </Head>

    <h2>Projects</h2>
    <div class="projectsList">
      <span v-for="project in projects" :key="project.id" class="project">
        <h4>{{ project.name }}</h4>
        <a v-if="project.homepage" :href="project.homepage" target="_blank">{{ project.homepage }}</a>
        <p v-else class="noSite">Doesn't or can't have a live website</p>
        <p>{{ project.description }}</p>
        <span>Github link:
          <a :href="project.html_url" target="_blank"><font-awesome-icon icon="fa-brands fa-github" /></a>
        </span>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projectsList {
  display: grid;
  gap: 1rem;
  @media (min-width: 768px) {
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
}
  @media (max-width: 768px) {
  grid-template-columns: repeat(1fr);
  }
}
.project {
  background-color: #252525;
  max-width: 70%;
}
.noSite {
  color: #808080;
}
a {
  word-break: break-word;
  color: #0094e3;
  font-weight: bold;
}
</style>
