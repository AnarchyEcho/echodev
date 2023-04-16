<script async setup lang="ts">
// eslint-disable-next-line import/named
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(faGithub);
const { pending, data: projects }: any = await useFetch('https://dotrest.azurewebsites.net/api/Projects', { lazy: true });
</script>

<template>
  <div>
    <Head>
      <Title>{{ $t("projectsHead") }}</Title>
    </Head>

    <ToTop />
    <div v-if="pending" class="pending">
      {{ $t("loadingProjects") }}
    </div>
    <div v-else class="projectsList">
      <span v-for="project in projects" :key="project.id" class="project">
        <h3 class="title">{{ project.name }}</h3>
        <a v-if="project.homepage" :href="project.homepage" target="_blank">{{ project.homepage }}</a>
        <p v-else class="noSite">{{ $t("websiteMissing") }}</p>
        <p>{{ project.description }}</p>
        <p>{{ $t("mostUsedLang") }}{{ project.language }}</p>
        <a :href="project.html_url" target="_blank"><FontAwesomeIcon :icon="faGithub" class="icons" /></a>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projectsList {
  display: grid;
  justify-items: center;
  gap: 1rem;
  margin-left: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1fr);
  }
}
.project {
  background-color: #282828;
  width: 60%;
  padding: 0rem 1rem 1rem;
  border-radius: 10px;
}
.title {
  color: #ffa500;
}
.noSite {
  color: #808080;
}
a {
  word-break: break-word;
  color: #0094e3;
  font-weight: bold;
}
.icons {
  font-size: 2rem;
  color: #ffa500;
}
.pending {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}
.pending:after {
  content: '.';
  font-size: 1.8rem;
  animation: dots 1s steps(5, end) infinite;
}
@keyframes dots {
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  40% {
    color: white;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  60% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 rgba(0,0,0,0);}
  80%, 100% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 white;
    }
}
</style>
