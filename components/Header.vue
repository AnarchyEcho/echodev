<script setup lang="ts">

</script>

<template>
  <div class="header">
    <NuxtLink to="/">
      {{ $t('home') }}
    </NuxtLink>
    <NuxtLink to="/projects">
      {{ $t('projects') }}
    </NuxtLink>
    <NuxtLink to="https://anna.echodev.sh">
      Anna
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.router-link-exact-active {
  color: #ffa500;
  background-color: #303030;
  border-radius: 10px;
}
a {
  font-size: 2rem;
  padding: 0.5rem;
  color: #f5f5f5;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
}
</style>
