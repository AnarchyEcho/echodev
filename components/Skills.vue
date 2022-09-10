<script setup>
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  ViFileTypeTypescriptOfficial,
  ViFileTypeJsOfficial,
  ViFileTypeNext,
  ViFileTypeNuxt,
  ViFileTypeGatsby,
  ViFileTypeReactjs,
  ViFileTypeVue,
  SiGnubash,
  ViFileTypeGit,
  ViFileTypeCsharp2,
  ViFileTypeRest,
  FaUnity,
  FcLinux,
  FaRaspberryPi,
  ViFileTypeDocker2,
  FaNode,
  CoPostman,
  ViFileTypeAzure,
} from 'oh-vue-icons/icons';
addIcons(ViFileTypeTypescriptOfficial,
  ViFileTypeJsOfficial,
  ViFileTypeNext,
  ViFileTypeNuxt,
  ViFileTypeGatsby,
  ViFileTypeReactjs,
  ViFileTypeVue,
  SiGnubash,
  ViFileTypeGit,
  ViFileTypeCsharp2,
  ViFileTypeRest,
  FaUnity,
  FcLinux,
  FaRaspberryPi,
  ViFileTypeDocker2,
  FaNode,
  CoPostman,
  ViFileTypeAzure,
);
const langs = [
  ViFileTypeTypescriptOfficial,
  ViFileTypeJsOfficial,
  ViFileTypeCsharp2,
];
const frameworks = [
  ViFileTypeNext,
  ViFileTypeNuxt,
  ViFileTypeGatsby,
  ViFileTypeReactjs,
  ViFileTypeVue,
];
const techs = [
  FaNode,
  CoPostman,
  SiGnubash,
  FcLinux,
  ViFileTypeGit,
  FaRaspberryPi,
  ViFileTypeRest,
  FaUnity,
  ViFileTypeDocker2,
  ViFileTypeAzure,
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
            :tooltip="icon.name"
            :hover="true"
            animation="float"
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
            :tooltip="icon.name"
            :hover="true"
            animation="float"
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
            :tooltip="icon.name"
            :hover="true"
            animation="float"
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
</style>
