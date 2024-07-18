<script setup lang="ts">
const experience: Array<[name: string, time: string, position: string]> = [
  ['WA.Works', '7 months', 'Frontend Engineer'],
  ['DNB', '6 months', 'Software Engineer'],
]
</script>

<template>
  <div>
    <h2>Work experience</h2>
    <p style="color: gray; margin: 0; text-align: center;">Only those relevant to programming</p>
    <p style="color: gray; margin: 0; text-align: center;">From most to least recent</p>

    <div v-for="job in experience">
      <p><Fancy>{{ job[0] }}</Fancy> - {{ job[1] }}</p>
      <p class="position"><Fancy>Position</Fancy>: {{ job[2] }}</p>
      <hr class="line" />
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
.position {
  margin: 0;
  margin-top: -15px;
  padding: 0;
}
.line {
  @media (max-width: 768px) {
    max-width: 70%;
  }
}
p {
  text-align: left;
}
</style>
