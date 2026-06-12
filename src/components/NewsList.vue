<script setup>
import { ref, computed } from 'vue'
import news from '../data/news.js'
import Tag from './Tag.vue'
import VignetteThumb from './VignetteThumb.vue'

const expanded = ref(false)
const visible = computed(() => (expanded.value ? news : news.filter((n) => !n.hidden)))
const hiddenCount = news.filter((n) => n.hidden).length
</script>

<template>
  <section>
    <h2 class="section-title">Selected News</h2>

    <ul class="timeline">
      <li v-for="(item, i) in visible" :key="i" class="news-row">
        <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span class="mono-date">{{ item.date }}</span>
          <Tag v-for="t in item.tags" :key="t.label" :label="t.label" :type="t.type" />
        </div>

        <div class="mt-1.5 flex gap-4">
          <div class="flex-1 min-w-0">
            <p class="news-text" v-html="item.html"></p>
            <div v-if="item.links" class="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
              <a
                v-for="l in item.links"
                :key="l.label"
                :href="l.href"
                target="_blank"
                rel="noopener"
                class="sweep text-[0.82rem]"
                style="color: var(--color-teal)"
                >{{ l.label }}</a
              >
            </div>
          </div>
          <VignetteThumb
            v-if="item.thumb"
            :src="item.thumb"
            :alt="item.thumbAlt"
            :href="item.thumb"
          />
        </div>
      </li>
    </ul>

    <button v-if="hiddenCount" class="show-more" @click="expanded = !expanded">
      {{ expanded ? 'Show less ↑' : `Show all news ↓` }}
    </button>
  </section>
</template>

<style scoped>
.mono-date {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.02em;
  color: var(--color-faint);
}
.news-text {
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--color-ink);
}
.news-text :deep(em) {
  color: var(--color-muted);
}
.show-more {
  margin-top: 0.25rem;
  font-family: var(--font-mono);
  font-size: 0.74rem;
  letter-spacing: 0.03em;
  color: var(--color-teal);
  cursor: pointer;
  transition: opacity 0.2s ease;
}
.show-more:hover {
  opacity: 0.65;
}
</style>
