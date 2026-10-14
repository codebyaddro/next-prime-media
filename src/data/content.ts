export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Search' | 'Flame' | 'Camera' | 'Code' | 'Palette' | 'BarChart3';
  accent: 'red' | 'blue';
  deliverables: string[];
  stats: string;
}

export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  result: string;
  details: string;
  tags: string[];
  imagePlaceholderColor: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: 'Users' | 'Layers' | 'Globe2' | 'Star';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export const VALUE_PROPS = [
  { id: '1', title: 'Data-Driven Strategy', icon: 'Sparkles' },
  { id: '2', title: 'Result Focused Campaigns', icon: 'TrendingUp' },
  { id: '3', title: 'Transparent Reporting', icon: 'FileText' },
  { id: '4', title: 'Long-Term Partnership', icon: 'Link2' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'seo',
    title: 'SEO',
    description: 'Rank higher, get found, bring in organic traffic.',
    iconName: 'Search',
    accent: 'blue',
    deliverables: ['Technical SEO Audits', 'Keyword Intent Mapping', 'On-Page & Schema Optimization', 'High-Authority Backlink Acquisition'],
    stats: '+210% Avg Organic Lift',
  },
  {
    id: 'google-ads',
    title: 'Google Ads',
    description: 'Target the right audience and maximize ROI.',
    iconName: 'Flame',
    accent: 'red',
    deliverables: ['Search & Performance Max', 'High-Intent Bid Strategies', 'Dynamic Remarketing', 'A/B Ad Copy Testing'],
    stats: '4.8x Average ROAS',
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Build your brand, engage your audience, grow your community.',
    iconName: 'Camera',
    accent: 'blue',
    deliverables: ['Content Creation & Video Reels', 'Paid Social Acquisition (Meta/TikTok)', 'Community Engagement', 'Influencer Partnerships'],
    stats: '3.2M+ Reach Generated',
  },
  {
    id: 'web-dev',
    title: 'Website Design & Development',
    description: 'Modern, fast, and responsive web solutions.',
    iconName: 'Code',
    accent: 'red',
    deliverables: ['Custom High-Speed Web Apps', 'Conversion Rate Optimization (CRO)', 'Headless CMS Integration', 'Mobile-First Responsive Layouts'],
    stats: '<0.8s Load Times',
  },
  {
    id: 'creative-design',
    title: 'Creative Design',
    description: 'Powerful visuals that connect and convert.',
    iconName: 'Palette',
    accent: 'blue',
    deliverables: ['Brand Identity & Guidelines', 'Ad Creatives & Motion Graphics', 'UI/UX Interactive Prototypes', 'Pitch Decks & Collateral'],
    stats: '99.4% Client Approval',
  },
  {
    id: 'analytics',
    title: 'Analytics & Reporting',
    description: 'Data-driven insights for smarter decisions.',
    iconName: 'BarChart3',
    accent: 'red',
    deliverables: ['GA4 & Server-Side Tracking', 'Custom Looker Dashboards', 'Attribution Modeling', 'Weekly Executive Summaries'],
    stats: '100% Data Accuracy',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'ecommerce',
    category: 'E-Commerce Website',
    title: 'LuxeLiving Direct-to-Consumer Platform',
    result: 'Increased organic traffic by 240% in 6 months.',
    details: 'Redesigned the e-commerce architecture with a modern headless storefront, streamlined checkout funnel, and executed aggressive technical SEO resulting in \$1.4M additional annual revenue.',
    tags: ['E-Commerce', 'SEO', 'Web Development', 'CRO'],
    imagePlaceholderColor: 'from-blue-900/60 to-slate-900',
  },
  {
    id: 'social',
    category: 'Social Media Marketing',
    title: 'Apex Athletic Global Community',
    result: 'Grew Instagram by 120k+ real followers.',
    details: 'Orchestrated a viral short-form video campaign with micro-influencers and interactive community polls, driving authentic engagement rate from 1.2% to 7.8%.',
    tags: ['Social Strategy', 'Meta Ads', 'Viral Content'],
    imagePlaceholderColor: 'from-pink-900/60 to-purple-950',
  },
  {
    id: 'brand-growth',
    category: 'Brand Growth Campaign',
    title: 'CyberScale Enterprise Lead Engine',
    result: 'Generated 3.2K+ qualified leads in 90 days.',
    details: 'Built a multi-channel lead acquisition system across Google Search, LinkedIn Ads, and custom interactive ROI assessment calculators with 42% landing page conversion.',
    tags: ['Google Ads', 'Funnel Design', 'B2B Lead Gen'],
    imagePlaceholderColor: 'from-red-950/70 to-slate-950',
  },
];

export const STATS: StatItem[] = [
  { id: '1', value: 50, suffix: '+', label: 'Happy Clients', icon: 'Users' },
  { id: '2', value: 200, suffix: '+', label: 'Projects Completed', icon: 'Layers' },
  { id: '3', value: 12, suffix: '+', label: 'Countries Served', icon: 'Globe2' },
  { id: '4', value: 4.9, suffix: '/5', label: 'Client Satisfaction', icon: 'Star' },
];

export const ABOUT_PILLARS = [
  {
    id: '1',
    title: 'Strategic Approach',
    description: 'Custom plans for your goals',
    icon: 'Target',
  },
  {
    id: '2',
    title: 'Experienced Team',
    description: 'Skilled & creative professionals',
    icon: 'Award',
  },
  {
    id: '3',
    title: 'Transparent Communication',
    description: 'No hidden fees, always honest',
    icon: 'ShieldCheck',
  },
  {
    id: '4',
    title: 'Long-Term Partnership',
    description: 'Your success is our mission',
    icon: 'Lock',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'James Carter',
    role: 'CEO',
    company: 'NovaTech Solutions',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    rating: 5,
    quote: 'Next Prime Media completely transformed our online presence. Their strategy, creativity, and communication are top-notch. We’ve seen real growth in just a few months.',
  },
  {
    id: '2',
    name: 'Sarah Mitchell',
    role: 'Marketing Director',
    company: 'BrightPath Co.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80',
    rating: 5,
    quote: 'Professional, reliable and results-driven! They helped us get more leads and improve our brand visibility. Highly recommended!',
  },
  {
    id: '3',
    name: 'Daniel Roberts',
    role: 'Founder',
    company: 'UrbanCraft Studio',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
    rating: 5,
    quote: 'The team at Next Prime Media goes above and beyond. Their work on our website and social media has made a huge difference for our business.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: '1',
    question: 'What makes Next Prime Media different?',
    answer:
      'We combine rigorous data science with cutting-edge creative design. Unlike traditional agencies that work in silos, our performance marketers, developers, and designers collaborate in unified sprints. We offer transparent real-time reporting, guarantee zero hidden fees, and structure every campaign around bottom-line revenue rather than vanity metrics.',
  },
  {
    id: '2',
    question: 'How long does it take to see results?',
    answer:
      'Paid advertising campaigns (Google Ads, Meta Ads) frequently produce qualified traffic and leads within the first 7 to 14 days. For organic channels like SEO and Brand Development, sustainable compounding momentum typically becomes evident between months 2 and 4.',
  },
  {
    id: '3',
    question: 'Do you work with international clients?',
    answer:
      'Yes! We proudly partner with ambitious brands across North America, Europe, Australia, and Asia. Our workflows and communication channels are seamlessly tailored to accommodate global time zones.',
  },
  {
    id: '4',
    question: 'What’s your pricing structure?',
    answer:
      'We provide tailored monthly growth retainers as well as fixed-scope project pricing. Every proposal is custom-crafted to your unique objectives, competitive landscape, and budget requirements with clear deliverables.',
  },
  {
    id: '5',
    question: 'Can you help with just one service?',
    answer:
      'Absolutely. Whether you require a specialized Google Ads audit, a modern high-speed website redesign, or an end-to-end full funnel marketing growth engine, we can seamlessly plug into your current operation.',
  },
];

export const CONTACT_INFO = {
  email: 'hello@nextprimemedia.com',
  phone: '+880 1712 345678',
  location: 'Dhaka, Bangladesh',
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
};
