// Publications.
//   `selected: true`  → shown under the "Selected" tab (the featured set with thumbnails)
//   `cats`            → drives the category filters (a paper can belong to several)
// Tag / category types: neuro · dl · genomics · ai4sci
// Papers under review are listed as "Preprint, <venue>".

export const categories = [
  { key: 'selected', label: 'Selected' },
  { key: 'neuro', label: 'Neuroscience' },
  { key: 'dl', label: 'DL & Interp.' },
  { key: 'genomics', label: 'Genomics' },
  { key: 'ai4sci', label: 'AI for Discovery' },
]

export default [
  // ── DL & Interpretability / AI safety ───────────────────────────
  {
    selected: true,
    title: 'Vision-language models suppress female representations under ambiguous input.',
    authorsHtml: '<strong>A. Marin-Llobet</strong>, S. Henniger, M.R. Banaji.',
    venueHtml: 'Preprint. Oral talk at the <em>HOW Workshop, CVPR</em> 2026.',
    thumb: '/images/pub/vlm-bias.png',
    tags: [{ label: 'DL & Interp.', type: 'dl' }],
    cats: ['dl'],
    links: [
      { label: 'Preprint', href: 'https://arxiv.org/abs/2605.31556' },
      { label: 'Workshop', href: 'https://sites.google.com/view/how-cvpr-workshop/2026-workshop' },
    ],
    tldrHtml: `On gender-ambiguous images, aligned VLMs collapse to “male” even for female-stereotyped
               occupations; our zero-shot LALS metric shows the internal representations and the outputs
               tell different stories.`,
  },
  {
    selected: true,
    title: 'Automated Interpretability and Feature Discovery in Language Models with Agents (interpAgent).',
    authorsHtml: '<strong>A. Marin-Llobet</strong> and J. Ferrando.',
    venueHtml: '<em>ICML 2026 AIWILD Workshop</em>. Preprint, 2026.',
    thumb: '/images/pub/interpagent.png',
    tags: [{ label: 'DL & Interp.', type: 'dl' }, { label: 'AI for Discovery', type: 'ai4sci' }],
    cats: ['dl', 'ai4sci'],
    links: [
      { label: 'Preprint', href: 'https://arxiv.org/abs/2605.01555' },
      { label: 'GitHub', href: 'https://github.com/arnaumarin/InterpAgent' },
    ],
    tldrHtml: `Two cooperating agents — a FeatureFinder and a FeatureExplainer — autonomously discover
               features in LLMs (SAEs and other latents), then generate, stress-test, and rank
               explanations for them.`,
  },
  {
    title: 'Towards agentic auditing and repairing of LM probes under distribution shift.',
    authorsHtml: '<strong>A. Marin-Llobet</strong> et al.',
    venueHtml: 'Preprint.',
    tags: [{ label: 'DL & Interp.', type: 'dl' }],
    cats: ['dl'],
    links: [],
  },
  {
    title: 'The parameters in weight-sparse transformers are interpretable.',
    authorsHtml: '<strong>A. Marin-Llobet</strong> and S. Heimersheim.',
    venueHtml: '<em>Mechanistic Interpretability Workshop, ICML</em> 2026.',
    tags: [{ label: 'DL & Interp.', type: 'dl' }],
    cats: ['dl'],
    links: [{ label: 'Paper', href: 'https://openreview.net/forum?id=Sx5Qth8Wmz' }],
  },
  {
    title: 'Hopfield-enhanced DNNs for artifact-resilient brain state decoding.',
    authorsHtml: '<strong>A. Marin-Llobet</strong> et al.',
    venueHtml: '<em>NeurIPS Workshop on Associative Memory &amp; Hopfield Networks</em>, 2023.',
    tags: [{ label: 'DL & Interp.', type: 'dl' }, { label: 'Neuroscience', type: 'neuro' }],
    cats: ['dl', 'neuro'],
    links: [],
  },

  // ── AI Agents for Automated Scientific Discovery ────────────────
  {
    selected: true,
    title: 'SpikeAgent: automated curation of neural recordings with reasoning-enabled LLM agents.',
    authorsHtml: 'Z. Lin* and <strong>A. Marin-Llobet</strong>* et al.',
    venueHtml: '<em>Nature Neuroscience</em>, accepted in principle, 2026.',
    thumb: '/images/pub/spikeagent.png',
    tags: [{ label: 'Neuroscience', type: 'neuro' }, { label: 'AI for Discovery', type: 'ai4sci' }],
    cats: ['neuro', 'ai4sci'],
    links: [
      { label: 'Preprint', href: 'https://www.biorxiv.org/content/10.1101/2025.02.11.637754v1' },
      { label: 'GitHub', href: 'https://github.com/spikeagent/spikeagent' },
    ],
    tldrHtml: `A multimodal LLM agent that automates the full spike-sorting workflow — preprocessing,
               sorting, and visual curation — with step-by-step reasoning a human can audit.`,
  },
  {
    selected: true,
    title: 'An AI agent for cell-type specific interpretable brain-computer interfaces.',
    authorsHtml: '<strong>A. Marin-Llobet</strong>, Z. Lin, J. Baek et al.',
    venueHtml: 'Preprint, <em>bioRxiv</em>, 2025.',
    thumb: '/images/pub/cellagent.png',
    tags: [{ label: 'Neuroscience', type: 'neuro' }, { label: 'AI for Discovery', type: 'ai4sci' }],
    cats: ['neuro', 'ai4sci'],
    links: [{ label: 'Preprint', href: 'https://www.biorxiv.org/content/10.1101/2025.09.11.675660v1' }],
    tldrHtml: `An AI agent that turns in vivo recordings into cell-type-specific BCIs: it infers the cell
               type behind each spike and validates its calls against spatial brain atlases and the
               literature.`,
  },

  // ── Computational Neuroscience ──────────────────────────────────
  {
    selected: true,
    title: 'Wireless recording with ultrathin brain interfaces.',
    authorsHtml: '<strong>A. Marin-Llobet</strong> et al.',
    venueHtml: '<em>Nature Electronics</em>, 8:1144–1145, 2025.',
    thumb: '/images/pub/wireless-bci.png',
    tags: [{ label: 'Neuroscience', type: 'neuro' }],
    cats: ['neuro'],
    links: [{ label: 'Paper', href: 'https://www.nature.com/articles/s41928-025-01510-2' }],
    tldrHtml: `Commentary on ultrathin, wireless brain implants that stream high-bandwidth neural data
               without cables — and what it will take to make them chronic and clinical.`,
  },
  {
    title: 'Realigning representational drift in mouse visual cortex.',
    authorsHtml: 'H. Shen*, S. Zhao*, <strong>A. Marin-Llobet</strong>* et al.',
    venueHtml: '<em>Nature Biomedical Engineering</em>, in press, 2026.',
    tags: [{ label: 'Neuroscience', type: 'neuro' }],
    cats: ['neuro'],
    links: [],
  },
  {
    selected: true,
    title: 'Neural models for detection and classification of brain states and transitions.',
    authorsHtml: '<strong>A. Marin-Llobet</strong>*, A. Manasanch* et al.',
    venueHtml: '<em>Communications Biology</em>, 8(1):599, 2025.',
    thumb: '/images/pub/lfp-deepstates.png',
    tags: [{ label: 'Neuroscience', type: 'neuro' }],
    cats: ['neuro'],
    links: [
      { label: 'Paper', href: 'https://www.nature.com/articles/s42003-025-07991-3' },
      { label: 'GitHub', href: 'https://github.com/arnaumarin/LFPDeepStates' },
    ],
    tldrHtml: `Deep learning models that detect and classify brain states and their transitions directly
               from raw LFPs — including an autoencoder that uncovers and helps explain a previously
               undescribed brain state.`,
  },
  {
    title: 'Riemannian geometry for classification of brain states with intracortical recordings.',
    authorsHtml: '<strong>A. Marin-Llobet</strong> et al.',
    venueHtml: '<em>Advanced Intelligent Systems</em>, e202500480, 2025.',
    tags: [{ label: 'Neuroscience', type: 'neuro' }],
    cats: ['neuro'],
    links: [],
  },
  {
    title: 'End-to-end multimodal deep learning for months-long neural decoding.',
    authorsHtml: 'Y. He* and <strong>A. Marin-Llobet</strong>* et al.',
    venueHtml: 'Preprint, 2024.',
    tags: [{ label: 'Neuroscience', type: 'neuro' }],
    cats: ['neuro'],
    links: [],
  },
  {
    title: 'Efficient on-chip cross-subject local field potential decoding for implantable neural interfaces.',
    authorsHtml: '<strong>A. Marin-Llobet</strong> et al.',
    venueHtml: '<em>IEEE International Joint Conference on Neural Networks (IJCNN)</em>, 2025.',
    tags: [{ label: 'Neuroscience', type: 'neuro' }],
    cats: ['neuro'],
    links: [],
  },

  // ── Genomics ────────────────────────────────────────────────────
  {
    selected: true,
    title: 'MECP2 and SH3KBP1 variants associated with autism spectrum disorder and immune dysregulation.',
    authorsHtml: '<strong>A. Marin-Llobet</strong>, C. Hernando-Davalillo, H. Baide Mairena, P. Llobet-Agullo et al.',
    venueHtml: '<em>Frontiers in Immunology</em>, 17:1814088, 2026.',
    thumb: '/images/pub/mecp2.png',
    tags: [{ label: 'Genomics', type: 'genomics' }],
    cats: ['genomics'],
    links: [
      { label: 'Paper', href: 'https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2026.1814088/full' },
    ],
    tldrHtml: `Two boys with autism, immune dysregulation, and congenital cardiac anomalies, each carrying
               a distinct X-chromosome copy-number variant (an <em>MECP2</em> duplication and an
               <em>SH3KBP1</em> variant) — a case for joint genetic–immune workups in ASD.`,
  },
]
