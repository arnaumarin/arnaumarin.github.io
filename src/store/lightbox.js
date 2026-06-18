import { reactive } from 'vue'

// Shared lightbox state: any thumbnail can pop an image into the overlay.
export const lightbox = reactive({
  src: null,
  alt: '',
  open(src, alt = '') {
    this.src = src
    this.alt = alt
  },
  close() {
    this.src = null
    this.alt = ''
  },
})
