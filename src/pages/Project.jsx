import React from "react"; // Import React
import "../App.css";
import ProjectCard from "../components/projectCard";
import "aos/dist/aos.css";

function Project() {
  return (
    <div>
      <div className="py-20 max-sm:py-10 max-sm:px-5">
        {/* Change col-span-1 to grid */}
        <div className="w-full h-20 bg-white rounded-xl shadow-md overflow-hidden max-sm:w-full max-sm:h-14" data-aos="fade-down" data-aos-duration="1000">
          <div className="py-5 max-sm:py-3">
            <h1 className="pb-3 text-3xl text-center font-bold lg:text-3xl md:text-2xl max-sm:text-xl">Project</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-3 py-10 justify-center justify-items-center gap-y-5m 2xl:grid-cols-4 min-xl:grid-cols-4 md:grid-cols-2 md:gap-y-5 max-lg:gap-y-5 max-xs:grid-cols-1 max-sm:grid-cols-1 max-sm:gap-x-0 max-sm:gap-y-5">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default Project;
