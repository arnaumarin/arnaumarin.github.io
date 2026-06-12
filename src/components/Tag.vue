<script setup>
defineProps({
  label: { type: String, required: true },
  type: { type: String, default: 'paper' },
})
</script>

<template>
  <span class="badge" :class="`badge-${type}`">{{ label }}</span>
</template>
