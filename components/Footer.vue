<script setup lang="ts">
// eslint-disable-next-line import/named
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
const Envelope: any = faEnvelope;
library.add(faGithub, faLinkedin, Envelope);
const gitUrl = 'https://github.com/AnarchyEcho';
</script>

<template>
  <div class="footer">
    <div class="links">
      <NuxtLink :to="gitUrl" target="_blank" no-rel>
        <FontAwesomeIcon :icon="faGithub" />
      </NuxtLink>
      <NuxtLink href="https://www.linkedin.com/in/andr%C3%A8-hagen-a0a821217/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon :icon="faLinkedin" />
      </NuxtLink>
      <NuxtLink href="mailto:anarchytrex@hotmail.com">
        <FontAwesomeIcon :icon="Envelope" />
      </NuxtLink>
    </div>
    <Locale />
    <p style="width: 150px;">
      &copy; {{ `Copyright 2021 - ${new Date().getFullYear()}` }} <NuxtLink :href="gitUrl" target="_blank" rel="noreferrer">
        Andrè Hagen
      </NuxtLink>
    </p>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background-color: #252525;
  padding: 0.1rem 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 2rem;
}
a {
  color: #ffa500;
}
</style>
