<script setup>
import { ref } from 'vue'
import media from '../data/media.js'

const open = ref(false)
</script>

<template>
  <section id="media">
    <button class="media-toggle" :aria-expanded="open" @click="open = !open">
      In the Media <span class="chevron" :class="{ rot: open }">↓</span>
    </button>

    <ul v-if="open" class="mt-5 flex flex-col gap-5">
      <li v-for="m in media" :key="m.title">
        <p class="media-title">{{ m.title }}</p>
        <p class="media-meta">
          <span style="font-style: italic">{{ m.outlet }}</span> · {{ m.date }}
        </p>
        <p class="media-body" v-html="m.html"></p>
        <div class="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
          <a
            v-for="l in m.links"
            :key="l.label"
            :href="l.href"
            target="_blank"
            rel="noopener"
            class="sweep text-[0.82rem]"
            style="color: var(--color-teal)"
            >{{ l.label }}</a
          >
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.media-toggle {
  font-size: 1.18rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-ink);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.2s ease;
}
.media-toggle:hover {
  color: var(--color-teal);
}
.chevron {
  font-size: 0.8em;
  color: var(--color-faint);
  transition: transform 0.25s ease;
}
.chevron.rot {
  transform: rotate(180deg);
}
.media-title {
  font-weight: 700;
  font-size: 0.92rem;
  line-height: 1.4;
}
.media-meta {
  font-size: 0.8rem;
  color: var(--color-faint);
  margin-top: 0.1rem;
}
.media-body {
  font-size: 0.86rem;
  line-height: 1.55;
  color: var(--color-muted);
  margin-top: 0.4rem;
}
</style>
