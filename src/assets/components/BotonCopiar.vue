<template>
  <div class="centralize">
    <div>
      <button>
        <span
          ><svg
            width="12"
            height="12"
            fill="#00000"
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 467 512.22"
          >
            <path
              fill-rule="nonzero"
              d="M131.07 372.11c.37 1 .57 2.08.57 3.2 0 1.13-.2 2.21-.57 3.21v75.91c0 10.74 4.41 20.53 11.5 27.62s16.87 11.49 27.62 11.49h239.02c10.75 0 20.53-4.4 27.62-11.49s11.49-16.88 11.49-27.62V152.42c0-10.55-4.21-20.15-11.02-27.18l-.47-.43c-7.09-7.09-16.87-11.5-27.62-11.5H170.19c-10.75 0-20.53 4.41-27.62 11.5s-11.5 16.87-11.5 27.61v219.69zm-18.67 12.54H57.23c-15.82 0-30.1-6.58-40.45-17.11C6.41 356.97 0 342.4 0 326.52V57.79c0-15.86 6.5-30.3 16.97-40.78l.04-.04C27.51 6.49 41.94 0 57.79 0h243.63c15.87 0 30.3 6.51 40.77 16.98l.03.03c10.48 10.48 16.99 24.93 16.99 40.78v36.85h50c15.9 0 30.36 6.5 40.82 16.96l.54.58c10.15 10.44 16.43 24.66 16.43 40.24v302.01c0 15.9-6.5 30.36-16.96 40.82-10.47 10.47-24.93 16.97-40.83 16.97H170.19c-15.9 0-30.35-6.5-40.82-16.97-10.47-10.46-16.97-24.92-16.97-40.82v-69.78zM340.54 94.64V57.79c0-10.74-4.41-20.53-11.5-27.63-7.09-7.08-16.86-11.48-27.62-11.48H57.79c-10.78 0-20.56 4.38-27.62 11.45l-.04.04c-7.06 7.06-11.45 16.84-11.45 27.62v268.73c0 10.86 4.34 20.79 11.38 27.97 6.95 7.07 16.54 11.49 27.17 11.49h55.17V152.42c0-15.9 6.5-30.35 16.97-40.82 10.47-10.47 24.92-16.96 40.82-16.96h170.35z"
            ></path>
          </svg>
          Copiar</span
        >
        <span>Copiado</span>
      </button>

      <div></div>
    </div>
  </div>
</template>

<style scoped>
button {
  color: var(--color-text);
  background-color: var(--color-background-button);
  font-family: monospace;
  padding: 8px;
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  transition-duration: 700ms;
}

svg {
  color: rgb(207, 127, 23);
}

button span:first-child {
  color: var(--color-text);
  position: absolute;
  transform: translate(-50%, -50%);
}

button span:last-child {
  position: absolute;
  color: var(--color-text-click);
  opacity: 0;
  transform: translateY(100%) translateX(-50%);
  height: 14px;
  line-height: 13px;
}

button:focus {
  background-color: var(--color-background-click);
  width: 100px;
  height: 30px;
  transition-delay: 100ms;
  transition-duration: 500ms;
}

button:focus span:first-child {
  color: black;
  transform: translateX(-50%) translateY(-150%);
  opacity: 0;
  transition-duration: 500ms;
}

button:focus span:last-child {
  transform: translateX(-50%) translateY(-50%);
  opacity: 1;
  transition-delay: 300ms;
  transition-duration: 500ms;
}

button:focus:end {
  background-color: #ffffff;
  width: 120px;
  height: 40px;
  transition-duration: 900ms;
}

.centralize {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: right;
  text-align: left;
}
</style>
