import React, { useState } from "react";
import "../App.css";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import soaPhoto from "../images/projectImages/sliceOfArt.png";
import ioWebDev from "../images/projectImages/ioWebDev.png";
import unityGame from "../images/projectImages/unityGame.png";
import sewalletImage from "../images/projectImages/sewalletImage.png";
import "aos/dist/aos.css";

const ProjectContent = [
  {
    id: 1,
    name: "Slice of Art",
    desc: "Slice of Art is an e-commerce platform engaged in art.The name “Slice of Art” is a representation of the pieces of artwork available for sale on this platform.",
    type: "Web Development",
    image: soaPhoto,
    Tech: "",
    transition: "fade-right",
    durations: "2000",
  },
  {
    id: 2,
    name: "Go Green Campaign",
    desc: "The Website for participation at I/O FEST Tarumanagara Web Dev Competition is a dynamic and visually engaging web application created using HTML, CSS, JavaScript, and Git.",
    type: "Web Development",
    image: ioWebDev,
    Tech: "",
    transition: "fade-right",
    durations: "1000",
  },
  {
    id: 3,
    name: "100 Days on Mars - Unity",
    desc: "Slice of Art is an e-commerce platform engaged in art. In the context of e-commerce commission art.",
    type: "Games Development",
    image: unityGame,
    Tech: "",
    transition: "fade-left",
    durations: "1000",
  },
  {
    id: 4,
    name: "UI/UX Design SEWALLET",
    desc: "Slice of Art is an e-commerce platform engaged in art. In the context of e-commerce commission art.",
    longDecs : "",
    type: "UI/UX Design",
    image: sewalletImage,
    Tech: "",
    transition: "fade-left",
    durations: "2000",
  },
];

export const ProjectCard = () => {
  const [open, setOpen] = useState(false); // State to control dialog open/close
  const [selectedProject, setSelectedProject] = useState(null); // State to store the selected project details

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };
  return (
    <>
      {ProjectContent.map((project) => (
        <figure key={project.id} className="relative h-96 w-full" id="projectCard" onClick={() => handleOpen(project)} data-aos={project.transition} data-aos-duration={project.durations}>
          <img className="h-full w-full rounded-xl object-cover object-center grayscale hover:grayscale-0 hover:animate-pulse cursor-pointer " src={project.image} alt="nature image" />
          <figcaption className="absolute px-5 bottom-0 w-full justify-between pt-6 text-white bg-gradient-to-t from-black from-20% to-transparent to-90% rounded-xl" style={{ height: "140px" }}>
            <div>
              <a className="font-bold border-none rounded-none text-xl drop-shadow-lg">{project.name}</a>
              <p className="drop-shadow-lg">{project.type}</p>
            </div>
          </figcaption>
        </figure>
      ))}
      {/* Pop up Project */}
      {selectedProject && (
        <Dialog open={open} handler={handleClose} className="DialogBox">
          <DialogHeader>
            <div className="flex gap-8 justify-center">
              <div className="flex-none w-32 flex items-center">
                <div className="items-start">Kinethix</div>
              </div>
              <div className="grow text-center flex items-center" style={{ width: "900px" }}>
                <div className="mx-auto">{selectedProject.name}</div>
              </div>
              <div className="w-32 flex justify-end items-end">
                <div className="items-end">
                  <Button variant="text" color="red" onClick={handleClose}>
                    <span>X</span>
                  </Button>
                </div>
              </div>
            </div>
          </DialogHeader>
          <DialogBody className="py-2">
            <div className="grid grid-cols-3 gap-4">
              <div className="object-cover">
                <img src={selectedProject.image} alt="image 1" className="object-cover" />
              </div>
              <div className=" bg-white rounded-xl text-black p-5">
                <p>{selectedProject.desc}</p>
              </div>
              <div className="bg-white rounded-xl text-black p-5">
                <p>{selectedProject.desc}</p>
              </div>
            </div>
          </DialogBody>
          <DialogFooter>{/* Your dialog footer buttons */}</DialogFooter>
        </Dialog>
      )}
    </>
  );
};

export default ProjectCard;
