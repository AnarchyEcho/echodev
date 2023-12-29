<script setup lang="ts">
const me = ref('/me.png');
function getAge(year: number, month: number, day: number) {
  const dayAsMs = 24 * 60 * 60 * 1000;
  const bday: any = new Date(year, month, day);
  const today: any = new Date();
  const age = Math.floor(((today - bday) / dayAsMs) / 365);
  return age;
}
</script>

<template>
  <div class="body">
    <Head>
      <Title>{{ $t('home') }}</Title>
    </Head>

    <div class="info">
      <div class="wrapper">
        <h2>{{ $t("whoAmI") }}</h2>
        <p>{{ $t("bioTop", { age: getAge(1998, 1, 22) }) }}</p>
        <img :src="me" class="myImage">
        <p>{{ $t("bioMiddleOne") }}</p>
        <p>{{ $t("bioMiddleTwo") }}</p>
        <p>{{ $t("bioMiddleThree") }}</p>
        <p>{{ $t("bioEnd") }}</p>
      </div>
    </div>
    <div>
      <h2>{{ $t("skills") }}</h2>
      <Skills />
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  margin-left: 10rem;
  margin-right: 10rem;
  text-align: center;
  @media (max-width: 768px) {
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
.info {
  display: flex;
  justify-content: center;
}
.myImage {
  width: 200px;
  height: 200px;
  border-radius: 100%;
}
.wrapper {
  max-width: 65%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
}
.wrapper > p {
  text-align: left;
}
</style>
