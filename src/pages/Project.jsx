import React from "react"; // Import React
import "../App.css";
import ProjectCard from "../components/projectCard";
import "aos/dist/aos.css";

function Project() {
  return (
    <div>
      <div className="py-[170px] max-sm:py-10 max-sm:px-5">
        {/* Change col-span-1 to grid */}
        <div className="grid grid-cols-1 gap-x-3 py-10 justify-center justify-items-center gap-y-5m 2xl:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 md:gap-y-5 max-lg:gap-y-5 max-xs:grid-cols-1 max-sm:grid-cols-1 max-sm:gap-x-0 max-sm:gap-y-5">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default Project;
