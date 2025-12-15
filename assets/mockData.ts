export interface PortfolioData {
  name: string;
  bio: string;
  dpImage: string;
  resumePdf: string;
  skills: string[];
  projects: { title: string; description: string; link?: string }[];
  contact: { email: string; linkedin?: string; github?: string };
}

const userData: PortfolioData = {
  name: "Mohit",
   bio: "A dedicated Python developer with a strong passion for data science and backend engineering. Expertise in building robust web applications using Django, managing relational data with PostgreSQL, and handling unstructured data with MongoDB. Committed to crafting scalable, efficient solutions that turn data into actionable insights.",
  dpImage: "/anime.jpg",
  resumePdf: "/resume.pdf",
  skills: ["React", "Next.js", "TypeScript"],
  projects: [{ title: "Portfolio", description: "My personal site" }],
  contact: {
    email: "mohitkr76778@gmail.com",
    github: "https://github.com/03MKY",
  },
};

export default userData;

