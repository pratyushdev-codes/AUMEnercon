export type Project = {
  title: string;
  tag: string;
  location: string;
  span: 7 | 5 | 4;
  /** Omit for text-only cards on the projects page. */
  image?: string;
};

export type ProjectCategoryId =
  | 'international'
  | 'residential'
  | 'commercial'
  | 'government'
  | 'pharmaceutical'
  | 'industrial'
  | 'healthcare'
  | 'hospitality'
  | 'informationTechnology';

/** Order and labels for `/projects` category filters. */
export const PROJECT_PAGE_CATEGORY_ORDER: { id: ProjectCategoryId; label: string }[] = [
  { id: 'international', label: 'International' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'government', label: 'Government Projects' },
  { id: 'pharmaceutical', label: 'Pharmaceutical' },
  { id: 'industrial', label: 'Industrial' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'hospitality', label: 'Hospitality' },
  { id: 'informationTechnology', label: 'Information Technology' },
];

export const PROJECT_TITLES_BY_CATEGORY: Record<ProjectCategoryId, readonly string[]> = {
  international: [
    'Abu Dhabi Water and Electricity Authority',
    'Transpro Abu Dhabi',
    'Dubai Electricity and Water authority',
  ],
  residential: ['Nirman Satva'],
  commercial: [
    '4D Square Mega Mall ',
    'Venus Stratum',
    'Rajpath arena — Hero view',
    'Landmark Honda',
    'Landmark Mercedes',
  ],
  government: [
    'HPCL pumping station and plant',
    'Airport cargo terminal',
    'Maritime museum',
    'Sabarmati Riverfront 2016',
    'Kankaria Automatic parking',
  ],
  pharmaceutical: ['Cadila Pharma'],
  industrial: ['Power · Electrical', 'ABL substation'],
  healthcare: [
    'Regional cancer centre & hospital',
    'Sardar Vallabhbhai Patel Institute of Medical Sciences & Research (SVP)',
  ],
  hospitality: ['Comfort Inn'],
  informationTechnology: [
    'Tata Consultancy Services corporate office, GIFT CITY, Gandhinagar',
    'K. Raheja I.T. Park',
  ],
};

const projectByTitle = new Map<string, Project>();

export const projects: Project[] = [
  {
    title: 'Maritime museum',
    tag: 'Government Projects',
    location: '',
    span: 7,
    image: '/project-smart-campus.png',
  },
  {
    title: 'Project Site Team',
    tag: 'Commercial',
    location: 'Ahmedabad, Gujarat',
    span: 5,
    image: '/project-site-team.jpeg',
  },
  {
    title: 'Sardar Vallabhbhai Patel Institute of Medical Sciences & Research (SVP)',
    tag: 'Healthcare',
    location: 'Ahmedabad, Gujarat',
    span: 4,
    image: '/project-svp-hospital.png',
  },
  {
    title: 'Sabarmati Riverfront 2016',
    tag: 'Government Projects',
    location: 'Ahmedabad, Gujarat',
    span: 7,
    image: '/project-riverfront-night.png',
  },
  {
    title: '4D Square Mega Mall ',
    tag: 'Commercial',
    location: 'Ahmedabad, Gujarat',
    span: 5,
    image: '/project-commercial-building.png',
  },
  {
    title: 'Fuji Silvertech RCC Plant',
    tag: 'Industrial',
    location: 'Bagodara, Gujarat',
    span: 4,
    image: '/project-fuji-silvertech.png',
  },
  {
    title: 'Venus Stratum',
    tag: 'Commercial',
    location: 'Ahmedabad, Gujarat',
    span: 7,
    image: '/project-mega-mall-dusk.png',
  },
  {
    title: 'Tata Consultancy Services corporate office, GIFT CITY, Gandhinagar',
    tag: 'Information Technology',
    location: 'Gandhinagar, Gujarat',
    span: 5,
    image: '/TCS GIFT.jpeg',
  },
  {
    title: 'Rajpath arena — Hero view',
    tag: 'Commercial',
    location: 'Ahmedabad, Gujarat',
    span: 4,
    image: '/hero-rajpath-arena.png',
  },
  {
    title: 'Airport cargo terminal',
    tag: 'Government Projects',
    location: 'India',
    span: 5,
    image: '/Airport cargo terminal.jpeg',
  },

  {
    title: 'Cadila Pharma',
    tag: 'Pharmaceutical',
    location: 'India',
    span: 7,
    image: '/Cadila Pharma.jpeg',
  },
  {
    title: 'Comfort Inn',
    tag: 'Hospitality',
    location: 'India',
    span: 5,
    image: '/Comfort Inn.jpeg',
  },



  {
    title: 'K. Raheja I.T. Park',
    tag: 'Information Technology',
    location: 'India',
    span: 5,
    image: '/K.Raheja I.T. Park.jpeg',
  },

  {
    title: 'Landmark Honda',
    tag: 'Commercial',
    location: 'India',
    span: 7,
    image: '/Landmark Honda.jpeg',
  },
  {
    title: 'Landmark Mercedes',
    tag: 'Commercial',
    location: 'India',
    span: 5,
    image: '/Landmark Mercedes.jpeg',
  },

  {
    title: 'Nirman Satva',
    tag: 'Residential',
    location: 'India',
    span: 7,
    image: '/Nirman Satva.jpeg',
  },
  {
    title: 'Kankaria Automatic parking',
    tag: 'Government Projects',
    location: 'Ahmedabad, Gujarat',
    span: 5,
    image: '/Kankaria Automatic parking.jpeg',
  },
  {
    title: 'HPCL pumping station and plant',
    tag: 'Government Projects',
    location: 'India',
    span: 7,
    image: '/HPCL pumping station and plant.jpeg',
  },
  {
    title: 'ABL substation',
    tag: 'Industrial',
    location: 'India',
    span: 4,
    image: '/ABL substation.jpeg',
  },
  {
    title: 'Regional cancer centre & hospital',
    tag: 'Healthcare',
    location: 'India',
    span: 5,
    image: '/Reginal cancer centre & hospital.jpeg',
  },
  {
    title: 'Abu Dhabi Water and Electricity Authority',
    tag: 'International',
    location: 'Abu Dhabi, UAE',
    span: 7,
  },
  {
    title: 'Transpro Abu Dhabi',
    tag: 'International',
    location: 'Abu Dhabi, UAE',
    span: 5,
  },
  {
    title: 'Dubai Electricity and Water authority',
    tag: 'International',
    location: 'Dubai, UAE',
    span: 7,
  },
  {
    title: 'Power · Electrical',
    tag: 'Industrial',
    location: 'India',
    span: 4,
  },
];

for (const p of projects) {
  projectByTitle.set(p.title, p);
}

export function getProjectsForPageCategory(categoryId: ProjectCategoryId): Project[] {
  const titles = PROJECT_TITLES_BY_CATEGORY[categoryId];
  return titles.map((title) => {
    const p = projectByTitle.get(title);
    if (!p) {
      throw new Error(`Project not found for category ${categoryId}: ${JSON.stringify(title)}`);
    }
    return p;
  });
}

/** Every project that appears in at least one `/projects` category, in category order, deduped by title. */
export function getAllProjectsForProjectsPage(): Project[] {
  const seen = new Set<string>();
  const out: Project[] = [];
  for (const { id } of PROJECT_PAGE_CATEGORY_ORDER) {
    for (const p of getProjectsForPageCategory(id)) {
      if (seen.has(p.title)) continue;
      seen.add(p.title);
      out.push(p);
    }
  }
  return out;
}

/** Home page (#projects) shows only these, in this order. `/projects` uses the full `projects` list. */
export const HOME_PROJECT_TITLES = [
  'Sardar Vallabhbhai Patel Institute of Medical Sciences & Research (SVP)',
  '4D Square Mega Mall ',
  'Tata Consultancy Services corporate office, GIFT CITY, Gandhinagar',
  'Venus Stratum',
  'Cadila Pharma',
  'Comfort Inn',
] as const;

export const projectsHomeFeatured = HOME_PROJECT_TITLES.map((title) => {
  const project = projects.find((p) => p.title === title);
  if (!project) {
    throw new Error(`Home featured project not found in projects: ${JSON.stringify(title)}`);
  }
  return project;
});
