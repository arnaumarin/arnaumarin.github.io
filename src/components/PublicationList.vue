<script setup>
import { ref, computed } from 'vue'
import pubs, { categories } from '../data/publications.js'
import Tag from './Tag.vue'
import VignetteThumb from './VignetteThumb.vue'

const active = ref('all')
const openTldr = ref(new Set())

const filtered = computed(() =>
  active.value === 'all' ? pubs : pubs.filter((p) => p.cats.includes(active.value)),
)

function toggle(i) {
  const s = new Set(openTldr.value)
  s.has(i) ? s.delete(i) : s.add(i)
  openTldr.value = s
}
</script>

<template>
  <section id="publications">
    <h2 class="section-title">Publications</h2>
    <p class="text-[0.86rem] mb-4" style="color: var(--color-muted)">
      Selected publications. Full list on
      <a class="prose-link" href="https://scholar.google.com/citations?user=4tLG8zwAAAAJ&hl=ca&oi=ao"
        >Google Scholar</a
      >. (*) denotes equal contribution.
    </p>

    <div class="flex flex-wrap gap-2 mb-6">
      <button
        v-for="c in categories"
        :key="c.key"
        class="filter-btn"
        :class="{ 'filter-active': active === c.key }"
        @click="active = c.key"
      >
        {{ c.label }}
      </button>
    </div>

    <ul class="flex flex-col gap-7">
      <li v-for="(p, i) in filtered" :key="p.title" class="flex gap-4">
        <VignetteThumb :src="p.thumb" :alt="p.title" />
        <div class="flex-1 min-w-0">
          <p class="pub-title" v-html="p.title"></p>
          <p class="pub-authors" v-html="p.authorsHtml"></p>
          <p class="pub-venue" v-html="p.venueHtml"></p>

          <div class="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <a
              v-for="l in p.links"
              :key="l.label"
              :href="l.href"
              target="_blank"
              rel="noopener"
              class="sweep text-[0.82rem]"
              style="color: var(--color-teal)"
              >{{ l.label }}</a
            >
            <button class="tldr-btn" @click="toggle(i)">
              {{ openTldr.has(i) ? 'TL;DR ↑' : 'TL;DR ↓' }}
            </button>
            <span class="ml-auto flex flex-wrap gap-1.5">
              <Tag v-for="t in p.tags" :key="t.label" :label="t.label" :type="t.type" />
            </span>
          </div>

          <p v-if="openTldr.has(i)" class="pub-tldr" v-html="p.tldrHtml"></p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.filter-btn {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.02em;
  padding: 0.3em 0.7em;
  border-radius: 6px;
  border: 1px solid var(--color-rule);
  color: var(--color-muted);
  background: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
}
.filter-btn:hover {
  border-color: var(--color-teal);
  color: var(--color-teal);
}
.filter-active {
  background: var(--color-teal);
  border-color: var(--color-teal);
  color: #fff;
}
.pub-title {
  font-weight: 700;
  font-size: 0.95rem;
  line-height: 1.4;
  letter-spacing: -0.01em;
}
.pub-authors {
  font-size: 0.85rem;
  color: var(--color-muted);
  margin-top: 0.15rem;
}
.pub-authors :deep(strong) {
  color: var(--color-ink);
}
.pub-venue {
  font-size: 0.82rem;
  color: var(--color-faint);
  margin-top: 0.1rem;
}
.tldr-btn {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-faint);
  cursor: pointer;
  transition: color 0.2s ease;
}
.tldr-btn:hover {
  color: var(--color-teal);
}
.pub-tldr {
  margin-top: 0.6rem;
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--color-muted);
  border-left: 2px solid var(--color-teal);
  padding-left: 0.75rem;
}
</style>
