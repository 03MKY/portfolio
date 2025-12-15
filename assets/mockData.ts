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
  contact: {
    email: "mohitkr76778@gmail.com",
    github: "https://github.com/03MKY",
  },
};

export default userData;
