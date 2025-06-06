<script setup lang="ts">
const gitUrl = 'https://github.com/AnarchyEcho';
</script>

<template>
  <div class="footer">
    <div class="links">
      <NuxtLink :to="gitUrl" target="_blank" no-rel>
        <Icon name="bi:github" mode="svg" />
      </NuxtLink>
      <NuxtLink href="https://www.linkedin.com/in/andr%C3%A8-hagen-a0a821217/" target="_blank" rel="noreferrer">
        <Icon name="bi:linkedin" mode="svg" />
      </NuxtLink>
    </div>
    <p class="copyright">
      &copy; Copyright 2021 - {{ new Date().getFullYear() }} <NuxtLink :href="gitUrl" target="_blank" rel="noreferrer">
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

.links>a {
  margin-top: 5px;
}

.copyright {
  width: 150px;
  padding: 10px 0;
  margin: 0;
}
</style>
