import React, { useLayoutEffect, useRef } from "react"; // Import React
import "../App.css";
import ProjectCard from "../components/projectCard";
import "aos/dist/aos.css";

function Project() {
  return (
    <div>
      <div className="py-[170px] max-sm:py-10 max-sm:px-5">
        {/* Header */}
        <div className="flex justify-center items-center">
          <h1
            className="font-bold uppercase text-white text-center 2xl:text-[50px] max-sm:text-[30px] md:text-[40px]"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            My Projects
          </h1>
        </div>
        {/* Change col-span-1 to grid */}
        <div className="rid gap-5 py-10 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default Project;
