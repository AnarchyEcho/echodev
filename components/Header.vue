<script setup lang="ts">

</script>

<template>
  <div class="header">
    <NuxtLink to="/">
      Home
    </NuxtLink>
    <NuxtLink to="/projects">
      Projects
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.router-link-exact-active {
  color: #ffa500;
}
a {
  font-size: 2rem;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
}
</style>
