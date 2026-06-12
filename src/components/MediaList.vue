<script setup>
import media from '../data/media.js'
</script>

<template>
  <section id="media">
    <h2 class="section-title">In the Media</h2>
    <ul class="flex flex-col gap-5">
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
