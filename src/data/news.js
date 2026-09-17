// News, newest first. Keep each entry to 1–2 short sentences.
// The first 4 are visible; the rest sit behind "Show more".
// Talk entries with a `thumb` show their photo.

export default [
  {
    date: 'Sep 2026',
    html: `Gave a short interview to Catalan media on the recent OpenAI and Hugging Face incident and AI safety.`,
    links: [
      { label: 'RAC1', href: 'https://www.rac1.cat/societat/20260916/372112/arnau-marin-llobet-catala-treballat-anthropic-internament-discutint-ia-podria-encara-perillosa-elmon.html' },
      { label: 'La Vanguardia', href: 'https://www.lavanguardia.com/neo/20260916/11636457/arnau-marin-llobet-catalan-trabajado-anthropic-internamente-discutiendo-ia-aun-mas-peligrosa-epm.html' },
      { label: 'Nació Digital', href: 'https://naciodigital.cat/societat/un-exinvestigador-catala-danthropic-alerta-que-la-ia-es-mes-perillosa-del-que-la-gent-sap.html' },
    ],
  },
  {
    date: 'Aug 2026',
    html: `Our <a class="prose-link" href="https://arxiv.org/abs/2605.31556">paper</a> auditing gender bias
           in VLMs, with Simon Henniger and Mahzarin Banaji, was accepted at <strong>EMNLP 2026 (Main)</strong>!`,
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2605.31556' },
      { label: 'X thread', href: 'https://x.com/Arnauya/status/2090712173307969952' },
    ],
  },
  {
    date: 'Jul 2026',
    html: `We posted a new preprint on LLM cognitive distortions with Mahzarin Banaji and Steve Lehr.`,
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2607.20695' }],
  },
  {
    date: 'Jul 2026',
    html: `Started the <a class="prose-link" href="https://www.anthropic.com/"><strong>Anthropic STEM
           Fellowship</strong></a> in San Francisco.`,
  },
  {
    date: 'Jun 2026',
    html: `New preprint — <a class="prose-link" href="https://arxiv.org/abs/2606.18667"><strong>Can neurons
           speak?</strong></a> We decode single-neuron spike trains into plain-language narration.`,
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2606.18667' },
      { label: 'GitHub', href: 'https://github.com/arnaumarin/neurrator' },
      { label: 'X thread', href: 'https://x.com/Arnauya/status/2067476793762947422' },
    ],
  },
  {
    date: 'Jun 2026',
    tags: [{ label: 'talk', type: 'talk' }],
    html: `Gave a <strong>spotlight talk</strong> on interpretability for gender bias in VLMs at the
           <strong>HOW workshop, CVPR 2026</strong>.`,
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2605.31556' },
      { label: 'workshop', href: 'https://sites.google.com/view/how-cvpr-workshop/2026-workshop' },
    ],
    thumb: '/images/presenting_cvpr.png',
    thumbAlt: 'Presenting at the HOW workshop, CVPR 2026',
  },
  {
    date: 'May 2026',
    html: `Released <a class="prose-link" href="https://arxiv.org/abs/2605.01555"><strong>interpAgent</strong></a>,
           agents that discover and explain features in LLMs. To appear at the AIWILD workshop, ICML 2026.`,
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2605.01555' },
      { label: 'GitHub', href: 'https://github.com/arnaumarin/InterpAgent' },
      { label: 'workshop', href: 'https://agentwild-workshop.github.io/icml2026/' },
    ],
  },
  {
    date: 'Dec 2025',
    html: `Our commentary on wireless BCIs is out in <em>Nature Electronics</em>.`,
    links: [{ label: 'paper', href: 'https://www.nature.com/articles/s41928-025-01510-2' }],
  },
  {
    date: 'Oct 2025',
    tags: [{ label: 'talk', type: 'talk' }],
    html: `Short talk on agents for interpretability in brain networks at the
           <a class="prose-link" href="https://lunchandlearnkempner.github.io/">Kempner Lunch and Learn</a>, Harvard.`,
  },
  {
    date: 'Jun 2025',
    tags: [{ label: 'talk', type: 'talk' }],
    html: `Invited talk on agentic AI for biology at the <strong>Rafael del Pino Foundation (C4T)</strong>, Boston.`,
  },
  {
    date: 'May 2025',
    tags: [{ label: 'talk', type: 'talk' }],
    html: `Invited talk at <strong>MIT</strong> on AI agents for automated and scalable neuroscience.`,
  },
  {
    date: 'Apr 2025',
    tags: [{ label: 'talk', type: 'talk' }],
    html: `Invited talks on AI agents for neuroscience at <strong>Stanford</strong>, <strong>UCSF</strong>,
           and the <strong>Flatiron Institute</strong>.`,
  },
  {
    date: 'Apr 2025',
    html: `Our first paper is out in <em>Communications Biology</em>!`,
    links: [
      { label: 'paper', href: 'https://www.nature.com/articles/s42003-025-07991-3' },
      { label: 'GitHub', href: 'https://github.com/arnaumarin/LFPDeepStates' },
    ],
  },
  {
    date: 'Jul 2024',
    tags: [{ label: 'talk', type: 'talk' }],
    html: `Invited talk at <strong>ETH Zurich</strong> on stably tracking neurons in high-density probes.`,
  },
]
