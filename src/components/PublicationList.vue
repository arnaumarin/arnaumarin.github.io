<script setup>
import pubs from '../data/publications.js'

const selected = pubs.filter((p) => p.selected)
const scholarUrl = 'https://scholar.google.com/citations?user=4tLG8zwAAAAJ&hl=en&oi=ao'

// The title links to the paper's first listed URL.
const mainHref = (p) => p.links?.[0]?.href
</script>

<template>
  <section class="section" id="publications">
    <h2 class="section-title">Selected Publications</h2>

    <div class="pub-list">
      <div v-for="p in selected" :key="p.title" class="pub-card">
        <div class="pub-card-inner">
        <div class="pub-card-body">
        <div v-if="p.pubTags" class="pub-tags">
          <span v-for="t in p.pubTags" :key="t.label" class="tag" :class="`tag-${t.type}`">{{
            t.label
          }}</span>
        </div>
        <div class="pub-title">
          <a v-if="mainHref(p)" :href="mainHref(p)" target="_blank" rel="noopener">{{ p.title }}</a>
          <template v-else>{{ p.title }}</template>
        </div>
        <div class="pub-authors" v-html="p.authorsHtml"></div>
        <div class="pub-venue" v-html="p.venueHtml"></div>
        <div v-if="p.links && p.links.length" class="pub-links">
          <a
            v-for="l in p.links"
            :key="l.label"
            :href="l.href"
            target="_blank"
            rel="noopener"
            class="pub-link"
            >{{ l.label }}</a
          >
        </div>
        </div>
        <img v-if="p.thumb" :src="p.thumb" :alt="p.title" class="pub-thumb" loading="lazy" />
        </div>
      </div>
    </div>

    <p class="pub-footnote">
      * equal contribution &nbsp;&middot;&nbsp;
      <a :href="scholarUrl" target="_blank" rel="noopener">View all publications &rarr;</a>
    </p>
  </section>
</template>
