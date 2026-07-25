<script setup>
// hits.sh badge (no account, no third-party script). Recolored to the teal accent.
// Links to /stats.html, which hosts the MapMyVisitors world map.
const badge =
  'https://hits.sh/arnaumarin.github.io.svg?style=flat&label=visits&color=2f7f93'
</script>

<template>
  <a
    href="/stats.html"
    class="counter-link flex items-center gap-2 text-[0.78rem]"
    title="Visitor map"
  >
    <img :src="badge" alt="Visit counter" height="20" />
    <span class="map-hint">map</span>
  </a>
</template>

<style scoped>
.counter-link {
  color: var(--color-faint);
  text-decoration: none;
}
.map-hint {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.03em;
  transition: color 0.2s ease;
}
.counter-link:hover .map-hint {
  color: var(--color-teal);
}
</style>
