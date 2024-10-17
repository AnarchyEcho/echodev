<script setup lang="ts">
const skills: Array<[name: string, experience: number]> = [
  ['Git', 8],
  ['Typescript/Javascript', 8],
  ['C#', 6],
  ['Python', 6]
  ['Scala', 4],
  ['Zig', 4],
  ['Shell/Bash', 7],
  ['SQL/SQLite', 7],
  ['Bun/Node', 8],
  ['Docker', 5],
  ['Jenkins', 5],
  ['Jira/Teams/Slack', 7],
  ['Vue/Nuxt', 7],
  ['React/Next/Gatsby', 6],
  ['CSS/SCSS', 7],
  ['Linux/Windows', 9],
]
</script>

<template>
  <div>
    <h2>List of technical skills</h2>
    <p style="color: gray; margin: 0 0 10px; text-align: center;">Name: experience</p>

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
.professional {
  margin: 0;
  margin-top: -15px;
  padding: 0;
}
p {
  text-align: left;
  margin: 0;
  margin-bottom: 5px;
  padding: 0;
}
</style>
