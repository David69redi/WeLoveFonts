<script setup lang="ts">
// Componentes
import BaseCard from "@/components/BaseCard.vue";
import BaseToast from "./components/BaseToast.vue";
import InputComponent from "@/components/InputComponent.vue";
import SwitchTheme from "@/components/SwitchTheme.vue";
import FooterComponent from "@/components/FooterComponent.vue";
// JSON
import dataFonts from "@/assets/data/dataFonts.json";

// VUE
import { ref } from "vue";

//Funciones y Variables
import {
  switchTheme,
  toFont,
  handleCopyText,
  toastActive,
} from "./assets/utils/fuctions";

const inputUser = ref<string>("");
</script>

<template>
  <section class="app-container bg-(--background) flex flex-col gap-8">
    <BaseToast :class="{ active: toastActive.valueOf() }" />
    <aside class="aside-app">
      <SwitchTheme @toggle-theme="switchTheme" />
    </aside>
    <header class="header-app w-full flex justify-center">
      <h1>WeLoveFonts</h1>
    </header>
    <main>
      <InputComponent v-model:inputUser="inputUser" />
      <BaseCard
        v-for="(fuente, i) in dataFonts.filter(
          (f) => f.name.toLowerCase() !== 'normal'
        )"
        :key="i"
        :name="fuente.name"
        :default="
          toFont(
            'Esto es un texto de ejemplo WeLoveFonts',
            fuente.name,
            dataFonts
          )
        "
        :input="toFont(inputUser, fuente.name, dataFonts)"
        @click="handleCopyText(toFont(inputUser, fuente.name, dataFonts))"
      />
    </main>
    <FooterComponent />
  </section>
</template>

<style scoped>
.app-container {
  display: flex;
  color: var(--color-text);

  .aside-app {
    flex-direction: row-reverse;
    display: flex;
    margin: 30px 50px;
  }

  .header-app {
    h1 {
      font-family: "Korcy Oblique";
      font-size: 4.2rem;
    }
  }

  main {
    padding: 50px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
  }
  @media screen and (width < 736px) {
    .app-container {
      display: flex;
      width: 100%;
      color: var(--color-text);
    }

    .header-app {
      h1 {
        font-family: "Korcy Oblique";
        font-size: 3.8rem;
      }
    }
  }
}
</style>
