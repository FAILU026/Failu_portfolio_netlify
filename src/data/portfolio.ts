import type { PortfolioData } from '../types/portfolio'
import profile from '../assets/portfolio-img.png'


export const portfolioData: PortfolioData = {
  personal: {
    name: 'Failur Rahuman S',
    title: 'Software Developer',
    roles: ['Software Developer', 'FullStack Developer', 'React.js Developer', 'AI Product Developer'],
    tagline:
      'Full-Stack Software Developer building scalable web applications with React.js, TypeScript, FastAPI, PostgreSQL, and AI.',
    location: 'Riyadh, Saudi Arabia',
    email: 'failurrahumanjpm@gmail.com',
    phone: '+966 596045505',
    website: 'failur-portfolio.netlify.app',
    resumeUrl: '/resume.pdf',
    avatar: profile,
    eyebrow: 'Full-Stack Software Developer',
    heroHeadline: 'Building scalable products from frontend to backend.',
    heroIntro:
      'I build production-ready web applications across the full stack — from React.js and TypeScript interfaces to FastAPI services, PostgreSQL databases, REST APIs, and AI-powered features.',
  },

  socials: [
    { label: 'GitHub', url: 'https://github.com/FAILU026', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/failurrahuman', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:failurrahumanjpm@gmail.com', icon: 'email' },
  ],

  nav: [
    { label: 'Home', path: '/', icon: 'home' },
    { label: 'Portfolio', path: '/portfolio', icon: 'layout' },
    { label: 'Resume', path: '/resume', icon: 'file' },
    { label: 'Services', path: '/services', icon: 'briefcase' },
    { label: 'Certificates', path: '/certificates', icon: 'award' },
    { label: 'Contact', path: '/contact', icon: 'email' },
  ],

  about: {
    summary: [
      "I'm a Full-Stack Software Developer focused on building scalable, accessible, and high-performance web applications using React.js, TypeScript, Next.js, FastAPI, Python, and PostgreSQL.",
      'I work across the product lifecycle — building responsive frontend experiences, reusable component systems, RESTful APIs, backend services, database integrations, analytics dashboards, and AI-powered features. I also have experience contributing to React Native applications and delivering products in Agile environments.',
    ],
    philosophy:
      'I focus on building products that are not only visually polished, but also maintainable, accessible, performant, and reliable behind the interface — from the first UI component to the backend API and data layer.',
    focus: 'Full-Stack Web Development + AI',
    facts: [
      { label: 'Experience', value: '3+ Years' },
      { label: 'Projects', value: '4+' },
      { label: 'Technologies', value: '20+' },
      { label: 'Focus', value: 'Full Stack + AI' },
    ],
  },

  skills: [
    { name: 'React.js', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'JavaScript (ES6+)', category: 'Frontend' },
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS3 / SASS', category: 'Frontend' },
    { name: 'Server-Side Rendering', category: 'Frontend' },

    { name: 'Material UI', category: 'UI Libraries' },
    { name: 'Ant Design', category: 'UI Libraries' },
    { name: 'Tailwind CSS', category: 'UI Libraries' },
    { name: 'Bootstrap', category: 'UI Libraries' },
    { name: 'Recharts', category: 'UI Libraries' },
    { name: 'Framer Motion', category: 'UI Libraries' },

    { name: 'Component-Based Architecture', category: 'Architecture' },
    { name: 'Redux', category: 'Architecture' },
    { name: 'Context API', category: 'Architecture' },
    { name: 'State Management', category: 'Architecture' },
    { name: 'REST API Integration', category: 'Architecture' },

    { name: 'React Native', category: 'Mobile' },

    { name: 'FastAPI', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'RESTful APIs', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Backend' },
    { name: 'SQLAlchemy', category: 'Backend' },
    { name: 'API Design & Integration', category: 'Backend' },

    { name: 'Google Cloud Platform', category: 'Cloud & AI' },
    { name: 'Google AI Services', category: 'Cloud & AI' },
    { name: 'Ollama', category: 'Cloud & AI' },
    { name: 'GitHub Copilot', category: 'Cloud & AI' },
    { name: 'Claude', category: 'Cloud & AI' },
    { name: 'v0', category: 'Cloud & AI' },

    { name: 'Git & GitHub', category: 'Tools' },
    { name: 'Vite', category: 'Tools' },
    { name: 'Jest', category: 'Tools' },
    { name: 'React Testing Library', category: 'Tools' },
    { name: 'Jira', category: 'Tools' },
    { name: 'Figma', category: 'Tools' },
    { name: 'Netlify', category: 'Tools' },

    { name: 'WCAG 2.1 Accessibility', category: 'Practices' },
    { name: 'Agile / Scrum', category: 'Practices' },
    { name: 'Code Review', category: 'Practices' },
    { name: 'Performance Optimization', category: 'Practices' },
  ],

  experience: [
    {
      id: 'exp-1',
      role: 'Software Developer',
      company: 'Visiblestars Technologies',
      period: 'Apr 2025 — Present',
      location: 'Remote — Saudi Arabia',
      description:
        'Building and delivering full-stack product features across multiple sprint cycles, working across React.js, TypeScript, FastAPI, REST APIs, analytics, and AI-assisted development workflows.',
      responsibilities: [
        'Developed responsive frontend features using React.js, TypeScript, Redux, Material UI, and Vite across multiple product sprints',
        'Designed and implemented RESTful APIs with FastAPI for scalable data processing, backend workflows, and third-party integrations',
        'Contributed to a cross-platform React Native application with analytics dashboards and interactive visualizations using Recharts and Framer Motion',
        'Worked across frontend and backend layers to connect user experiences with APIs and data-driven product features',
        'Drove engineering quality through code reviews, WCAG 2.1 accessibility practices, component architecture, and design-system standards',
      ],
      technologies: ['React.js', 'TypeScript', 'Redux', 'Material UI', 'Vite', 'React Native', 'FastAPI'],
    },
    {
      id: 'exp-2',
      role: 'Software Developer',
      company: 'CloudNow Technologies Pvt Ltd',
      period: 'May 2024 — Apr 2025',
      location: 'Chennai, India',
      description:
        'Engineered enterprise web applications with React.js, TypeScript, and Tailwind CSS, building scalable, reusable component libraries with Recharts visualizations and Framer Motion animations for product-wide UI consistency.',
      responsibilities: [
        'Led development of Allaboard, a responsive employee onboarding platform featuring WCAG 2.1-compliant UI components',
        'Built and maintained the company website using HTML5, CSS3, Bootstrap, and jQuery, ensuring cross-browser compatibility',
        'Improved application reliability through unit and component testing with Jest and React Testing Library, iterative defect resolution, and sprint-based delivery',
      ],
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Framer Motion', 'Jest'],
    },
    {
      id: 'exp-3',
      role: 'Junior Software Developer',
      company: 'Fossfreaks Pvt Ltd',
      period: 'May 2023 — May 2024',
      location: 'Chennai, India',
      description:
        'Developed accessible frontend features using React.js and Next.js (SSR), integrating REST APIs and building Recharts data visualizations while applying hooks, component lifecycle patterns, and responsive design principles.',
      responsibilities: [
        'Contributed to code reviews with senior engineers, applying best practices in component architecture, accessibility, and testing',
        'Built strong foundations in state management and UI development',
        'Participated in Agile sprint planning and feature estimation workflows',
      ],
      technologies: ['React.js', 'Next.js', 'REST APIs', 'Recharts'],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Engineering, Computer Science and Engineering',
      institution: 'SRM Valliammai Engineering College',
      location: 'Chennai, Tamil Nadu, India',
      period: 'Graduated 2023',
      detail: 'CGPA: 8.64 / 10',
    },
  ],

  certifications: [
    { id: 'cert-1', name: 'Meta Front-End Developer', issuer: 'Meta', credentialUrl:"https://www.coursera.org/account/accomplishments/certificate/IVCGFYC71C4L", image: '' },
    { id: 'cert-2', name: 'Meta React Specialization', issuer: 'Meta',  credentialUrl:"https://www.coursera.org/account/accomplishments/specialization/certificate/V2BJDVK3UJGY", image: '' },
    { id: 'cert-3', name: 'Advance React', issuer: 'Meta',  credentialUrl:"https://www.coursera.org/account/accomplishments/verify/TY0LGKAVVXTB", image: '' },
    { id: 'cert-4', name: 'Project On Web Phising Detection', issuer: 'IBM',  credentialUrl:"https://courses.ictacademy.skillsnetwork.site/certificates/0ba1020b9cad4bc2be089fa17f573d05", image: '' },
    { id: 'cert-5', name: 'SQL and Relational Databases',  credentialUrl:"https://courses.cognitiveclass.ai/certificates/61335faa30e64afc81be50b568bb8387", issuer: 'IBM', image: '' },
    { id: 'cert-6', name: 'CSS and Bootstrap', issuer: 'Udemy',  credentialUrl:"https://www.udemy.com/certificate/UC-41257525-22f8-46f7-a394-2adabac877ef/", image: '' },
  ],

  projects: [
    {
      id: 'proj-1',
      title: 'Offline Enterprise AI Assistant',
      subtitle: 'Privacy-first, on-premise AI knowledge assistant',
      description:
        'A privacy-first AI assistant enabling organizations to securely interact with internal knowledge bases without relying on external AI services. Built with Next.js and TypeScript, it provides conversational search, document exploration, and AI-assisted knowledge retrieval.',
      problem:
        'Enterprises need AI-assisted knowledge retrieval without sending sensitive internal documents to third-party AI services.',
      image: '',
      category: 'AI Product',
      technologies: ['Next.js', 'TypeScript', 'FastAPI', 'Ollama'],
      featured: true,
    },
    {
      id: 'proj-2',
      title: 'Crux 360',
      subtitle: 'AI-driven survey platform',
      description:
        'A responsive and accessible AI-powered survey platform built with React.js, TypeScript, and Material UI, enabling real-time data collection with a clean, intuitive interface and Google Cloud AI-driven sentiment analysis.',
      problem: 'Businesses need real-time survey data collection paired with automated, intelligent insights.',
      image: '',
      category: 'AI Product',
      technologies: ['React.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Google Cloud AI'],
      featured: true,
    },
    {
      id: 'proj-3',
      title: 'Crux',
      subtitle: 'AI-driven analytics mobile app',
      description:
        'A cross-platform mobile application built with React Native, delivering real-time analytics dashboards with interactive charts, AI-based recommendations, sentiment analysis, and predictive analytics across iOS and Android.',
      problem: 'Stakeholders need to monitor KPIs and spot business patterns on the go, across platforms.',
      image: '',
      category: 'Dashboard',
      technologies: ['React Native', 'Recharts', 'Predictive Analytics'],
      featured: false,
    },
    {
      id: 'proj-4',
      title: 'Allaboard',
      subtitle: 'Employee onboarding platform',
      description:
        'A web-based employee onboarding system built with React.js, TypeScript, Ant Design, and Tailwind CSS, with a reusable component library and design system enforcing UI consistency across the platform.',
      problem: 'HR teams needed a streamlined, accessible onboarding workflow to replace manual processes.',
      image: '',
      category: 'Web App',
      technologies: ['React.js', 'TypeScript', 'Ant Design', 'Tailwind CSS'],
      featured: false,
    },
    {
      id: 'proj-5',
      title: 'Master Gold',
      subtitle: 'Full-stack business management system',
      description:
        'A personal full-stack business management system for customer, product, vendor, purchase, invoicing, payment, receivable, payable, cheque, and inventory management.',
      problem: 'Businesses need a centralized system to manage daily transactions, inventory, payments, and operational data in one place.',
      image: '',
      category: 'Web App',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'PostgreSQL'],
      featured: true,
    },
  ],

  services: [
    {
      number: '01',
      icon: 'layout',
      title: 'Full-Stack Web Application Development',
      description: 'Building production-ready web applications across React.js, TypeScript, FastAPI, REST APIs, and PostgreSQL.',
    },
    {
      number: '02',
      icon: 'sparkles',
      title: 'Frontend Engineering & UI Systems',
      description: 'Creating responsive, accessible interfaces with React.js, TypeScript, reusable components, and modern UI systems.',
    },
    {
      number: '03',
      icon: 'figma',
      title: 'Backend & REST API Development',
      description: 'Designing FastAPI services, RESTful APIs, backend workflows, and integrations that support scalable products.',
    },
    {
      number: '04',
      icon: 'server',
      title: 'Database & Data Integration',
      description: 'Working with PostgreSQL and API-driven data flows to build reliable, data-focused application features.',
    },
    {
      number: '05',
      icon: 'smartphone',
      title: 'AI-Powered Product Features',
      description: 'Integrating Google AI services and local AI models to deliver practical AI-powered application experiences.',
    },
    {
      number: '06',
      icon: 'zap',
      title: 'Performance, Accessibility & Quality',
      description: 'Improving performance, accessibility, testing, and code quality across the application stack.',
    },
  ],

  stats: [
    { value: '5', suffix: '+', label: 'Projects Built' },
    { value: '3', suffix: '+', label: 'Years Experience' },
    { value: '20', suffix: '+', label: 'Technologies' },
    { value: '3', suffix: '', label: 'Companies' },
  ],

  testimonials: [
    {
      id: 'test-1',
      quote:
        'Placeholder testimonial text. Replace with a real quote from a client, colleague, or collaborator once available.',
      name: '[Client Name]',
      role: '[Role]',
      company: '[Company]',
    },
    {
      id: 'test-2',
      quote:
        'Placeholder testimonial text. Replace with a real quote from a client, colleague, or collaborator once available.',
      name: '[Client Name]',
      role: '[Role]',
      company: '[Company]',
    },
    {
      id: 'test-3',
      quote:
        'Placeholder testimonial text. Replace with a real quote from a client, colleague, or collaborator once available.',
      name: '[Client Name]',
      role: '[Role]',
      company: '[Company]',
    },
  ],
}
