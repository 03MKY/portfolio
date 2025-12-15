import userData from "@/assets/mockData";
import { LuExternalLink } from "react-icons/lu";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <div id="project" className="page">
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-4xl sm:text-6xl font-bold bg-linear-to-b from-highlight to-secondary bg-clip-text text-transparent mb-6 sm:mb-10">
          PROJECTS
        </h3>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-20 justify-center mt-6">
          {userData.projects.map((project) => (
            <div className="rounded-t-lg w-full sm:w-80 h-48 sm:h-60 relative shadow-lg shadow-muted hover:shadow-highlight transition-shadow duration-300">
              <Image
                src={project.image!}
                alt=""
                width={320}
                height={240}
                className="w-full h-full object-cover rounded-t-lg"
              />

              <div
                className="flex items-start justify-between bottom-0 left-0 right-0 bg-muted bg-opacity-50 p-3 sm:p-2 rounded-b-lg cursor-pointer"
                onClick={() => window.open(project.siteLink, "_blank")}
              >
                <div className="flex flex-col justify-between items-start">
                  <span className="text-xs sm:text-sm">
                    CLICK HERE TO VISIT
                  </span>
                  <span className="uppercase font-bold text-sm sm:text-base">
                    {project.title}
                  </span>
                </div>
                <LuExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
