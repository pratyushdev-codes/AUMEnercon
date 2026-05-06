/**
 * Extended “What We Do” content for the dedicated detail route (deeper copy + structure).
 * Landing page uses {@link ./whatWeDoSection.ts} for the shorter in-flow section.
 */

export const whatWeDoDetailHero = {
  eyebrow: 'Capabilities & delivery',
  title: 'Electrical infrastructure, engineered end-to-end.',
  subtitle:
    'From HT switchyards at 66KV through LT distribution, ELV, and turnkey lighting — we own design, procurement, execution, testing, and lifecycle support with safety and compliance at the centre.',
  backLinkLabel: 'Back to home',
};

export const whatWeDoDetailMetrics = [
  { value: '20+', label: 'Years on complex industrial & infra work' },
  { value: '50+', label: 'Large-scale projects delivered across India' },
  { value: '₹100cr+', label: 'Single-programme value bands we routinely execute' },
  { value: 'Class A', label: 'Govt. approved contractor — disciplined delivery' },
] as const;

export const whatWeDoDetailOverview = {
  title: 'How we work with owners & consultants',
  paragraphs: [
    'Aum Enercon Private Limited partners with developers, public bodies, and industrial operators who need one accountable team for electrical scope — not a patchwork of subcontractors. We align early on load forecasts, standards, interfaces with civil and MEP, and commissioning criteria so downstream surprises are eliminated.',
    'Our turnkey model covers High Tension (HT), Low Tension (LT), extra-low voltage (ELV) systems, and large-format lighting. Every package is executed with documented QA/QC, method statements where required, and handover dossiers that support audits and O&M.',
  ],
};

export const whatWeDoDetailPhases = [
  {
    title: 'Electrical design & engineering',
    summary:
      'Load studies, single-line diagrams, protection grading, cable sizing, and panel schedules — coordinated with architectural and structural disciplines.',
    outcomes: [
      'Basis of design and assumption log',
      'Drawings and BOQ aligned to tender / GFC',
      'Value engineering options where schedule and capex allow',
    ],
  },
  {
    title: 'Procurement & quality assurance',
    summary:
      'Vendor qualification, factory inspections where applicable, and receipt checks against approved make lists and test certificates.',
    outcomes: [
      'Traceability from PO to installation',
      'Inspection test plans (ITPs) and hold points',
      'Consolidated material submittals for consultant sign-off',
    ],
  },
  {
    title: 'Installation & on-site execution',
    summary:
      'Civil coordination, cable routing, erection of HT/LT equipment, grounding, and ELV backbone — supervised by engineers and experienced charge hands.',
    outcomes: [
      'Daily planning tied to master schedule',
      'Tagging and as-built mark-ups for commissioning',
      'Clean, segregated workfaces and cable discipline',
    ],
  },
  {
    title: 'Testing & commissioning',
    summary:
      'Insulation resistance, breaker timing, relay testing, earthing integrity, and ELV loop checks — documented for owner and grid / DISCOM where relevant.',
    outcomes: [
      'Test sheets and snag closure register',
      'Energization checklists and witness packs',
      'Training for facility teams on critical operations',
    ],
  },
  {
    title: 'Post-project support & maintenance',
    summary:
      'Warranty support, spare recommendations, and optional AMC structures so performance is sustained after handover.',
    outcomes: [
      'O&M manuals and as-built documentation',
      'Escalation path for defects liability period',
      'Lifecycle-oriented recommendations (spares, upgrades)',
    ],
  },
] as const;

export const whatWeDoDetailServices = [
  {
    title: 'High tension (HT) — 3.3KV to 66KV',
    tagline: 'Transmission-grade reliability for plants and campuses.',
    body:
      'We engineer and build HT infrastructure that must stay online under heavy loading and fault conditions — switchyards, transformers, ring main units, protection and metering, and cable systems sized for growth.',
    deliverables: [
      'Outdoor / indoor substation layouts and equipment specs',
      'Protection, interlocking, and earthing design',
      'Installation, testing, and liaison for grid / authority requirements',
    ],
    note: 'Typical contexts: industrial parks, hospitals, IT campuses, public infrastructure, large residential townships.',
  },
  {
    title: 'Low tension (LT) distribution',
    tagline: 'Safe, scalable power inside the fence.',
    body:
      'LT is where availability meets everyday operations: main and sub-main panels, bus ducts, rising mains, final circuits, and harmonic-aware layouts for modern loads.',
    deliverables: [
      'Panel builds / FAT coordination',
      'Cable containment and fire-performance aware routing',
      'Load balancing, spare capacity, and modularity for tenant change',
    ],
    note: 'We design for maintainability — labelling, isolation philosophy, and room for expansion without wholesale rework.',
  },
  {
    title: 'ELV & security systems',
    tagline: 'Safety, surveillance, and access as one ecosystem.',
    body:
      'CCTV, access control, fire detection and alarm, public address, and structured cabling — integrated so operators get coherent alarms and audit trails.',
    deliverables: [
      'System architecture and head-end planning',
      'Device placement coordinated with architecture and IT',
      'Testing, training, and handover with OEM documentation',
    ],
    note: 'Suited to airports, metros interfaces, corporate offices, healthcare, and sensitive government facilities.',
  },
  {
    title: 'Turnkey lighting',
    tagline: 'Roads, plants, and civic scale — lit for performance.',
    body:
      'We deliver lighting that balances lux targets, glare control, energy use, and maintenance access — from arterial roads to process areas and façades.',
    deliverables: [
      'Photometric intent and equipment selection',
      'Poles, cabling, and control philosophy (groups, dimming, CMS)',
      'Commissioning and lux verification where specified',
    ],
    note: 'Packages can be bundled with HT/LT so interfaces and energization are single-point accountable.',
  },
] as const;

export const whatWeDoDetailDesign = {
  title: 'Design excellence — what “optimized” means on our drawings',
  intro:
    'Our engineers work in the loop with procurement and site so documents stay buildable. Optimization is not cost-cutting at the expense of safety; it is clarity, redundancy where needed, and standards compliance you can defend in an audit.',
  pillars: [
    {
      title: 'Efficiency & load discipline',
      text: 'Realistic diversity and demand factors, harmonic and motor-start considerations, and voltage drop budgets agreed up front.',
    },
    {
      title: 'Standards & code alignment',
      text: 'National and international references as specified — earthing, selectivity, cable derating, and ELV segregation handled explicitly.',
    },
    {
      title: 'Future-ready layouts',
      text: 'Spare ways, riser capacity, and backbone pathways that avoid expensive retrofit when loads grow or tenants change.',
    },
  ],
  closing:
    'Design deliverables are supported by calculations, mock-ups where useful, and peer review on critical HV and protection packages.',
};

export const whatWeDoDetailSectors = [
  'Industrial & manufacturing',
  'Commercial & IT campuses',
  'Healthcare & institutions',
  'Public infrastructure & civic projects',
  'Residential & mixed-use developments',
] as const;

export const whatWeDoDetailWorkforce = {
  title: 'People who can run complex sites',
  lead:
    'Large electrical programmes need judgement under pressure — our site leadership combines experienced engineers, supervisors, and certified technicians who have worked together on demanding jobs.',
  bullets: [
    'Structured reporting from site to project control',
    'Skilled trades for cable pulling, termination, and panel work',
    'Familiarity with consultant workflows, RFI cycles, and inspection holds',
  ],
  closing:
    'We staff for the real peak of execution, not a paper org chart — so critical paths keep moving.',
};

export const whatWeDoDetailSafety = {
  title: 'Labour safety & compliance',
  lead:
    'Safety is embedded in method statements, toolbox talks, and non-negotiable PPE. Sites are supervised with permit-to-work discipline where hazards warrant it.',
  bullets: [
    'Mandatory PPE and enforcement at gates and workfaces',
    'Scheduled audits, near-miss learning, and risk reassessment after scope changes',
    'Compliance with statutory requirements and client EHS programmes',
    'Incident prevention focus — isolation, tagging, and test-before-touch culture',
  ],
  closing: 'Target: zero harm — through planning, visible leadership, and consistent standards.',
};

export const whatWeDoDetailTraining = {
  title: 'Training & competency',
  lead:
    'Competency is renewed continuously — especially when technology or site conditions change.',
  bullets: [
    'Safety inductions, tool-box talks, and emergency drills',
    'Technical sessions on HV safety, testing instruments, and new equipment classes',
    'Skill upgrades for productivity without sacrificing quality',
    'Hazard awareness — arc flash, confined spaces, lifting, and public interface',
  ],
  closing:
    'Every person understands not only what to do, but why the control measure exists.',
};

export const whatWeDoDetailExperience = {
  title: 'Track record that de-risks your programme',
  lead:
    'Two decades of execution means we have seen the failure modes — interface gaps, late material, protection mis-coordination, and commissioning pressure — and we plan for them early.',
  bullets: [
    '50+ large-scale projects across Indian states',
    'Comfort with high-value, multi-crore electrical packages',
    'Reputation for holding dates when dependencies are managed jointly',
    'Experience coordinating with civil, HVAC, plumbing, IT, and specialist OEMs',
  ],
  closing:
    'We translate that history into tighter risk registers and more predictable outcomes for your stakeholders.',
};

export const whatWeDoDetailCommitment = {
  title: 'Our commitment',
  paragraphs: [
    'We deliver more than cables and panels — we deliver dependable power, credible documentation, and teams you trust on live sites.',
    'Whether you are at concept stage or mid-construction, we will align our scope, our safety culture, and our engineering standards to the success of your project.',
  ],
  cta: {
    label: 'Discuss your scope',
    href: '/#contact',
  },
} as const;

export const whatWeDoDetailNav = [
  { id: 'wwd-overview', label: 'Overview' },
  { id: 'wwd-execution', label: 'Execution' },
  { id: 'wwd-services', label: 'Services' },
  { id: 'wwd-design', label: 'Design' },
  { id: 'wwd-people', label: 'People & safety' },
  { id: 'wwd-record', label: 'Track record' },
  { id: 'wwd-commit', label: 'Commitment' },
] as const;
