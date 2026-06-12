<script setup>
import { ref } from 'vue'

defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  href: { type: String, default: null },
})

// Gracefully drop the whole card if the image is missing (e.g. a thumbnail
// that hasn't been added yet) instead of showing a broken-image icon.
const failed = ref(false)
</script>

<template>
  <component
    :is="href ? 'a' : 'div'"
    v-if="!failed"
    class="vignette shrink-0"
    :href="href"
    :target="href ? '_blank' : null"
    :rel="href ? 'noopener' : null"
    :style="{ width: '92px', height: '92px' }"
  >
    <img :src="src" :alt="alt" loading="lazy" @error="failed = true" />
  </component>
</template>
