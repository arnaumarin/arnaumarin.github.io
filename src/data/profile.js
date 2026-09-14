// Identity, contact, socials, and the bio/funding HTML blocks.

export const name = 'Arnau Marin-Llobet'
export const tagline = 'PhD candidate at Harvard'
export const photo = '/images/profile.png'

// Email assembled at runtime (kept out of the static HTML source).
export const emails = [
  { user: 'amarinllobet', domain: 'g.harvard.edu', label: 'Harvard' },
  { user: 'a.marinllobet', domain: 'gmail.com', label: 'Gmail' },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/arnaumarin', icon: 'github' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=4tLG8zwAAAAJ&hl=en&oi=ao', icon: 'scholar' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arnau-marin-llobet', icon: 'linkedin' },
  { label: 'X', href: 'https://twitter.com/Arnauya', icon: 'x' },
]

export const fundingHtml = `My PhD is currently supported by
  <a class="prose-link" href="https://coefficientgiving.org/">Coefficient Giving</a>, the
  <a class="prose-link" href="https://mbb.harvard.edu/">Harvard Mind, Brain, Behavior Interfaculty Initiative</a>,
  and the <a class="prose-link" href="https://rcc.harvard.edu/">RCC-Harvard Graduate Fellowship</a>;
  previously by the <a class="prose-link" href="https://frdelpino.es/">Fundación Rafael del Pino</a>
  and <a class="prose-link" href="https://www.neuropac.info">NSF-NeuroPAC</a>, among others.`

export const bioHtml = [
  `I am a PhD candidate at
   <a class="prose-link" href="https://seas.harvard.edu/">Harvard University</a>, where I mostly work with
   <a class="prose-link" href="https://psychology.fas.harvard.edu/people/mahzarin-r-banaji">Mahzarin Banaji</a>,
   <a class="prose-link" href="https://crisp.seas.harvard.edu/">Demba Ba</a>, and
   <a class="prose-link" href="https://nali.seas.harvard.edu/">Na Li</a>, among other collaborators.
   I received my B.Sc. in Electrical Engineering from the
   <a class="prose-link" href="https://telecos.upc.edu/en">UPC-BarcelonaTech</a> in 2022.`,

  `Recently, I completed the
   <a class="prose-link" href="https://www.anthropic.com/"><img
     src="/images/anthropic-wordmark.png" alt="Anthropic" class="inline-anthropic" /></a>
   STEM Research Fellowship, working on interpretability in biology models, and previously I interned
   at <a class="prose-link" href="https://machinelearning.apple.com/"><svg class="inline-apple" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>Apple</a>, working on explainable
   long-horizon agents.`,

  `I am mostly interested in <span class="accent">computational neuroscience</span>, in opening the
   <span class="accent">black box of the brain</span> to understand how it works and how it makes decisions,
   from both the <span class="accent">cognitive</span> and the <span class="accent">mechanistic</span> side.
   To do that, I develop computational methods, such as <span class="accent">autonomous agents</span> and other
   <span class="accent">AI-based approaches</span>, that let me probe and make sense of it. Most recently,
   I've also been pursuing work and collaborations in <span class="accent">Interpretability</span>, extending
   these autonomous, interpretability-driven approaches to language models to support
   <span class="accent">safer and more reliable AI systems</span>.`,
]
