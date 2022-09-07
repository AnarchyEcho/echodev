<script setup lang="ts">

</script>

<template>
  <div>
    <select v-model="$i18n.locale" class="locale-changer">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
        {{ locale }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss">
.locale-changer {
  width: 50px;
  height: 25px;
  background-color: #fefefe;
  border: 1px #00000000;
  border-radius: 5px;
  background-color: #353535;
  color: #ffa500;
}
</style>
