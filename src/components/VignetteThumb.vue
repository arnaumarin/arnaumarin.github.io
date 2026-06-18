<script setup>
import { ref } from 'vue'
import { lightbox } from '../store/lightbox.js'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
})

// Gracefully drop the whole card if the image is missing (e.g. a thumbnail
// that hasn't been added yet) instead of showing a broken-image icon.
const failed = ref(false)
</script>

<template>
  <button
    v-if="!failed"
    type="button"
    class="vignette shrink-0"
    :style="{ width: '92px', height: '92px' }"
    :aria-label="alt ? `View figure: ${alt}` : 'View figure'"
    @click="lightbox.open(props.src, props.alt)"
  >
    <img :src="src" :alt="alt" loading="lazy" @error="failed = true" />
  </button>
</template>

<style scoped>
button.vignette {
  border: 0;
  padding: 0;
  cursor: zoom-in;
}
</style>
