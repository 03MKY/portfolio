export interface PortfolioData {
  name: string;
  bio: string;
  dpImage: string;
  resumePdf: string;
  skills: string[];
  projects: {
    title: string;
    description: string;
    link?: string;
    image?: string;
    siteLink?: string;
    githubLink?: string;
  }[];
  experience?: {
    company: string;
    role: string;
    from: string;
    to: string;
    description: string;
  }[];
  contact: { email: string; linkedin?: string; github?: string };
}

const userData: PortfolioData = {
  name: "Mohit",
  bio: "Passionate Python developer specializing in data science and backend development with Django, PostgreSQL, and MongoDB.",
  dpImage: "/anime.jpg",
  resumePdf: "/resume.pdf",
  skills: ["React", "Next.js", "TypeScript"],
  projects: [
    {
      title: "Portfolio",
      description: "My personal site",
      image: "/anime.jpg",
      siteLink: "https://mohitky.vercel.app",
      githubLink: "https://github.com/03MKY/portfolio",
    },
    {
      title: "Portfolio",
      description: "My personal site",
      image: "/anime.jpg",
      siteLink: "https://mohitky.vercel.app",
      githubLink: "https://github.com/03MKY/portfolio",
    },
  ],
  experience: [
    {
      company: "Innovate Labs",
      role: "Lead Engineer",
      from: "Jan 2025",
      to: "Present",
      description:
        "As Lead Engineer at Innovate Labs, I managed full-stack projects with React and Node.js. I mentored teams, improved CI/CD processes, and ensured scalable architecture.",
    },
    {
      company: "Data Solutions Inc",
      role: "Senior Developer",
      from: "Jan 2023",
      to: "Dec 2024",
      description:
        "As Senior Developer at Data Solutions Inc, I led backend development with Python and Django. I optimized databases using PostgreSQL and implemented data pipelines for analytics.",
    },
    {
      company: "Tech Corp",
      role: "Software Engineer",
      from: "Jan 2020",
      to: "Dec 2022",
      description:
        "As Software Engineer at Tech Corp, I developed web applications using React and Node.js. I maintained code quality through testing and collaborated on agile teams.",
    },
  ],
  contact: {
    email: "mohitkr76778@gmail.com",
    github: "https://github.com/03MKY",
  },
};

export default userData;
