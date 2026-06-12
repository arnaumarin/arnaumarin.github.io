<script setup>
import VisitorCounter from './VisitorCounter.vue'
</script>

<template>
  <footer class="mt-4 pt-6" style="border-top: 1px solid var(--color-rule)">
    <div class="flex items-center justify-between flex-wrap gap-3">
      <span class="text-[0.74rem]" style="color: var(--color-faint); font-family: var(--font-mono)">
        © {{ new Date().getFullYear() }} Arnau Marin-Llobet
      </span>
      <VisitorCounter />
    </div>
  </footer>
</template>
