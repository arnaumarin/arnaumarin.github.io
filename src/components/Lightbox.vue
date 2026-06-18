<script setup>
import { watch, onUnmounted } from 'vue'
import { lightbox } from '../store/lightbox.js'

function onKey(e) {
  if (e.key === 'Escape') lightbox.close()
}

// Lock body scroll + listen for Escape only while the overlay is open.
watch(
  () => lightbox.src,
  (open) => {
    if (open) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  },
)

onUnmounted(() => {
  document.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="lb">
      <div v-if="lightbox.src" class="lb-backdrop" @click="lightbox.close()">
        <div class="lb-inner" @click.stop>
          <img :src="lightbox.src" :alt="lightbox.alt" class="lb-img" />
          <button class="lb-close" type="button" aria-label="Close" @click="lightbox.close()">
            &times;
          </button>
        </div>
        <p v-if="lightbox.alt" class="lb-caption">{{ lightbox.alt }}</p>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lb-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  padding: 5vw;
  background: rgba(18, 20, 22, 0.7);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  cursor: zoom-out;
}
.lb-inner {
  position: relative;
  cursor: default;
}
.lb-img {
  display: block;
  max-width: min(92vw, 1100px);
  max-height: 84vh;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.45);
}
.lb-close {
  position: absolute;
  top: -0.6rem;
  right: -0.6rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  line-height: 1;
  color: #1a1a1a;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.15s ease, color 0.15s ease;
}
.lb-close:hover {
  transform: scale(1.1);
  color: var(--color-teal);
}
.lb-caption {
  max-width: min(92vw, 1100px);
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.82rem;
  text-align: center;
  cursor: zoom-out;
}

/* The "pop": backdrop fades, image springs up from slightly smaller. */
.lb-enter-active {
  transition: opacity 0.25s ease;
}
.lb-leave-active {
  transition: opacity 0.2s ease;
}
.lb-enter-from,
.lb-leave-to {
  opacity: 0;
}
.lb-inner {
  transition: transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.lb-enter-from .lb-inner,
.lb-leave-to .lb-inner {
  transform: scale(0.92);
}

@media (prefers-reduced-motion: reduce) {
  .lb-inner {
    transition: none;
  }
  .lb-enter-from .lb-inner,
  .lb-leave-to .lb-inner {
    transform: none;
  }
}
</style>
