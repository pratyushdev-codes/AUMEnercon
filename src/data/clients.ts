export type ClientEntry = {
  name: string;
  /** URL path for a file in `public/`, or null when no logo exists */
  logoSrc: string | null;
};

/** Build a root URL for a `public/` filename (handles spaces, `&`, etc.). */
function publicLogo(filename: string): string {
  return `/${encodeURIComponent(filename)}`;
}

/**
 * Client roster and logos. Filenames match assets saved under `public/`
 * (see project `public/` directory).
 */
export const clients: ClientEntry[] = [
  { name: 'Tata Projects', logoSrc: publicLogo('Tata.png') },
  { name: 'L&T', logoSrc: publicLogo('LandT.png') },
  { name: 'Reliance', logoSrc: publicLogo('Reliance.jpg') },
  { name: 'Bharat Petroleum Corporation Limited', logoSrc: publicLogo('BPCL.jpeg') },
  { name: 'Hindustan Petroleum Corporation Limited', logoSrc: publicLogo('HPCL.webp') },
  { name: 'Essar Group', logoSrc: publicLogo('Essar.png') },
  { name: 'Shapoorji Pallonji', logoSrc: publicLogo('Shapoorji Pallonji .jpeg') },
  { name: 'TCS', logoSrc: publicLogo('TCS.jpg') },
  { name: 'Torrent Pharma', logoSrc: publicLogo('Torrent Pharma.png') },
  { name: 'Ingersoll Rand', logoSrc: publicLogo('Ingersoll Rand .jpg') },
  { name: 'Gujarat Agro', logoSrc: publicLogo('Gujarat Agro .png') },
  { name: 'Ahmedabad Municipal Corporation', logoSrc: publicLogo('AMC.jpg') },
  { name: 'Surat Municipal Corporation', logoSrc: publicLogo('Surat Municipal .png') },
  { name: 'Patel Infra', logoSrc: publicLogo('Patel Infra .png') },
  { name: 'RJP Infra', logoSrc: publicLogo('RJP Infra .jpg') },
  { name: 'Venus Group', logoSrc: publicLogo('venusinfrastructure.jpeg') },
  { name: 'Mudra Estates', logoSrc: publicLogo('Mudra Estates.png') },
  { name: '+ many more', logoSrc: null },
];
