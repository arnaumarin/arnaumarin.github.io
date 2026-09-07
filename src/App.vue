<script setup>
import { bioHtml, fundingHtml, name } from './data/profile.js'
import ProfileSidebar from './components/ProfileSidebar.vue'
import NewsList from './components/NewsList.vue'
import PublicationList from './components/PublicationList.vue'
import SiteFooter from './components/SiteFooter.vue'

const scholarUrl = 'https://scholar.google.com/citations?user=4tLG8zwAAAAJ&hl=en&oi=ao'
</script>

<template>
  <nav class="nav">
    <div class="nav-inner">
      <a href="/" class="nav-logo">
        <span>{{ name }}</span>
      </a>
      <ul class="nav-links">
        <li><a href="/" class="active">About</a></li>
        <li><a :href="scholarUrl" target="_blank" rel="noopener">Publications</a></li>
      </ul>
    </div>
  </nav>

  <main class="page">
    <div class="profile-layout">
      <ProfileSidebar />

      <div class="main-content">
        <!-- Bio -->
        <section class="section">
          <p v-for="(para, i) in bioHtml" :key="i" class="bio" v-html="para"></p>
          <p class="funding-note" v-html="fundingHtml"></p>
        </section>

        <NewsList />
        <PublicationList />
      </div>
    </div>
  </main>

  <SiteFooter />
</template>
