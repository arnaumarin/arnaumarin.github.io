<script setup>
import { ref, computed } from 'vue'
import news from '../data/news.js'

const MAX_VISIBLE = 4
const expanded = ref(false)
const visible = computed(() => (expanded.value ? news : news.slice(0, MAX_VISIBLE)))
const hiddenCount = news.length - MAX_VISIBLE

// Talk entries show their photo; paper entries stay text-only.
const talkThumb = (item) =>
  item.thumb && item.tags?.some((t) => t.label === 'talk') ? item.thumb : null
</script>

<template>
  <section class="section">
    <h2 class="section-title">News</h2>
    <ul class="news-list">
      <li v-for="(item, i) in visible" :key="i" class="news-item">
        <span class="news-date">{{ item.date }}</span>
        <span class="news-text">
          <span v-html="item.html"></span>
          <template v-if="item.links">
            {{ ' ' }}
            <a
              v-for="l in item.links"
              :key="l.label"
              :href="l.href"
              target="_blank"
              rel="noopener"
              class="news-extra-link"
              >[{{ l.label }}]</a
            >
          </template>
        </span>
        <img
          v-if="talkThumb(item)"
          :src="talkThumb(item)"
          :alt="item.thumbAlt || 'Talk photo'"
          class="news-thumb"
        />
      </li>
    </ul>
    <button v-if="hiddenCount > 0" class="news-toggle" @click="expanded = !expanded">
      {{ expanded ? 'Show less' : `Show ${hiddenCount} more` }}
    </button>
  </section>
</template>

<style scoped>
.news-extra-link { margin-right: 6px; }
</style>
