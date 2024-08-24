<script setup lang="ts">
const experience: Array<[name: string, time: string, position: string, tasks: string]> = [
  [
    'WA.Works',
  '7 months',
  'Frontend Engineer', 'Main frontend developer working on developing and elevating the face of the product, a recruitment website for tech companies to find developers fitting their workload and environment, and the UI library used throughout the entirety of the frontend of the product.'
  ],
  [
    'DNB',
    '6 months',
    'Software Engineer',
    'Main frontend developer in a small team of variously roled engineers, in charge of a product used for management by companies. (NDA)'
  ],
]
</script>

<template>
  <div style="max-width: 350px;">
    <h2>Work experience</h2>
    <p style="color: gray; margin: 0; text-align: center;">Only those relevant to programming</p>
    <p style="color: gray; margin: 0 0 10px; text-align: center;">From most to least recent</p>

    <div v-for="job in experience">
      <p><Fancy>{{ job[0] }}</Fancy> - {{ job[1] }}</p>
      <p><Fancy>Position</Fancy>: {{ job[2] }}</p>
      <p><Fancy>Responsibilities</Fancy>: {{ job[3] }}</p>
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
.line {
  @media (max-width: 768px) {
    max-width: 70%;
  }
}
p {
  text-align: left;
  margin: 0 0 5px;
  padding: 0;
}
</style>
