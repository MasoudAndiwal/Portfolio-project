import {
  mobile,
  backend,
  creator,
  web,
  meta,
  starbucks,
  tesla,
  shopify,
  work,
  yoom,
  interview,
  firstsaas,
  iphone,
  // import the skill from assets 
  html,
  css,
  figma,
  javascript,
  react,
  nextjs,
  tailwind,
  laravel,
  postgresql,
  nodejs,
  mongodb,
  typescript,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];
// add the skills in technologies 
const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
 
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
 
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2019 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio 3D",
    description:
      "A modern 3D portfolio website showcasing my development skills and projects. Features interactive 3D elements, smooth animations, and a responsive design built with React and Three.js.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "blue-text-gradient",
      }
    ],
    image: work,
    source_code_link: "https://portfolio-project-bngi-git-main-masouds-projects-56c1e72b.vercel.app/"
  },
  {
    name: "Ai Interview Platform",
    description:
      "An intelligent AI-powered interview platform designed to help candidates practice for job interviews. Features automated feedback, customizable interview scenarios, and performance analytics to improve interview skills.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "Vapi",
        color: "blue-text-gradient",
      },
      {
        name: "API integration",
        color: "blue-text-gradient",
      }
    ],
    image: interview,
    source_code_link: "https://interview-platfrom-roan.vercel.app"
  },
  {
    name: "Zoom clone",
    description:
      "A zoom clone application built with Next.js and Node.js. Features real-time video conferencing, screen sharing and screen recording.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Clerk",
        color: "pink-text-gradient",
      },
      {
        name: "Stream",
        color: "blue-text-gradient",
      },
    ],
    image: yoom,
    source_code_link: "https://yoom-video-room.vercel.app"
  },
  {
    name: "Canverso",
    description:
      "An AI-powered learning platform that uses natural language processing to create personalized education paths and interactive learning experiences for students of all levels.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Clerk",
        color: "pink-text-gradient",
      },
      {
        name: "Vapi",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "blue-text-gradient",
      }
    ],
    image: firstsaas,
    source_code_link: "https://saas-app-alpha.vercel.app"
  },
  // Apple Iphone 
  {
    name: "Iphone Clone",
    description:
      "A modern Apple iPhone showcase website with detailed product information, interactive 3D models, and a seamless shopping experience. Features include product comparison, customization options, and technical specifications.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: iphone,
    source_code_link: "https://iphon-cyan.vercel.app"
  },
  {
    name: "Admin Dashboard",
    description:
      "A comprehensive admin dashboard with user management, analytics, and data visualization. Built with React and modern UI components.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chartjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    source_code_link: "https://github.com/"
  },
  {
    name: "Home Rental Platform",
    description:
      "A full-featured home rental platform with property listings, search filters, and booking system. Includes user authentication and payment integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "blue-text-gradient",
      }
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    source_code_link: "https://github.com/"
  },
];

export { services, technologies, experiences, testimonials, projects };
