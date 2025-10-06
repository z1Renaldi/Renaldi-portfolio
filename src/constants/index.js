export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

// constants/certificates.js
export const certificates = [
  {
    id: 1,
    title: 'E-Certificate BCA IT Works 2023_Web_RENALDI T WIJAYADI',
    issuer: 'Bank Central Asia',
    date: '2023',
    img: '/certs/BCAWEB.png', // <-- path dari /public
    credentialUrl: '#',
  },
  {
    id: 2,
    title: 'E-Certificate BCA IT Works 2023_API_RENALDI T. WIJAYADI',
    issuer: 'Bank Central Asia',
    date: '2023',
    img: '/certs/BCAPI.png',
    credentialUrl: '#',
  },
  {
    id: 3,
    title: 'E-Certificate BCA IT Works 2023_Container_RENALDI T WIJAYADI',
    issuer: 'Bank Central Asia',
    date: '2023',
    img: '/certs/BCACONT.png',
    credentialUrl: '#',
  },
  {
    id: 4,
    title: 'SAPIntroduction',
    issuer: 'ITHB(Institut Teknologi Harapan Bangsa)',
    date: '2022',
    img: '/certs/SAPINT.png',
    credentialUrl: '#',
  },
  {
    id: 5,
    title: 'SAPConfiguration',
    issuer: 'ITHB(Institut Teknologi Harapan Bangsa)',
    date: '2022',
    img: '/certs/SAPCONFG.png',
    credentialUrl: '#',
  },
  {
    id: 6,
    title: 'Cybersecurity Overview & ISO/IEC 27001:2013',
    issuer: 'TAALENTA',
    date: '2022',
    images: ['/certs/CVB1.png', '/certs/CVB2.png'],
    credentialUrl: '#',
  },
  {
    id: 7,
    title: 'Basic Penetration Testing & Ethical Hacking',
    issuer: 'TAALENTA',
    date: '2023',
    images: ['/certs/PEN1B1.png', '/certs/PEN1B2.png'],
    credentialUrl: '#',
  },
  {
    id: 8,
    title: 'Intermediate Penetration Testing & Ethical Hacking',
    issuer: 'TAALENTA',
    date: '2023',
    images: ['/certs/PEN2B1.png', '/certs/PEN2B2.png'],
    credentialUrl: '#',
  },
  {
    id: 9,
    title: 'The Complete Cyber Security Course: Hackers Exposed!',
    issuer: 'Udemy',
    date: '24 Feb 2024',
    img: '/certs/UDEMY1.png',
    credentialUrl: '#',
  },
];

export const myProjects = [
  {
    title: 'Internal Management Web Application — BCA',
    desc: 'Developed an internal management system to streamline administrative and operational processes within the division, improving efficiency and collaboration.',
    subdesc:
      'Created during my internship at PT Bank Central Asia (BCA) using Vue.js and TypeScript. Designed and implemented responsive UI components, integrated RESTful APIs, configured reverse proxy for secure communication, and conducted iterative testing to deliver a fully functional web-based solution ready for internal deployment.',
    logo: '/assets/bca.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'vue.js',
        path: '/assets/vue.svg',
      },
      {
        id: 2,
        name: 'Vuetify',
        path: 'assets/vuetify.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Pinia',
        path: '/assets/Pinia.png',
      },
      {
        id: 5,
        name: 'Vite',
        path: '/assets/Vite.png',
      },
    ],
  },
  {
    title: 'ProjectTrack — Internal Project Management System',
    desc: 'A web-based internal application that centralizes projects, tasks, and team progress with secure login, role-based access, and an executive dashboard for clear, real-time visibility.',
    subdesc:
      'Includes a project workspace, personal task board, and analytics dashboard to monitor deadlines, status, and workload—streamlining collaboration and improving on-time delivery for academic and organizational use.',

    texture: '/textures/project/project2.mp4',
    logo: '/assets/pangripta.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'vue.js',
        path: '/assets/vue.svg',
      },
      {
        id: 2,
        name: 'vuetify',
        path: 'assets/vuetify.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'JSON',
        path: '/assets/json.png',
      },
    ],
  },
  // {
  //   title: 'CarePulse - Health Management System',
  //   desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
  //   subdesc:
  //     'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
  //   href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
  //   texture: '/textures/project/project3.mp4',
  //   logo: '/assets/project-logo3.png',
  //   logoStyle: {
  //     backgroundColor: '#60f5a1',
  //     background:
  //       'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
  //     border: '0.2px solid rgba(208, 213, 221, 1)',
  //     boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
  //   },
  //   spotlight: '/assets/spotlight3.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Horizon - Online Banking Platform',
  //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
  //   subdesc:
  //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
  //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
  //   texture: '/textures/project/project4.mp4',
  //   logo: '/assets/project-logo4.png',
  //   logoStyle: {
  //     backgroundColor: '#0E1F38',
  //     border: '0.2px solid #0E2D58',
  //     boxShadow: '0px 0px 60px 0px #2F67B64D',
  //   },
  //   spotlight: '/assets/spotlight4.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Imaginify - AI Photo Manipulation App',
  //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //   subdesc:
  //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
];

// constants/index.js
export const calculateSizes = (isSmall, isMobile, isTablet) => {
  const pick = (s, m, t, d) => (isSmall ? s : isMobile ? m : isTablet ? t : d);

  // --- meja & elemen kanan tetap
  const deskScale = pick(0.05, 0.06, 0.065, 0.065);
  const deskPosition = pick([0.5, -4.5, 0], [0.5, -5.0, 0], [0.3, -5.3, 0], [0.25, -5.5, 0]);

  const TSPosition = pick([5, 4, 0], [7, 4, 0], [7, 4, 0], [9, 3, 0]);
  const cubePosition = pick([5, -1, 0], [8, -1, 0], [8, -1, 0], [9, -1, 0]);
  const reactLogoPosition = pick([3, 4, 0], [5, 4, 0], [5, 4, 0], [8, 3, 0]);
  const ringPosition = pick([-5, 7, 0], [-9, 9, 0], [-10, 9, 0], [-12, 9, 0]);

  // --- posisi VUE
  const vuePos = pick(
    [-5.0, -1.5, -5.0], // small
    [-8.5, 0.0, -5.0], // mobile
    [-9.5, 1.5, -5.0], // tablet
    [-11.0, -0.5, -5.0], // desktop
  );

  // --- target DI BAWAH logo VUE (relatif)
  // offset per breakpoint: [dx, dy, dz]
  const [vx, vy, vz] = vuePos;
  const [dx, dy, dz] = pick(
    [0.6, 2.0, 1.0], // small → kanan 0.6, turun 2.0, maju 1.0
    [0.7, 2.2, 1.2], // mobile
    [0.8, 2.3, 1.2], // tablet
    [0.9, 2.5, 1.5], // desktop
  );
  const targetPosition = [vx + dx, vy - dy, vz + dz];

  return {
    deskScale,
    deskPosition,

    TSPosition,
    cubePosition,
    reactLogoPosition,

    ringPosition,

    // ⬇️ SEKARANG SELALU di bawah Vue
    targetPosition,

    vueLogo: {
      position: vuePos,
      scale: 0.1,
    },
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title:
      'Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.',
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title:
      'Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.',
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title:
      'Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.',
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
