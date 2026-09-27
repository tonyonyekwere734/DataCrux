export type ProductStatus = 'AVAILABLE' | 'COMING_SOON';

export type Product = {
  name: string;
  slug: string;
  category: string;
  positioning: string;
  description: string;
  status: ProductStatus;
  accent: string;
  accentSoft: string;
  destination?: string;
  eyebrow: string;
  problem: string;
  capabilities: string[];
  audience: string;
  visual: string;
};

export type ProductFamily = {
  name: string;
  slug: string;
  description: string;
  productSlugs: string[];
  futureLabel: string;
  accent: string;
};

export type Service = {
  name: string;
  description: string;
  problem: string;
  capabilities: string[];
  audience: string;
  tone: string;
};

export type Solution = {
  name: string;
  intro: string;
  detail: string;
  productSlugs: string[];
  serviceNames: string[];
  accent: string;
};

const productDestinations = {
  amara: import.meta.env.VITE_AMARA_DESTINATION || 'https://amara.datacrux.com',
  cruxnexus: import.meta.env.VITE_CRUXNEXUS_DESTINATION || 'https://cruxnexus.datacrux.com',
};

export const products: Product[] = [
  {
    name: 'Amara',
    slug: 'amara',
    category: 'Smart sales agent',
    positioning: 'Stay close to every customer, at every hour.',
    description: 'A smart sales agent built around a comprehensive sales experience and continuous customer engagement.',
    status: 'AVAILABLE',
    accent: '#8b7cff',
    accentSoft: '#e7e4ff',
    destination: productDestinations.amara,
    eyebrow: 'Product / Available now',
    problem: 'Sales teams lose momentum when customer questions wait for office hours, context gets scattered, or follow-up becomes a manual memory test.',
    capabilities: ['Always-on customer interaction', 'Sales-oriented workflows', 'Responsive conversations', 'Business integration'],
    audience: 'For businesses that want customer engagement to keep moving without turning their teams into a queue.',
    visual: 'An electric lilac conversation field with a bright signal moving through connected customer moments.',
  },
  {
    name: 'CruxNexus',
    slug: 'cruxnexus',
    category: 'Commerce operating system',
    positioning: 'Give commerce a stronger centre of gravity.',
    description: 'A commerce operating system for the moving parts behind modern merchant growth.',
    status: 'AVAILABLE',
    accent: '#e1ad4d',
    accentSoft: '#f7ebc9',
    destination: productDestinations.cruxnexus,
    eyebrow: 'Product / Available now',
    problem: 'Commerce becomes difficult to steer when orders, customer context, workflows, and growth decisions live in separate places.',
    capabilities: ['Commerce workflow thinking', 'Merchant operations', 'Connected customer context', 'A foundation for growth'],
    audience: 'For ambitious merchants and commerce teams building a business that needs to move as one.',
    visual: 'A warm ochre operating field where commerce paths meet, resolve, and move forward.',
  },
  {
    name: 'Lara',
    slug: 'lara',
    category: 'Future product',
    positioning: 'A new way to make important work feel lighter.',
    description: 'Lara is a future DataCrux product in development, shaped around the realities of ambitious teams.',
    status: 'COMING_SOON',
    accent: '#8b8bd8',
    accentSoft: '#e9e8f7',
    eyebrow: 'Product / Coming soon',
    problem: 'The right product should remove friction from important work without asking teams to flatten the way they operate.',
    capabilities: ['A focused product experience', 'Thoughtful workflows', 'Built for real teams', 'Designed to grow with the work'],
    audience: 'For people who know there is a better shape for the work ahead.',
    visual: 'A lavender horizon with a quiet, precise orbit around an unannounced idea.',
  },
  {
    name: 'Hawa',
    slug: 'hawa',
    category: 'Future product',
    positioning: 'Built for the next chapter of business.',
    description: 'Hawa is a future DataCrux product. Its story is taking shape with the businesses it is meant to serve.',
    status: 'COMING_SOON',
    accent: '#6a9e91',
    accentSoft: '#dcebe5',
    eyebrow: 'Product / Coming soon',
    problem: 'The next generation of business technology should be close to the context it serves and ready for the ambition beyond it.',
    capabilities: ['A clear point of view', 'Human-scale technology', 'Designed for African businesses', 'Global-ready foundations'],
    audience: 'For businesses looking beyond today’s familiar tools.',
    visual: 'A deep green field with a soft route line tracing the edge of a larger possibility.',
  },
];

export const productFamilies: ProductFamily[] = [
  {
    name: 'Smart Agents',
    slug: 'smart-agents',
    description: 'Intelligent software products designed around interaction, responsiveness, and business execution.',
    productSlugs: ['amara'],
    futureLabel: 'Future agents will join this family as their shape becomes ready.',
    accent: '#8b7cff',
  },
  {
    name: 'Commerce & Business Systems',
    slug: 'commerce-business-systems',
    description: 'Systems that give businesses stronger operational foundations and a clearer centre of gravity.',
    productSlugs: ['cruxnexus'],
    futureLabel: 'More systems will join this family as the ecosystem expands.',
    accent: '#e1ad4d',
  },
  {
    name: 'Security Engines',
    slug: 'security-engines',
    description: 'Security-focused products built to protect, detect, and respond.',
    productSlugs: [],
    futureLabel: 'Coming soon',
    accent: '#6a9e91',
  },
  {
    name: 'More Product Families',
    slug: 'more-product-families',
    description: 'New product directions will appear here when there is a real business problem to solve.',
    productSlugs: ['lara', 'hawa'],
    futureLabel: 'Lara and Hawa are coming-soon product stories while their categories take shape.',
    accent: '#8b8bd8',
  },
];

export const getProductFamily = (slug?: string) => productFamilies.find((family) => family.slug === slug);

export const services: Service[] = [
  {
    name: 'Digital services',
    description: 'Practical digital capability for businesses moving from intention to a stronger way of working.',
    problem: 'Good ideas can stall when the digital path is unclear, disconnected from the business, or difficult to make real.',
    capabilities: ['Digital thinking grounded in business context', 'Clear product and service direction', 'Work that turns ambition into a next step'],
    audience: 'Businesses that need an experienced technology partner, not another layer of noise.',
    tone: 'Make the next move clearer.',
  },
  {
    name: 'Business technology',
    description: 'Technology work that respects the business behind it: its customers, its people, and the pace at which it needs to grow.',
    problem: 'Technology only creates leverage when it helps the business make better decisions and serve people more deliberately.',
    capabilities: ['Business-aware technology direction', 'Connected digital experiences', 'A foundation for more confident growth'],
    audience: 'Teams building the operational confidence to go further.',
    tone: 'Build with the whole business in view.',
  },
];

export const solutions: Solution[] = [
  {
    name: 'Keep customer engagement moving',
    intro: 'When every conversation matters, responsiveness becomes part of the product.',
    detail: 'DataCrux brings together the product story and the business context to help teams create more consistent customer engagement.',
    productSlugs: ['amara'],
    serviceNames: ['Digital services'],
    accent: '#8b7cff',
  },
  {
    name: 'Bring commerce into focus',
    intro: 'When the moving parts multiply, the business needs a stronger centre.',
    detail: 'Explore a commerce operating system alongside business technology thinking for a clearer way to run what comes next.',
    productSlugs: ['cruxnexus'],
    serviceNames: ['Business technology'],
    accent: '#e1ad4d',
  },
  {
    name: 'Build the next version of the business',
    intro: 'Ambition deserves more than disconnected tools and a vague roadmap.',
    detail: 'Start with the problem, find the right product or service path, and build from a point of view that can travel.',
    productSlugs: ['lara', 'hawa'],
    serviceNames: ['Digital services', 'Business technology'],
    accent: '#6a9e91',
  },
];

export const getProduct = (slug?: string) => products.find((product) => product.slug === slug);