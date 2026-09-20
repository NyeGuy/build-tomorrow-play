/**
 * Build Tomorrow — single site config.
 *
 * Swap values here. Rebuild. No other file should hold fund URLs, raised
 * totals, course prices, sponsorship tiers, wishlist rows, or photo paths.
 *
 * ---------------------------------------------------------------------------
 * TECH_FUND_URL is the official SCAD Giving Technology Fund link (locked).
 * DT_FUND_URL remains a PLACEHOLDER until Advancement sends the live
 * Design Tomorrow / sponsorship URL. Amount buttons append ?amount= when
 * the URL is not "#".
 *
 * Form handler is a PLACEHOLDER Formspree endpoint. Replace FORM_ENDPOINT
 * with a real Formspree form ID (or a Netlify Forms endpoint) before going
 * live. Submissions are meant to notify FORM_NOTIFY_EMAIL.
 * ---------------------------------------------------------------------------
 */

export const TECH_FUND_URL =
  'https://www.scad.edu/about/giving/donate?d=AIANDROBS';
export const DT_FUND_URL =
  'https://example.com/scad-giving-placeholder/design-tomorrow';

/** Formspree placeholder. Replace `/f/PLACEHOLDER` with a real form ID. */
export const FORM_ENDPOINT = 'https://formspree.io/f/PLACEHOLDER';

export const FORM_NOTIFY_EMAIL = 'nyewarburton@gmail.com';
export const GIVING_CONTACT_EMAIL = 'scadgiving@scad.edu';
export const NYE_EMAIL = 'nyewarburton@gmail.com';

/** Display string until Advancement reports a live total. */
export const RAISED_AMOUNT = '[RAISED_AMOUNT]';
export const GOAL_AMOUNT = 200_000;
export const DEADLINE_TEXT = 'May 10';

export const SPONSOR_SHEET_URL = '#';
export const PRIVACY_URL = 'https://www.scad.edu/privacy';
export const SCAD_URL = 'https://www.scad.edu';
export const STEC_URL =
  'https://www.scad.edu/academics/academic-schools/school-creative-technology';

export const site = {
  name: 'Build Tomorrow',
  school: 'SCAD School of Creative Technology',
  org: 'Savannah College of Art and Design',
  tagline: 'Fund AI and robotics education at SCAD.',
};

export type Course = {
  code: string;
  name: string;
  amount: number;
  blurb: string;
};

export const courses: Course[] = [
  {
    code: 'AI 410',
    name: 'Applied AI Studio I',
    amount: 5000,
    blurb:
      'Sponsor a class in the Applied AI studio — students train, prototype, and ship work that goes on stage in May.',
  },
  {
    code: 'ROBO 330',
    name: 'Sensors, Motors, and Kinetics',
    amount: 5000,
    blurb:
      'Sponsor a Robotics class. Gifts cover kits, sensors, and bench time in the rooms where the machines get built.',
  },
  {
    code: 'AI 560',
    name: 'Applied AI Design and Development Lab',
    amount: 5000,
    blurb:
      'Sponsor the graduate lab that takes students from creative tools to production systems. Five thousand dollars names the class.',
  },
];

export type Tier = {
  id: string;
  name: string;
  amount: number;
  featured?: boolean;
  benefits: string[];
};

export const tiers: Tier[] = [
  {
    id: 'title',
    name: 'Title',
    amount: 50_000,
    featured: true,
    benefits: [
      'Name on the event: Title Sponsor of Design Tomorrow',
      'Logo on stage, print, and every digital surface',
      'Speaking slot at the opening',
      'Private talent walkthrough with faculty',
      'Recruiting table for the full week',
      'Ten guest credentials',
    ],
  },
  {
    id: 'presenting',
    name: 'Presenting',
    amount: 25_000,
    benefits: [
      'Presenting Sponsor lockup on the program and site',
      'Logo on stage and digital surfaces',
      'Faculty-led studio visit',
      'Recruiting table for two days',
      'Six guest credentials',
    ],
  },
  {
    id: 'track',
    name: 'Track',
    amount: 10_000,
    benefits: [
      'Named track (Applied AI or Robotics)',
      'Logo on that track’s signage and program page',
      'Meet the students in that track',
      'Four guest credentials',
    ],
  },
  {
    id: 'partner',
    name: 'Partner',
    amount: 5_000,
    benefits: [
      'Logo on the sponsor wall and program',
      'Recognition from the stage',
      'Two guest credentials',
    ],
  },
];

export type WishlistItem = {
  item: string;
  qty: string;
  need: string;
  notes: string;
};

export const wishlist: WishlistItem[] = [
  {
    item: '[GPU workstation — NVIDIA RTX-class]',
    qty: '[2]',
    need: 'Applied AI classroom',
    notes: '[Local training for student models before the May show.]',
  },
  {
    item: '[Collaborative robot arm]',
    qty: '[1]',
    need: 'Robotics lab',
    notes: '[Bench unit for Sensors, Motors, and Kinetics.]',
  },
  {
    item: '[Depth cameras / RGB-D kits]',
    qty: '[8]',
    need: 'Robotics + Applied AI',
    notes: '[Perception homework that currently shares two units.]',
  },
  {
    item: '[Cloud GPU hours]',
    qty: '[5,000 hours]',
    need: 'Applied AI',
    notes: '[Pledges accepted. We will take access, not a check.]',
  },
  {
    item: '[Mobile compute / Jetson-class boards]',
    qty: '[12]',
    need: 'Robotics',
    notes: '[On-robot inference for student prototypes.]',
  },
  {
    item: '[Motion-capture markers + calibration kit]',
    qty: '[1]',
    need: 'Robotics studio',
    notes: '[Ground-truth for adaptive behavior work.]',
  },
];

export type SponsorLogo = {
  name: string;
  src: string;
};

export const sponsorLogos: SponsorLogo[] = [
  { name: 'Your logo here', src: '' },
  { name: 'Your logo here', src: '' },
  { name: 'Your logo here', src: '' },
  { name: 'Your logo here', src: '' },
  { name: 'Your logo here', src: '' },
  { name: 'Your logo here', src: '' },
];

export type Photo = {
  src: string;
  caption: string;
};

export const photos: Record<string, Photo> = {
  homeHero: {
    src: '',
    caption: '[Students in the Applied AI classroom]',
  },
  techHero: {
    src: '',
    caption: '[Robotics classroom, School of Creative Technology]',
  },
  techStrip1: {
    src: '',
    caption: '[Applied AI studio]',
  },
  techStrip2: {
    src: '',
    caption: '[Robotics bench]',
  },
  techStrip3: {
    src: '',
    caption: '[Work on the May stage]',
  },
  dtHero: {
    src: '',
    caption: '[Design Tomorrow — student work on the floor]',
  },
  giveHero: {
    src: '',
    caption: '[Hardware on the lab bench]',
  },
};

export const copy = {
  finePrint501:
    'The Savannah College of Art and Design is a 501(c)(3) nonprofit organization. Your gift is tax-deductible to the extent allowed by law.',
  homeSub:
    'Fund AI and robotics education at SCAD. Every dollar goes straight to the classroom, and everything built with it goes on stage in May.',
  techSub:
    'Gifts to the Technology Fund equip Applied AI and Robotics classrooms — the rooms where students train, prototype, and prepare work for the May stage.',
  dtSub:
    'Design Tomorrow is a week-long showcase of student work from the School of Creative Technology. Sponsors stand on the floor with the talent they will hire next.',
  dtDeadlines:
    'Title and Presenting close when sold. Track and Partner commitments are due by May 10. Design Tomorrow runs the week of May 10.',
  giveSub:
    'Cash buys the lab. Hardware and compute are the lab. Donate the machine or pledge the hours — we will coordinate pickup, shipping, and access.',
};

export const giftAmounts = [50, 100, 250, 500, 1000] as const;
export const defaultGiftAmount = 250;

export const waysToGive = [
  {
    title: 'Money',
    body: 'Give cash to the Technology Fund. It lands in Applied AI and Robotics classrooms.',
    cta: 'Give now',
    href: '/technology/',
  },
  {
    title: 'Compute',
    body: 'Pledge GPU hours. Students train on what you send, not on a waitlist.',
    cta: 'Pledge compute',
    href: '/give/',
  },
  {
    title: 'Hardware',
    body: 'Donate the robot, the workstation, the kit. The wishlist is the lab.',
    cta: 'Donate equipment',
    href: '/give/',
  },
] as const;

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Append ?amount= for SCAD Giving when the URL is real enough to take a query. */
export function withAmount(url: string, amount: number): string {
  if (!url || url === '#') return `#amount=${amount}`;
  const join = url.includes('?') ? '&' : '?';
  return `${url}${join}amount=${amount}`;
}
