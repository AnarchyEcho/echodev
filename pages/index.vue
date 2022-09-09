<script setup lang="ts">
const me = ref('/me.png');
function getAge(dateString: string) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
</script>

<template>
  <div class="body">
    <Head>
      <Title>{{ $t('home') }}</Title>
    </Head>

    <div class="info">
      <h2>{{ $t("whoAmI") }}</h2>
      <p>{{ $t("bioTop", { age: getAge('1998/02/22') }) }}</p>
      <img :src="me" class="myImage">
      <p>{{ $t("bioMiddleOne") }}</p>
      <p>{{ $t("bioMiddleTwo") }}</p>
      <p>{{ $t("bioMiddleThree") }}</p>
      <p>{{ $t("bioEnd") }}</p>
    </div>
    <!-- <div>
      <h2>{{ $t("skills") }}</h2>
      <Skills />
    </div> -->
  </div>
</template>

<style scoped lang="scss">
.body {
  margin-left: 10rem;
  margin-right: 10rem;
  text-align: center;
    @media (max-width: 768px) {
    text-align: left;
    margin-left: 1rem;
  margin-right: 1rem;
  }
}
h2 {
  color: #ffa500;
}
a {
  color: #ffa500;
}
.myImage {
  width: 200px;
  height: 200px;
  border-radius: 100%;
}
</style>
