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
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=4tLG8zwAAAAJ&hl=ca&oi=ao', icon: 'scholar' },
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
  `I am a PhD candidate in Computational Neuroscience at
   <a class="prose-link" href="https://seas.harvard.edu/">Harvard University</a>, where I mostly work with
   <a class="prose-link" href="https://psychology.fas.harvard.edu/people/mahzarin-r-banaji">Mahzarin Banaji</a>,
   <a class="prose-link" href="https://crisp.seas.harvard.edu/">Demba Ba</a>, and
   <a class="prose-link" href="https://nali.seas.harvard.edu/">Na Li</a>, among other collaborators.
   Before that, I received my B.Sc. in Electrical Engineering from the
   <a class="prose-link" href="https://telecos.upc.edu/en">UPC-BarcelonaTech</a> in 2022.`,

  `I am mostly interested in <span class="accent">computational neuroscience</span>, in opening the
   <span class="accent">black box of the brain</span> to understand how it works and how it makes decisions,
   from both the <span class="accent">cognitive</span> and the <span class="accent">mechanistic</span> side.
   To do that, I develop computational methods, such as <span class="accent">autonomous agents</span> and other
   <span class="accent">AI-based approaches</span>, that let me probe and make sense of it. Most recently,
   I've also been pursuing work and collaborations in <span class="accent">AI interpretability</span>, extending
   these autonomous, interpretability-driven approaches to language models to support
   <span class="accent">safer and more reliable AI systems</span>.`,
]
