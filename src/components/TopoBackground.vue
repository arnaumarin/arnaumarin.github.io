<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvas = ref(null)
let raf = null
let ctx = null
let w = 0
let h = 0
let t = 0
let running = false

// Smooth pseudo-noise from summed sines — cheap, no dependencies.
function field(x, y, time) {
  return (
    Math.sin(x * 1.7 + time) +
    Math.sin(y * 2.1 - time * 0.8) +
    Math.sin((x + y) * 1.3 + time * 0.5) +
    Math.sin(Math.hypot(x - 0.5, y - 0.5) * 6 - time)
  )
}

// Marching-squares contour lines over a coarse grid → a topographic map.
function draw() {
  ctx.clearRect(0, 0, w, h)
  ctx.lineWidth = 1
  ctx.strokeStyle = 'rgba(47, 127, 147, 0.5)'

  const cols = 46
  const rows = Math.round(cols * (h / w))
  const cw = w / cols
  const ch = h / rows
  const levels = [-2, -1, 0, 1, 2]

  for (const level of levels) {
    ctx.beginPath()
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x0 = i / cols
        const y0 = j / rows
        const x1 = (i + 1) / cols
        const y1 = (j + 1) / rows
        const a = field(x0, y0, t)
        const b = field(x1, y0, t)
        const c = field(x1, y1, t)
        const d = field(x0, y1, t)
        const px = i * cw
        const py = j * ch
        // Linear interpolation of crossing points on each cell edge.
        const top = (level - a) / (b - a)
        const right = (level - b) / (c - b)
        const bottom = (level - d) / (c - d)
        const left = (level - a) / (d - a)
        const segs = []
        if ((a < level) !== (b < level)) segs.push([px + top * cw, py])
        if ((b < level) !== (c < level)) segs.push([px + cw, py + right * ch])
        if ((d < level) !== (c < level)) segs.push([px + bottom * cw, py + ch])
        if ((a < level) !== (d < level)) segs.push([px, py + left * ch])
        if (segs.length >= 2) {
          ctx.moveTo(segs[0][0], segs[0][1])
          ctx.lineTo(segs[1][0], segs[1][1])
        }
      }
    }
    ctx.stroke()
  }
}

let last = 0
function loop(now) {
  if (!running) return
  if (now - last > 55) {
    // throttle ~18fps for a slow, calm drift
    t += 0.012
    draw()
    last = now
  }
  raf = requestAnimationFrame(loop)
}

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  w = canvas.value.clientWidth
  h = canvas.value.clientHeight
  canvas.value.width = w * dpr
  canvas.value.height = h * dpr
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

function onVisibility() {
  if (document.hidden) {
    running = false
  } else if (!running) {
    running = true
    raf = requestAnimationFrame(loop)
  }
}

onMounted(() => {
  const desktop = window.matchMedia('(min-width: 1024px)').matches
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!desktop) return

  ctx = canvas.value.getContext('2d')
  resize()
  window.addEventListener('resize', resize)

  if (reduced) {
    draw() // single static render, no animation
    return
  }
  running = true
  document.addEventListener('visibilitychange', onVisibility)
  raf = requestAnimationFrame(loop)
})

onBeforeUnmount(() => {
  running = false
  if (raf) cancelAnimationFrame(raf)
  window.removeEventListener('resize', resize)
  document.removeEventListener('visibilitychange', onVisibility)
})
</script>

<template>
  <div class="topo" aria-hidden="true">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<style scoped>
.topo {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  display: none;
}
@media (min-width: 1024px) {
  .topo {
    display: block;
  }
}
.topo canvas {
  width: 100%;
  height: 100%;
  opacity: 0.22;
  /* Fade the contours in from the page edges, clear behind the column. */
  -webkit-mask-image: radial-gradient(
    ellipse 40% 70% at 50% 50%,
    transparent 0%,
    transparent 38%,
    #000 78%
  );
  mask-image: radial-gradient(
    ellipse 40% 70% at 50% 50%,
    transparent 0%,
    transparent 38%,
    #000 78%
  );
}
</style>
