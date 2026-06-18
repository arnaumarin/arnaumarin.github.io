<script setup>
import { bioHtml } from './data/profile.js'
import TopoBackground from './components/TopoBackground.vue'
import SiteHeader from './components/SiteHeader.vue'
import NewsList from './components/NewsList.vue'
import PublicationList from './components/PublicationList.vue'
import MediaList from './components/MediaList.vue'
import SiteFooter from './components/SiteFooter.vue'
import Lightbox from './components/Lightbox.vue'
</script>

<template>
  <TopoBackground />

  <main
    class="mx-auto px-6 py-14 sm:py-20 flex flex-col gap-14 sm:gap-16"
    style="max-width: var(--container-prose)"
  >
    <SiteHeader />

    <section class="reveal" style="animation-delay: 0.08s">
      <p v-for="(para, i) in bioHtml" :key="i" class="bio" v-html="para"></p>
    </section>

    <div class="reveal" style="animation-delay: 0.16s"><NewsList /></div>
    <div class="reveal" style="animation-delay: 0.2s"><PublicationList /></div>
    <div class="reveal" style="animation-delay: 0.24s"><MediaList /></div>

    <SiteFooter />
  </main>

  <Lightbox />
</template>

<style scoped>
.bio {
  font-size: 1rem;
  line-height: 1.68;
  margin-top: 1rem;
}
.bio:first-of-type {
  margin-top: 0;
}
</style>
