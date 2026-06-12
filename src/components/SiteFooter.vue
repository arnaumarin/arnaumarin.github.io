<script setup>
import VisitorCounter from './VisitorCounter.vue'
</script>

<template>
  <footer class="mt-4 pt-6" style="border-top: 1px solid var(--color-rule)">
    <p class="text-[0.86rem]" style="color: var(--color-muted)">
      I'm always happy to chat about research, collaborations, or anything else — feel free to reach
      out by email.
    </p>
    <div class="mt-4 flex items-center justify-between flex-wrap gap-3">
      <span class="text-[0.74rem]" style="color: var(--color-faint); font-family: var(--font-mono)">
        © {{ new Date().getFullYear() }} Arnau Marin-Llobet
      </span>
      <VisitorCounter />
    </div>
  </footer>
</template>
