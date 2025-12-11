<script setup lang="ts"></script>

<template>
  <section class="toast-component">
    <div class="toast">
      <font-awesome-icon class="copy" :icon="['fas', 'check']" />
      <span>Copiado</span>
    </div>
  </section>
</template>

<style scoped>
.toast-component {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100dvh;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  padding: 0px;

  .toast {
    font-size: 1.3rem;
    display: flex;
    color: var(--toast-color);
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    padding: 10px;
    border: 2px solid var(--toast-border);
    border-radius: 5px;
    background-color: var(--toast-background);
    transition: all 0.3s ease;
    opacity: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    backdrop-filter: blur(2px);
    transform: translateY(100px);
  }
}

.toast-component.active .toast {
  transition: all 0.3s ease-out;
  transform: translateY(-20px);
  opacity: 1;
}

@media screen and (width < 736px) {
  .toast-component {
    .toast {
      max-width: 200px;
      backdrop-filter: blur(2px);
    }
  }
}
</style>
