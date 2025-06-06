<script setup lang="ts">
function getAge() {
  const today = new Date();
  const birthDate = new Date('1998/02/22');
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
</script>

<template>
  <span>{{ getAge() }}</span>
</template>

<style scoped lang="scss">

</style>
