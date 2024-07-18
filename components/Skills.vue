<script setup lang="ts">
const skills: Array<[name: string, experience: number, professional?: boolean]> = [
  ['Git', 8, true],
  ['Typescript/Javascript', 8, true],
  ['C#', 6],
  ['Shell/Bash', 7, true],
  ['SQL/SQLite', 7],
  ['Bun/Node', 8, true],
  ['Docker', 5, true],
  ['Vue/Nuxt', 7],
  ['React/Next/Gatsby', 6, true],
  ['CSS/SCSS', 7, true],
  ['Linux/Windows', 9, true],
]
</script>

<template>
  <div>
    <h2>List of technical skills</h2>
    <p style="color: gray; margin: 0;">Name: experience</p>

    <div v-for="skill in skills">
      <p><Fancy>{{ skill[0] }}</Fancy>: {{ skill[1] }}/10</p>
      <p v-if="skill[2]" class="professional">Used professionally? Yes.</p>
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
.professional {
  margin: 0;
  margin-top: -15px;
  padding: 0;
}
</style>
