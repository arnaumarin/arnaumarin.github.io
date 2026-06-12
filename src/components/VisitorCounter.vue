<script setup>
// hits.sh badge (no account, no third-party script). Recolored to the teal accent.
// The old MapMyVisitors map widget was dropped — its service was returning 522s.
const badge =
  'https://hits.sh/arnaumarin.github.io.svg?style=flat&label=visits&color=2f7f93'
</script>

<template>
  <div class="flex items-center gap-2 text-[0.78rem]" style="color: var(--color-faint)">
    <img :src="badge" alt="Visit counter" height="20" />
  </div>
</template>
