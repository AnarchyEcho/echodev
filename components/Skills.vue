<script setup>
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  ViFileTypeTypescriptOfficial as typescript,
  ViFileTypeJsOfficial as javascript,
  ViFileTypeNext as nextjs,
  ViFileTypeNuxt as nuxtjs,
  ViFileTypeAngular as angularjs,
  ViFileTypeGatsby as gatsby,
  ViFileTypeReactjs as reactjs,
  ViFileTypeVue as vue,
  SiGnubash as bash,
  ViFileTypeGit as git,
  ViFileTypeCsharp2 as csharp,
  FaUnity as unity,
  FcLinux as linux,
  FaRaspberryPi as raspi,
  ViFileTypeDocker2 as docker,
  FaNode as node,
  CoPostman as postman,
  ViFileTypeAzure as azure,
  ViFileTypeSql as sql,
  CoPostgresql as postgres,
  ViFileTypeSqlite as sqlite,
  CoRedis as redis,
} from 'oh-vue-icons/icons';
addIcons(
  typescript,
  javascript,
  nextjs,
  nuxtjs,
  angularjs,
  gatsby,
  reactjs,
  vue,
  bash,
  git,
  csharp,
  unity,
  linux,
  raspi,
  docker,
  node,
  postman,
  azure,
  sql,
  postgres,
  sqlite,
  redis,
);
const langs = [
  typescript,
  javascript,
  csharp,
  bash,
];
const frameworks = [
  nextjs,
  reactjs,
  nuxtjs,
  vue,
  angularjs,
  gatsby,
];
const databases = [
  postgres,
  sqlite,
  sql,
  redis,
];
const techs = [
  node,
  git,
  docker,
  postman,
  linux,
  raspi,
  unity,
  azure,
];
</script>

<template>
  <div class="parent">
    <div class="wrapper">
      <div class="iconDiv">
        <p class="label">
          {{ $t("langs") }}
        </p>
        <span v-for="icon in langs" :key="icon.name">
          <OhVueIcon
            :name="icon.name"
            scale="2.5"
            :hover="true"
            animation="float"
            :class="icon.name"
          />
        </span>
      </div>
      <div class="iconDiv">
        <p class="label">
          {{ $t("frameworks") }}
        </p>
        <span v-for="icon in frameworks" :key="icon.name">
          <OhVueIcon
            :name="icon.name"
            scale="2.5"
            :hover="true"
            animation="float"
            :class="icon.name"
          />
        </span>
      </div>
      <div class="iconDiv">
        <p class="label">
          {{ $t("databases") }}
        </p>
        <span v-for="icon in databases" :key="icon.name">
          <OhVueIcon
            :name="icon.name"
            scale="2.5"
            :hover="true"
            animation="float"
            :class="icon.name"
          />
        </span>
      </div>
      <div class="iconDiv">
        <p class="label">
          {{ $t("technologies") }}
        </p>
        <span v-for="icon in techs" :key="icon.name">
          <OhVueIcon
            :name="icon.name"
            scale="2.5"
            :hover="true"
            animation="float"
            :class="icon.name"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.parent {
  display: flex;
  justify-content: center;
}
.iconDiv {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
}
.label {
  min-width: 100px;
}

// Icon specific css
.co-postgresql {
  fill: #336791;
  stroke: #f5f5f5;
}
.co-redis {
  color: #d82c20;
}
.fa-node {
  color: #68a063;
}
.co-postman {
  color: #ef5b25;
}
.fa-raspberry-pi {
  color: #c51a4a;
}
</style>
