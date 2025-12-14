import AboutPage from "@/compnents/core/about";
import ContactPage from "@/compnents/core/contact";
import ExperiencePage from "@/compnents/core/experience";
import ProjectPage from "@/compnents/core/project";
import Footer from "@/compnents/Footer";

export default function Home() {
  return (
    <>
      <div className="page bg-main">
        <h1>Home Page</h1>
      </div>
      <AboutPage />
      <ExperiencePage />
      <ProjectPage />
      <ContactPage />
      <Footer />
    </>
  );
}
