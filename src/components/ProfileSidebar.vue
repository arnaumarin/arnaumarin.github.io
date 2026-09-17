<script setup>
import { computed } from 'vue'
import { name, photo, emails, socials } from '../data/profile.js'

// Assemble mailto at runtime so the address isn't sitting in static HTML.
const primaryEmail = computed(() => `${emails[0].user}@${emails[0].domain}`)
const mailto = computed(() => `mailto:${primaryEmail.value}`)

const paths = {
  github:
    'M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.34 9.34 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2z',
  linkedin:
    'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm6 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.66c0-1.35-.03-3.08-1.9-3.08-1.9 0-2.2 1.46-2.2 2.98V21H9V9z',
  x: 'M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.82-5.97 6.82H1.66l7.73-8.84L1.18 2.25h6.83l4.72 6.24 5.51-6.24zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64z',
  scholar:
    'M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.84 3.77A8 8 0 0 1 12 9a8 8 0 0 1 7.16 4.27L24 9.5 12 0z',
  mail:
    'M2 4h20v16H2V4zm2 2v.4l8 5.2 8-5.2V6H4zm16 2.97-8 5.2-8-5.2V18h16V8.97z',
}
</script>

<template>
  <aside class="sidebar">
    <div class="profile-photo-wrap">
      <img :src="photo" :alt="name" />
    </div>
    <div class="profile-name">{{ name }}</div>
    <div class="profile-title">
      PhD Researcher in Electrical and Computer Engineering at<br />
      <a
        href="https://seas.harvard.edu/"
        target="_blank"
        rel="noopener"
        class="profile-institution-link"
        >Harvard University</a
      >
    </div>

    <div class="social-links">
      <a :href="mailto" :aria-label="`Email ${primaryEmail}`" title="Email" class="social-link">
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path :d="paths.mail" fill="currentColor" />
        </svg>
      </a>
      <a
        v-for="s in socials"
        :key="s.label"
        :href="s.href"
        target="_blank"
        rel="noopener"
        :aria-label="s.label"
        :title="s.label"
        class="social-link"
      >
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path :d="paths[s.icon]" fill="currentColor" />
        </svg>
      </a>
    </div>
  </aside>
</template>
