import React, { useLayoutEffect, useRef } from "react"; // Import React
import "../App.css";
import ProjectCard from "../components/projectCard";
import "aos/dist/aos.css";

function Project() {
  return (
    <div>
      <div className="py-[170px] max-sm:py-10 max-sm:px-5">
        {/* Change col-span-1 to grid */}
        <div className="grid grid-cols-2 gap-5 py-10 justify-center justify-items-center 2xl:grid-cols-2 max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default Project;
