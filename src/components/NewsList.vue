<script setup>
import { ref, computed } from 'vue'
import news from '../data/news.js'

const expanded = ref(false)
const visible = computed(() => (expanded.value ? news : news.filter((n) => !n.hidden)))
const hiddenCount = news.filter((n) => n.hidden).length
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
      </li>
    </ul>
    <button v-if="hiddenCount" class="news-toggle" @click="expanded = !expanded">
      {{ expanded ? 'Show less' : `Show ${hiddenCount} more` }}
    </button>
  </section>
</template>

<style scoped>
.news-extra-link { margin-right: 6px; }
</style>
