<script setup lang="ts">
const languages: Array<[name: string, level: string]> = [
  ['Norwegian', 'Native'],
  ['English', 'Fluent'],
]
enum Language {
  name,
  level
}
</script>

<template>
  <div style="max-width: 350px;">
    <h2 style="margin-bottom: 10px;">Languages</h2>
    <div v-for="lang in languages">
      <p><Fancy>{{ lang[Language.name] }}</Fancy> - {{ lang[Language.level] }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
h2 {
  color: #ffa500;
  margin: 0;
  padding: 0;
  text-decoration: underline;
}
p {
  text-align: left;
  margin: 0;
  margin-bottom: 5px;
  padding: 0;
}
</style>
