<script setup lang="ts">
</script>

<template>
  <div class="body">
    <Head>
      <Title>EchoDev</Title>
    </Head>

    <div class="info">
      <div class="wrapper">
        <div class="bioWrapper">
          <Bio />
        </div>
        <div class="boringWrapper">
          <div class="skillsWrapper">
            <Skills />
          </div>
          <div class="workWrapper">
            <Work />
          </div>
        </div>
      </div>
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
  padding-top: 1.5rem;
}
.boringWrapper {
  display: flex;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
}
.wrapper {
  max-width: 65%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
}
</style>
