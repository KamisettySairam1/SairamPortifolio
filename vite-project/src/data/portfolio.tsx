import type { PortfolioData } from '../types'

export const portfolioData: PortfolioData = {
  name: 'Kamisetty Sairam',
  title: 'Full Stack LLM Developer',
  location: 'Hyderabad, India',
  availability: 'Enterprise product engineer focused on AI platforms, real-time systems, and clean delivery',
  email: 'kamisettysairam1@gmail.com',
  phone: '+91 9381847818',
  resumeHref: '/media/Sairam_Experience_Resume.pdf',
  photoSrc: '/media/sairam-profile.jpg',
  summary:
    'Full Stack LLM Developer with 2+ years of experience building enterprise applications, AI-driven platforms, and real-time analytics systems. Strong across Angular, TypeScript, Django, FastAPI, PostgreSQL, Redis, and scalable GenAI workflows with an emphasis on reliable execution, product thinking, and polished user experience.',
  socials: [
    {
      label: 'Email',
      href: 'mailto:kamisettysairam1@gmail.com',
      value: 'kamisettysairam1@gmail.com',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sairamkamisetty',
      value: 'linkedin.com/in/sairamkamisetty',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/KamisettySairam1',
      value: 'github.com/KamisettySairam1',
    },
  ],
  stats: [
    { value: '2+ yrs', label: 'Enterprise product delivery' },
    { value: '20-30%', label: 'API response optimization' },
    { value: '24/7', label: 'Real-time dashboard ownership' },
    { value: '2025', label: 'Best Performance Award' },
  ],
  sectionLinks: [
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'strengths', label: 'Strengths' },
    { id: 'proof', label: 'Proof' },
    { id: 'contact', label: 'Contact' },
  ],
  skills: [
    {
      title: 'Frontend',
      items: ['Angular', 'TypeScript', 'JavaScript', 'React.js', 'HTML5', 'CSS3', 'RxJS', 'Bootstrap', 'Tailwind'],
    },
    {
      title: 'Backend',
      items: ['Python', 'Django', 'FastAPI', 'REST APIs', 'Node.js', 'Java'],
    },
    {
      title: 'Data',
      items: ['PostgreSQL', 'Redis', 'Databricks SQL', 'SQL optimization', 'SQLAlchemy ORM'],
    },
    {
      title: 'AI and Automation',
      items: ['Generative AI', 'Prompt engineering', 'AI workflows', 'AI agents', 'LLM applications'],
    },
    {
      title: 'Platform',
      items: ['Docker', 'Kubernetes', 'CI/CD', 'Git', 'Postman', 'Swagger'],
    },
    {
      title: 'Real-time Systems',
      items: ['WebSockets', 'Live streaming', 'Streaming logs', 'Event-driven systems'],
    },
  ],
  experience: {
    company: 'Accenture Solutions Pvt. Ltd.',
    role: 'Full Stack LLM Developer',
    client: 'Phillips 66 (P66)',
    location: 'Hyderabad, India',
    duration: 'Aug 2023 - Present',
    summary:
      'Building enterprise applications and AI platforms for the Oil and Gas domain with Angular, Django, FastAPI, PostgreSQL, and Redis.',
    highlights: [
      'Built scalable REST APIs and microservices with clean architecture patterns in Django and FastAPI.',
      'Designed high-performance database schemas, complex ORM queries, and stored procedures for production workloads.',
      'Created live dashboards for operations analytics, KPI tracking, and 24/7 monitoring with real-time charts.',
      'Implemented Redis caching, WebSockets, and event-driven flows for streaming logs and low-latency updates.',
      'Reduced production bugs to under 20% while mentoring freshers and leading delivery during team lead absence.',
      'Received the Best Performance Award in 2025 for ownership, quality, and timely execution.',
    ],
  },
  projects: [
    {
      name: 'AI Central',
      tagline: 'Enterprise conversational AI platform for global business insight discovery',
      stack: ['Angular', 'Django', 'PostgreSQL', 'Redis', 'LLM'],
      impact: [
        'Built a conversational AI product that lets enterprise users query internal knowledge and workflows through a unified interface.',
        'Engineered custom AI agents, prompt workflows, and real-time streaming logs for observability.',
        'Designed secure backend APIs and responsive UI patterns for enterprise-grade adoption.',
      ],
    },
    {
      name: 'MYRA Workflows',
      tagline: 'AI workflow automation builder for scheduling and multi-step execution',
      stack: ['Angular', 'Django', 'PostgreSQL', 'Redis'],
      impact: [
        'Created an AI-powered workflow builder to design, schedule, and run workflows without manual intervention.',
        'Improved execution tracking, automated task orchestration, and risk monitoring for long-running jobs.',
        'Integrated Redis-based streaming logs and scheduling for dependable workflow execution.',
      ],
    },
    {
      name: 'Aviation Procurement and Bidding',
      tagline: 'Real-time procurement platform for aviation fuel contracts and negotiations',
      stack: ['Angular', 'FastAPI', 'PostgreSQL', 'WebSockets'],
      impact: [
        'Implemented RFP registration, bid creation, and contract management flows for transactional procurement.',
        'Delivered WebSocket-based chat for collaborative cost validation and negotiation.',
        'Optimized FastAPI services and PostgreSQL models for scalable transaction-heavy operations.',
      ],
    },
    {
      name: 'My Operations',
      tagline: 'Live refinery operations dashboard focused on losses, profit signals, and KPIs',
      stack: ['Angular', 'Django', 'PostgreSQL', 'Redis'],
      impact: [
        'Built real-time dashboards for operational monitoring with live charts and streaming metrics.',
        'Integrated Redis for low-latency updates and high-performance backend APIs.',
        'Enabled always-on visibility for loss reduction and decision-making in refinery workflows.',
      ],
    },
  ],
  achievements: [
    {
      title: 'Quality and reliability',
      detail: 'Reduced production bugs to under 20% through debugging discipline, code quality improvements, and rigorous testing.',
    },
    {
      title: 'Performance engineering',
      detail: 'Improved API response time by 20-30% through query tuning, indexing strategy, and caching.',
    },
    {
      title: 'Operational excellence',
      detail: 'Designed 24/7 real-time dashboards with live streaming data for mission-critical monitoring.',
    },
    {
      title: 'Team impact',
      detail: 'Recognized multiple times for timely delivery, mentoring new team members, and driving stable releases.',
    },
  ],
  softSkills: [
    {
      title: 'Quick learner',
      detail: 'Comfortable adapting to new tools, domains, and problem spaces with minimal ramp-up time.',
    },
    {
      title: 'Problem solver',
      detail: 'Approaches product and engineering issues with structured debugging, practical tradeoffs, and ownership.',
    },
    {
      title: 'Communication',
      detail: 'Works clearly with teammates, stakeholders, and freshers to keep delivery aligned and momentum high.',
    },
    {
      title: 'Team collaboration',
      detail: 'Thrives in Agile teams, supports cross-functional delivery, and contributes well during high-pressure execution.',
    },
  ],
  valuePoints: [
    {
      title: 'End-to-end execution',
      detail: 'Capable of contributing across frontend, backend, APIs, data, and AI workflow integration.',
    },
    {
      title: 'Enterprise mindset',
      detail: 'Experienced in building stable systems with scalability, maintainability, and operational reliability in mind.',
    },
    {
      title: 'Real-time product thinking',
      detail: 'Strong background in dashboards, streaming systems, monitoring, and live data-driven experiences.',
    },
  ],
  certifications: [
    { name: 'Generative AI Certification', issuer: 'Accenture Internal Training' },
    { name: 'Claude AI Architecture', issuer: 'Accenture Internal Training' },
    { name: 'Advanced Internal Trainings', issuer: 'Accenture' },
  ],
  education: {
    degree: 'Bachelor of Technology in Computer Science Engineering',
    institution: 'Sri Mittapalli College, JNTUK',
    duration: '2019 - 2023',
    score: 'CGPA: 7.49',
  },
}
