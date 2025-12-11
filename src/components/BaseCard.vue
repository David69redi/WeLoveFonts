<script setup lang="ts">
interface CardProps {
  name: string
  input?: string
  default: string
}

const props = defineProps<CardProps>()
</script>

<template>
  <div class="card-container flex flex-col w-full max-w-[800px] gap-6">
    <div class="text-button flex justify-between">
      <span>{{ props.name }}</span>
      <button>
        <font-awesome-icon class="copy" :icon="['far', 'copy']" />
      </button>
    </div>
    <p>{{ props.input === '' ? props.default : props.input }}</p>
  </div>
</template>

<style scoped>
.card-container {
  padding: 24px;
  border: 2px solid var(--border-color-p);
  border-radius: 14px;
  background-color: var(--color-background-card);
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  span {
    color: var(--color-placeholder);
  }

  p {
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    line-height: 1.4;
  }

  .text-button {
    button {
      border: none;
      border-radius: 10px;
      padding: 5px;
      color: var(--color-button);
      background-color: var(--background-button);
      font-size: 1.5rem;
      transition: background-color 0.3s ease;
    }
  }

  &:hover {
    cursor: pointer;
    border: 2px solid var(--border-color-p-hover);

    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);

    button {
      background-color: var(--background-button-hover);
    }
  }
  &:active {
    transform: translateY(0);
    transform: scale(0.98);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
}
@media screen and (width < 736px) {
  .card-container {
    width: 100%;
    max-width: 380px;
  }
}
</style>
