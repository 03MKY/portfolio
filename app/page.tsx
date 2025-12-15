"use client";
import AboutPage from "@/compnents/core/about";
import ContactPage from "@/compnents/core/contact";
import ExperiencePage from "@/compnents/core/experience";
import ProjectPage from "@/compnents/core/project";

import userData from "@/assets/mockData";

import Image from "next/image";
import Button from "@/compnents/core/Button";
import {
  SiPython,
  SiJavascript,
  SiGit,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

export default function Home() {
  return (
    <>
      <div className="page bg-main flex justify-center pt-10">
        <div className="flex flex-col items-center justify-center text-center p-4 space-y-10">
          {/* Profile Picture */}
          <Image
            src={userData.dpImage}
            alt=""
            width={200}
            height={200}
            className="rounded-full shadow-lg shadow-accent"
          />
          {/* Bio Data */}
          <div className="max-w-175 text-center text-lg font-medium">
            {userData.bio}
          </div>
          {/* Resume and LinkedIn */}
          <div className="flex space-x-6">
            <Button
              label="Get In Touch"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              variant="secondary"
            />
            <Button
              label="Download Resume"
              onClick={() => window.open(userData.resumePdf)}
              variant="primary"
            />
          </div>

          {/* Skills */}
          <div className="flex flex-col flex-wrap gap-4 justify-center text-accent mt-10">
            <h3 className="text-lg font-semibold">EXPERIENCE WITH</h3>
            <div className="flex flex-wrap gap-6 justify-center mt-4 text-secondary-foreground">
              <SiPython size={40} />
              <SiJavascript size={40} />
              <SiGit size={40} />
              <SiHtml5 size={40} />
              <SiCss3 size={40} />
              <SiMongodb size={40} />
              <SiPostgresql size={40} />
              <SiReact size={40} />
              <SiNextdotjs size={40} />
            </div>
          </div>
        </div>
      </div>
      <AboutPage />
      <ExperiencePage />
      <ProjectPage />
      <ContactPage />
    </>
  );
}
