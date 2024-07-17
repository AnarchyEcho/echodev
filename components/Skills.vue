<script setup lang="ts">
const skills: Array<[string, number]> = [
  ['Git', 8],
  ['Typescript/Javascript', 8],
  ['C#', 6],
  ['CSS/SCSS', 7],
  ['Nuxt', 6],
]
</script>

<template>
  <div>
    <h2>List of technical skills</h2>
    try a table instead
    <p style="color: gray;">Name: experience</p>
    <div>
    </div>
    <div v-for="skill in skills">
      <p><Fancy>{{ skill[0] }}</Fancy>: {{ skill[1] }}/10</p>
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
a {
  color: #ffa500;
}
</style>
