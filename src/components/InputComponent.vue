<script setup lang="ts">
const inputUser = defineModel<string>("inputUser");
</script>

<template>
  <div class="input w-full max-w-[800px]">
    <input
      v-model="inputUser"
      placeholder="Escribe un texto"
      class="flex items-center w-full max-w-[800px]"
    />
  </div>
</template>

<style scoped>
.input {
  input {
    font-size: 1.2rem;
    padding: 20px;
    color: var(--color-text);
    border: 2px solid var(--border-color-p);
    border-radius: 14px;
    background-color: var(--color-background-card);
    outline: none;

    &:focus {
      border: 2px solid var(--background-button);
    }
  }
}
@media screen and (width < 736px) {
  .input {
    width: 100%;
    max-width: 380px;
  }
}
</style>
