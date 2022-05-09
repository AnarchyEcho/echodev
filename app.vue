<script setup lang="ts">
  const route = useRoute()
  useHead({
    meta: [{name: 'og:title', content: `${route.meta.title}`}]
  })
</script>

<template>
  <Header />
  <NuxtPage />
</template>
