// Selected news. `hidden: true` items appear only after "show all".
// `html` may contain inline links (rendered with v-html).

export default [
  {
    date: 'Jun 2026',
    tags: [{ label: 'talk', type: 'talk' }, { label: 'spotlight', type: 'spotlight' }],
    html: `Presented a precursor of <a class="prose-link" href="https://arxiv.org/abs/2605.31556">our work on auditing VLMs</a>
           as a <strong>spotlight</strong> at the <strong>HOW workshop, CVPR 2026</strong>.`,
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2605.31556' },
      { label: 'workshop', href: 'https://sites.google.com/view/how-cvpr-workshop/2026-workshop' },
    ],
    thumb: '/images/presenting_cvpr.png',
    thumbAlt: 'Presenting at the HOW workshop, CVPR 2026',
  },
  {
    date: 'May 2026',
    tags: [{ label: 'paper', type: 'paper' }],
    html: `With Javier Ferrando, we released <a class="prose-link" href="https://arxiv.org/abs/2605.01555"><strong>interpAgent</strong></a> —
           an autonomous framework to discover and explain features in LLMs (SAEs and other latents).
           To appear at the <strong>AIWILD workshop, ICML 2026</strong> in Seoul.`,
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2605.01555' },
      { label: 'GitHub', href: 'https://github.com/arnaumarin/InterpAgent' },
      { label: 'workshop', href: 'https://agentwild-workshop.github.io/icml2026/' },
    ],
    thumb: '/images/pub/interpagent.png',
    thumbAlt: 'interpAgent overview figure',
  },
  {
    date: 'Dec 2025',
    tags: [{ label: 'paper', type: 'paper' }],
    html: `Our commentary on the state of the art in wireless BCIs — and where the field is heading —
           is out in <em>Nature Electronics</em>.`,
    links: [{ label: 'paper', href: 'https://www.nature.com/articles/s41928-025-01510-2' }],
  },
  {
    date: 'Oct 2025',
    tags: [{ label: 'talk', type: 'talk' }],
    html: `Short talk at the <strong>Kempner Seminar Lunch and Learn</strong> at Harvard
           on agents for interpretability in brain networks. And had good free food!`,
    links: [{ label: 'seminar', href: 'https://lunchandlearnkempner.github.io/' }],
  },
  {
    date: 'Jun 2025',
    tags: [{ label: 'talk', type: 'talk' }],
    hidden: true,
    html: `Invited talk at the <strong>Rafael del Pino Foundation (C4T)</strong>, Boston —
           <em>"Agentic AI for Biology"</em>.`,
  },
  {
    date: 'May 2025',
    tags: [{ label: 'talk', type: 'talk' }],
    hidden: true,
    html: `Invited talk at <strong>MIT</strong>, Cambridge —
           <em>"AI Agents for Automated and Scalable Neuroscience"</em>.`,
  },
  {
    date: 'Apr 2025',
    tags: [{ label: 'talk', type: 'talk' }],
    hidden: true,
    html: `Invited talks on AI agents for neuroscience and spike sorting at
           <strong>Stanford University</strong>, <strong>UC San Francisco</strong>, and the
           <strong>Flatiron Institute</strong> (Simons Foundation). Thanks to the Enigma group,
           Prof. Edward Chang, and Alessio Buccino for the invitations and the engaging discussions.`,
  },
  {
    date: 'Apr 2025',
    tags: [{ label: 'paper', type: 'paper' }],
    hidden: true,
    html: `So happy to see our first paper published! Joint work with Mavi Sanchez-Vives,
           Leo Dalla Porta, and Arnau Manasanch, now out in <em>Communications Biology</em>.`,
    links: [
      { label: 'paper', href: 'https://www.nature.com/articles/s42003-025-07991-3' },
      { label: 'GitHub', href: 'https://github.com/arnaumarin/LFPDeepStates' },
    ],
    thumb: '/images/pub/lfp-deepstates.png',
    thumbAlt: 'LFP DeepStates figure, Communications Biology',
  },
  {
    date: 'Jul 2024',
    tags: [{ label: 'talk', type: 'talk' }],
    hidden: true,
    html: `Invited talk at <strong>ETH Zurich</strong> —
           <em>"Methods to Stably Track Neurons in High-Density Probes"</em>.`,
  },
]
