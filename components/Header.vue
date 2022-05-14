<script setup lang="ts">

</script>

<template>
  <div class="header">
    <h1>Andrè's CV</h1>
    <div>
      <NuxtLink to="/">
        Home
      </NuxtLink>
      <NuxtLink to="/projects">
        Projects
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.router-link-exact-active {
  color: #ffa500;
}
a {
  font-size: 1.5rem;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & :last-child {
    display: flex;
    gap: 1rem;
  }
}
</style>
