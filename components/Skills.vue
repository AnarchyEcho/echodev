<script setup lang="ts">
const skills: Array<[name: string, experience: number]> = [
  ['Typescript/Javascript', 9],
  ['Python', 6],
  ['C#', 5],
  ['C/Zig', 5],
  ['Shell/Bash', 7],
  ['SQL/SQLite', 7],
  ['Git', 8],
  ['Bun/Node', 8],
  ['Docker', 5],
  ['Vue/Nuxt', 7],
  ['React/Next/Native', 6],
  ['Angular/AngularJS', 4],
  ['Linux/Windows', 10],
  ['Jira/Teams/Slack', 8],
];
enum Skill {
  name,
  experience
}
</script>

<template>
  <div>
    <h2>List of technical skills</h2>
    <p style="color: gray; margin: 0 0 10px; text-align: center;">Name: experience</p>

    <div v-for="skill in skills" :key="skill[Skill.name]">
      <p>
        <Fancy>{{ skill[Skill.name] }}</Fancy>: {{ skill[Skill.experience] }}/10
      </p>
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
