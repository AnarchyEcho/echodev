<script setup lang="ts">

</script>

<template>
  <div class="footer">
    <div>
      <span>
        <NuxtLink to="https://github.com/kodeandre" target="_blank" no-rel>
          My Github
        </NuxtLink>
        &
        <NuxtLink href="https://www.linkedin.com/in/andr%C3%A8-hagen-a0a821217/" target="_blank" rel="noreferrer">
          My LinkedIn
        </NuxtLink>
      </span>
    </div>
    <p>
      &copy; {{ `Copyright 2021 - ${new Date().getFullYear()}` }} <a href="https://github.com/kodeandre" target="_blank" rel="noreferrer">
        Andrè Hagen
      </a>
    </p>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background-color: #252525;
  padding: 0.1rem 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  color: #0094e3;
}
</style>
