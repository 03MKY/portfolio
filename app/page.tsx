"use client";
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
            width={150}
            height={150}
            className="rounded-full shadow-lg shadow-accent md:w-50 md:h-50"
          />

          {/* Bio Data */}
          <div>
            <h1 className="text-xl md:text-4xl font-bold text-secondary mb-4">
              Hi, I&apos;m {userData.name}!
            </h1>
            <div className="max-w-175 px-4 md:px-20 text-center text-sm md:text-lg font-medium">
              {userData.bio}
            </div>
          </div>
          {/* Resume and LinkedIn */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
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
              label="Download CV"
              onClick={() => window.open(userData.resumePdf)}
              variant="primary"
            />
          </div>

          {/* Skills */}
          <div className="flex flex-col flex-wrap gap-4 justify-center text-accent mt-10">
            <h3 className="text-lg font-semibold">EXPERIENCE WITH</h3>
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center mt-4 text-secondary-foreground">
              <SiPython className="icons" />
              <SiJavascript className="icons" />
              <SiGit className="icons" />
              <SiHtml5 className="icons" />
              <SiCss3 className="icons" />
              <SiMongodb className="icons" />
              <SiPostgresql className="icons" />
              <SiReact className="icons" />
              <SiNextdotjs className="icons" />
            </div>
          </div>
        </div>
      </div>
      <ProjectPage />
      <ExperiencePage />
      <ContactPage />
    </>
  );
}
