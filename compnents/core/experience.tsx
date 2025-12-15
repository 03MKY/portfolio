import userData from "@/assets/mockData";

export default function ExperiencePage() {
  return (
    <div id="experience" className="page">
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-4xl sm:text-6xl font-bold bg-linear-to-b  from-primary/90 to-primary bg-clip-text text-transparent mb-6 sm:mb-10">
          EXPERIENCE
        </h3>

        <div className="flex flex-col gap-6 sm:gap-8 mt-6 sm:mt-10 w-full max-w-3xl px-4 sm:px-6">
          {userData.experience?.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 text-left text-secondary-foreground"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center font-bold">
                <span className="text-lg sm:text-xl text-foreground">
                  {exp.role} at {exp.company}
                </span>
                <span className="font-normal text-sm sm:text-base">
                  {exp.from} - {exp.to}
                </span>
              </div>
              <div className="text-sm sm:text-base">{exp.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
