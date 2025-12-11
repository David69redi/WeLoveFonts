<script setup lang="ts"></script>

<template>
  <footer class="flex justify-between w-full items-center">
    <div class="flex gap-2">
      <p>Made by</p>
      <a
        class="border-b-2"
        href="https://github.com/David69redi"
        target="_blank"
        >David Mejías</a
      >
    </div>
    <div class="ig">
      <a
        target="_blank"
        href="https://www.instagram.com/itsdavidev?igsh=MXQ1eW9yMHUzeWFyMQ=="
      >
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 20px 50px;
  color: var(--color-text);

  div a {
    color: inherit;
    font-size: 1rem;
    text-decoration: none;
    transition: transform 0.3s ease;

    &:hover {
      cursor: pointer;
      transform: translateY(-3px);
    }
  }

  .ig {
    transition: transform 0.3s ease;

    &:hover {
      cursor: pointer;
      transform: translateY(-3px);
    }

    a {
      font-size: 2rem;
    }
  }

  @media screen and (width < 736px) {
    padding: 20px;
  }
}
</style>
