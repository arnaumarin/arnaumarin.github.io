<script setup>
import honors from '../data/honors.js'
</script>

<template>
  <section id="honors">
    <h2 class="section-title">Honors &amp; Awards</h2>
    <ul class="flex flex-col gap-4">
      <li v-for="h in honors" :key="h.title" class="flex gap-4">
        <span class="mono-year">{{ h.year }}</span>
        <div class="flex-1">
          <p class="honor-title">{{ h.title }}</p>
          <a v-if="h.href" :href="h.href" target="_blank" rel="noopener" class="prose-link text-[0.85rem]">{{
            h.linkLabel
          }}</a>
          <p class="honor-desc">{{ h.desc }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.mono-year {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  color: var(--color-faint);
  white-space: nowrap;
  padding-top: 0.15rem;
  min-width: 3.5rem;
}
.honor-title {
  font-weight: 700;
  font-size: 0.9rem;
}
.honor-desc {
  font-size: 0.84rem;
  line-height: 1.5;
  color: var(--color-muted);
  margin-top: 0.15rem;
}
</style>
