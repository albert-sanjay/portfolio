// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to update
//  the site — no need to touch the components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Albert Sanjay Dansoh',
  firstName: 'Albert',
  role: 'Software Developer',
  location: 'Accra, Ghana',
  email: 'kobbydanz@gmail.com',
  phone: '+233 55 239 0743',
  github: 'https://github.com/albert-sanjay',
  githubHandle: 'albert-sanjay',
  // Optional: add your LinkedIn URL here and it will appear in the contact section
  linkedin: '',
  // Optional: drop your CV PDF into /public (e.g. public/Albert-Sanjay-Dansoh-CV.pdf) and set the file name here
  cv: '',
  tagline:
    'I build backend systems, APIs and integrations that keep large organisations moving — from mobile money platforms to ERP-connected enterprise tools.',
  summary: [
    'I’m a software developer with 4+ years of experience specialising in backend development, API engineering and enterprise integrations. My strongest tools are Java, Spring Boot, C# and REST APIs, deployed on cloud-ready architectures.',
    'At Telecel Ghana I built an Agent & Merchant Mobile Money application that complements USSD workflows with a modern interface and faster transaction processing. Before that, I spent three and a half years at SuperTech connecting business software to Microsoft Dynamics ERP.',
    'Outside of my day job I run Sunrise Labs, building secure, per-user internet access for hostels, homes and businesses — and I take on web projects for local clients.',
  ],
}

export const stats = [
  { value: '4+', label: 'Years building software' },
  { value: '420+', label: 'CX touchpoints governed' },
  { value: '10k+', label: 'Spare parts synced in real time' },
  { value: '50%', label: 'Less HR manual workload' },
]

export const projects = [
  {
    id: 'sunrise',
    name: 'Sunrise Labs',
    url: 'https://sunriselabs.online/',
    domain: 'sunriselabs.online',
    status: 'Live',
    kind: 'Product · Founder',
    summary:
      'A managed internet-access platform for hostels that want to run subscription-based Wi-Fi, and for homes, businesses and organisations that need secure, per-person access.',
    details: [
      'Every tenant, resident or staff member gets their own username and password — no more sharing one Wi-Fi password with everyone.',
      'Hostels can sell internet as a subscription service and control who is online.',
      'Access can be revoked for one person without disrupting anyone else on the network.',
    ],
    tags: ['Captive portal', 'Subscriptions', 'Network access control', 'Multi-tenant'],
    image: './projects/sunrise-labs.jpg',
    accent: 'sunrise',
  },
  {
    id: 'sterlin',
    name: 'Sterlin Dental',
    url: 'https://sterlin-dental.vercel.app',
    domain: 'sterlin-dental.vercel.app',
    status: 'In development',
    kind: 'Client website',
    summary:
      'A website for a dental clinic in Tema, Ghana, presenting the clinic’s services and making it easy for patients to get in touch.',
    details: [
      'Clean, mobile-first design built for patients browsing on their phones.',
      'Currently in development — the next iteration is waiting on client feedback.',
    ],
    tags: ['React', 'Responsive design', 'Vercel'],
    image: './projects/sterlin-dental.jpg',
    accent: 'dental',
  },
]

// Professional work from the CV (internal / proprietary, so no public links)
export const caseStudies = [
  {
    title: 'Agent & Merchant Mobile Money App',
    org: 'Telecel Ghana(Previously Vodafone Ghana)',
    body: 'A scalable app adopted by mobile money agents and merchants that complements USSD workflows with a modern UI, faster transaction processing and real-time wallet aggregation.',
    tags: ['Mobile', 'API integration', 'Scalable architecture'],
  },
  {
    title: 'Customer Insight & Survey Platform',
    org: 'Telecel Ghana(Previously Vodafone Ghana)',
    body: 'Led the design of user roles and role-based access control so the CX team could manage and track service performance across 420+ physical touchpoints nationwide.',
    tags: ['RBAC', 'Analytics', 'Governance'],
  },
  {
    title: 'HR Self-Service Application',
    org: 'SuperTech Ltd',
    body: 'Java & Spring Boot app integrated with Microsoft Dynamics ERP. Employees apply for leave and loans, view payslips in real time and track requests — cutting the HR manager’s workload by over 50%.',
    tags: ['Java', 'Spring Boot', 'Dynamics ERP'],
  },
  {
    title: 'ERP ↔ Fleetio Integration',
    org: 'SuperTech Ltd · for Amandi Limited',
    body: 'A C# web service and integration API connecting Microsoft Dynamics ERP to Fleetio, delivering real-time inventory updates for 10,000+ spare parts and removing manual data entry.',
    tags: ['C#', '.NET', 'REST API'],
  },
]

export const experience = [
  {
    role: 'Software Developer',
    company: 'Telecel Ghana(Previously Vodafone Ghana)',
    period: 'Sep 2025 — Present',
    points: [
      'Built a scalable Agent & Merchant Mobile Money application that complements USSD workflows with a modern UI, delivering faster transactions and real-time wallet aggregation.',
      'Optimised performance and reliability with best practices in mobile development, API integration and scalable architecture.',
      'Enhanced the Customer Insight & Survey Platform, leading the definition and implementation of user roles and role-based access control across 420+ touchpoints nationwide.',
      'Improved data visibility, reporting accuracy and CX operations through better governance and structured access management.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'SuperTech Ltd',
    period: 'Feb 2022 — Aug 2025',
    points: [
      'Developed an HR Self-Service application in Java and Spring Boot, integrated with Microsoft Dynamics ERP — reducing the HR manager’s workload by over 50%.',
      'Built a C# web service and integration API connecting Microsoft Dynamics ERP to Fleetio for Amandi Limited, syncing 10,000+ spare parts in real time.',
    ],
  },
]

export const skills = [
  { group: 'Languages', items: ['Java', 'C#', 'Python', 'JavaScript', 'SQL'] },
  { group: 'Frameworks', items: ['Spring Boot', '.NET', 'Flask', 'React'] },
  { group: 'Databases', items: ['MySQL', 'PostgreSQL', 'Redis'] },
  { group: 'Cloud & DevOps', items: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'Docker', 'Kubernetes', 'Git', 'Linux'] },
  { group: 'Ways of working', items: ['REST APIs', 'Enterprise integration', 'RBAC', 'JIRA', 'Agile / Scrum'] },
]

export const certifications = [
  { name: 'AWS Certified Solutions Architect — Associate', year: '2024' },
  { name: 'AWS Certified Cloud Practitioner', year: '2024' },
]

export const education = {
  degree: 'BSc Computer Science',
  school: 'Kwame Nkrumah University of Science and Technology',
  year: '2020',
  coursework: [
    'Data Structures',
    'Algorithms',
    'Database Systems',
    'Software Engineering',
    'OOP',
    'Computer Networks & Security',
    'Linear Algebra',
    'Discrete Mathematics',
    'Probability & Statistics',
    'Numerical Analysis',
  ],
}
