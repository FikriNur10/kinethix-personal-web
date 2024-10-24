import React, { useState } from "react";
import "../App.css";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Carousel } from "@material-tailwind/react";
import "aos/dist/aos.css";
// Image Import
// Slice of Art
import soaPhoto from "../images/projectImages/sliceOfArt/soa_Home.webp";
import soaPhoto2 from "../images/projectImages/sliceOfArt/soa_1920.webp";
import soaPhoto3 from "../images/projectImages/sliceOfArt/soa_WorkList.webp";
import soaPhoto4 from "../images/projectImages/sliceOfArt/soa_PaymentList.webp";
import soaPhoto5 from "../images/projectImages/sliceOfArt/soa_Payment.webp";
import soaPhoto6 from "../images/projectImages/sliceOfArt/soa_ChatPage.webp";
import soaPhoto7 from "../images/projectImages/sliceOfArt/soa_AddWorks.webp";

// Go Green
import ioWebDev from "../images/projectImages/goGreen/ioWebDev.png";
import ioWebDev2 from "../images/projectImages/goGreen/ioWebDev_2.png";
import ioWebDev3 from "../images/projectImages/goGreen/ioWebDev_3.png";
import ioWebDev4 from "../images/projectImages/goGreen/ioWebDev_4.png";
import ioWebDev5 from "../images/projectImages/goGreen/ioWebDev_5.png";
import ioWebDev6 from "../images/projectImages/goGreen/ioWebDev_6.png";
// 100 Days on Mars
import unityGame from "../images/projectImages/100daysOnSpace/unityGame.webp";
import spaceImage2 from "../images/projectImages/100daysOnSpace/K-Fail.webp";
import spaceImage3 from "../images/projectImages/100daysOnSpace/K-Finish.webp";
import spaceImage4 from "../images/projectImages/100daysOnSpace/K-Ingame.webp";
import spaceImage5 from "../images/projectImages/100daysOnSpace/K-Menu.webp";
import spaceImage6 from "../images/projectImages/100daysOnSpace/K-Material.webp";
import spaceImage7 from "../images/projectImages/100daysOnSpace/K-ObsModelModel.webp";
import spaceImage8 from "../images/projectImages/100daysOnSpace/K-PackageManager.webp";
import spaceImage9 from "../images/projectImages/100daysOnSpace/K-PlayerModel.webp";
// SEWALLET
import sewalletCover from "../images/projectImages/sewallet/sewalletCover.png";
import sewalletImage2 from "../images/projectImages/sewallet/sewalletImage_2.png";
import sewalletImage3 from "../images/projectImages/sewallet/sewalletImage_3.png";
import sewalletImage4 from "../images/projectImages/sewallet/sewalletImage_4.png";
import sewalletImage5 from "../images/projectImages/sewallet/sewalletImage_5.png";

// TASKFY
import taskfyCover from "../images/projectImages/taskfy/tasky_cover.png";
import taskfyImage2 from "../images/projectImages/taskfy/tasky_2.png";
import taskfyImage3 from "../images/projectImages/taskfy/tasky_3.png";
import taskfyImage4 from "../images/projectImages/taskfy/tasky_4.png";
import taskfyImage5 from "../images/projectImages/taskfy/tasky_5.png";
import taskfyImage6 from "../images/projectImages/taskfy/tasky_6.png";

const Technologies = [
  {
    id: 0,
    name: "React",
    content: <i className="fa-solid fa-location-arrow px-2"></i>,
  },
  {
    id: 1,
    name: "React",
    content: <i className="fa-solid fa-location-arrow px-2"></i>,
  },
];

const ProjectContent = [
  {
    id: 1,
    name: "Slice of Art",
    desc: "Slice of Art is an e-commerce platform engaged in art.The name “Slice of Art” is a representation of the pieces of artwork available for sale on this platform.",
    type: "Web Development",
    longDecs:
      "Slice of Art is an e-commerce platform that operates in the art sector. In the context of e-commerce commissioned art, the name “Slice of Art” is a representation of the pieces of art that are available for sale on this platform. The name “Slice of Art” can be interpreted as a slice of the larger world of art available for users of this platform to enjoy.The name can also reflect that this platform provides unique and original art products and works of art, so that every piece of art sold on the platform has uniqueness and unique artistic value. So the name is enough to explain that this platform provides a space for artists to be able to promote commission art services, that is, clients/customers can order art work creation services from an artist by requesting what kind of work they want.",
    image: [soaPhoto, soaPhoto2, soaPhoto3, soaPhoto4, soaPhoto5, soaPhoto6, soaPhoto7],
    Tech: [Technologies[0], Technologies[1]],
    transition: "fade-right",
    durations: "2000",
    padding: "pb-28",
  },
  {
    id: 2,
    name: "Go Green Campaign",
    desc: "The Website for participation at I/O FEST Tarumanagara Web Dev Competition is a dynamic and visually engaging web application created using HTML, CSS, JavaScript, and Git.",
    longDecs:
      "The Earth Campaign website is an online platform aims to disseminate information and educate the public about the importance of protecting environmental life and doing environmentally friendly actions. In the digital era like now, Websites are one of the most effective media for reach the wider community so that it can be formed larger community to raise awareness of its importance preserving environmental life. The background to creating the Earth Campaign website is the fact is that more and more people are using the internet and media social as a source of information and inspiration, so this campaign can reach a larger audience and help improve awareness and action to protect the environment.",
    type: "Web Development",
    image: [ioWebDev, ioWebDev2, ioWebDev3, ioWebDev4, ioWebDev5, ioWebDev6],
    Tech: "",
    transition: "fade-left",
    durations: "1000",
    padding: "pb-28",
  },
  {
    id: 3,
    name: "100 Days on Mars - Unity",
    desc: "Slice of Art is an e-commerce platform engaged in art. In the context of e-commerce commission art.",
    longDecs:
      "In the game 100 Days on Space, players will enter an epic journey in space filled with mysteries. Sometimes, we feel that we are the only creatures in this universe, but sometimes, we feel that we are not the only ones. Players will explore the vastness of space, encountering various obstacles and dangers along their journey. In an effort to solve the mysteries that surround the universe, players must face various challenges and obstacles. They will face situations they may have never imagined before. As time goes by, players will gather insight into the universe and perhaps feel that they are not alone there. However, this journey will also reveal humanity's greedy side. Players will learn how humanity's desire to dominate and understand everything in the universe can lead to unexpected consequences",
    type: "Games Development",
    image: [
      unityGame,
      spaceImage2,
      spaceImage3,
      spaceImage4,
      spaceImage5,
      spaceImage6,
      spaceImage7,
      spaceImage8,
      spaceImage9,
    ],
    Tech: "",
    transition: "fade-right",
    durations: "1000",
    padding: "pb-28",
  },
  {
    id: 4,
    name: "UI/UX Design SEWALLET",
    desc: "Slice of Art is an e-commerce platform engaged in art. In the context of e-commerce commission art.",
    longDecs:
      "Sewallet is a fintech application that provides electronic wallet-based digital payment services. This application allows users to make bill payments, credit purchases, and money transfers quickly and easily via their cellphones. As a fintech application, one of Sewallet's main goals is to make it easier for users to carry out various financial transactions digitally. This application provides various features such as bill payments, e-wallet balance top-ups, credit purchases, and money transfers between users.",
    type: "UI/UX Design",
    image: [sewalletCover, sewalletImage2, sewalletImage3, sewalletImage4, sewalletImage5],
    Tech: "",
    transition: "fade-left",
    durations: "2000",
    padding: "pb-28",
  },
  {
    id: 5,
    name: "UI/UX Design TASKFY",
    desc: "TASKFY, an advanced task management app, is a great solution for living a more organized and organized life.",
    longDecs:
      "TASKFY, an advanced task management app, is a great solution for living a more organized and organized life. This is the story of how TASKFY can change the way you deal with the daily grind and give you powerful tools to manage your tasks. In a world full of tasks and responsibilities, it often feels like there are too many things to remember and manage. But with the presence of TASKFY, everything becomes simpler. This app offers an intuitive interface and a variety of very helpful features. With TASKFY, you can easily note down the tasks that need to be done. You can set deadlines, set priorities, and categorize the tasks. This makes you feel more organized and able to focus on what's important.",
    type: "UI/UX Design",
    image: [taskfyCover, taskfyImage2, taskfyImage3, taskfyImage4, taskfyImage5, taskfyImage6],
    Tech: "",
    transition: "fade-right",
    durations: "2000",
    padding: "pb-28",
  },
];

export const ProjectCard = () => {
  const [open, setOpen] = useState(false); // State to control dialog open/close
  const [selectedProject, setSelectedProject] = useState(null); // State to store the selected project details
  const [activeIndex, setActiveIndex] = useState(1); // Initialize activeIndex state
  // for open card
  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
    // reset active index
    setActiveIndex(1);
  };
  // for carousel
  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % selectedProject.image.length);
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + selectedProject.image.length) % selectedProject.image.length);
  };
  return (
    <>
      {ProjectContent.map((project) => (
        <figure
          key={project.id}
          className={`w-full px-5 ${project.padding}`}
          id="projectCard"
          onClick={() => handleOpen(project)}
          data-aos={project.transition}
          data-aos-duration={project.durations}
        >
          <img
            className="h-full w-full object-cover object-center grayscale hover:grayscale-0 hover:animate-pulse cursor-pointer "
            src={project.image[0]}
            alt="nature image"
          />
          <div className="py-2">
            <a className="font-bold text-white font-sans border-none drop-shadow-lg 2xl:text-[25px] xs:text-[20px] max-xs:text-[20px] ">
              {project.name}
            </a>
            <p className="drop-shadow-lg text-white font-sans text-[20px]">{project.type}</p>
          </div>
        </figure>
      ))}
      {/* Pop up Project */}
      {selectedProject && (
        <Dialog
          open={open}
          handler={handleClose}
          className="DialogBox"
        >
          <DialogHeader>
            <div className="flex gap-8 justify-center">
              <div className="flex-none w-32 flex items-center">
                <div className="items-start">Kinethix</div>
              </div>
              <div
                className="grow text-center flex items-center"
                style={{ width: "900px" }}
              >
                <div className="mx-auto">{selectedProject.name}</div>
              </div>
              <div className="w-32 flex justify-end items-end">
                <div className="items-end">
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleClose}
                  >
                    <span>X</span>
                  </Button>
                </div>
              </div>
            </div>
          </DialogHeader>
          <DialogBody className="py-10 h-screen">
            <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
              <div className="row-span-1 w-600 h-600 2xl:pt-0 lg:pt-52 bg-white shadow-md overflow-hidden">
                {/* <img className="w-full h-fit scale-100 mt-10 object-cover" src={selectedProject.image[1]} alt="Its me" /> */}
                <Carousel
                  className=" scale-100 object-cover"
                  navigation={() => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                      <button
                        className="block cursor-pointer rounded-2xl transition-all w-16 bg-black text-white"
                        onClick={prevImage}
                      >
                        Prev
                      </button>
                      <button
                        className="block cursor-pointer rounded-2xl transition-all w-16 bg-black text-white"
                        onClick={nextImage}
                      >
                        Next
                      </button>
                    </div>
                  )}
                >
                  <img
                    src={selectedProject.image[activeIndex]}
                    alt={`image ${activeIndex + 1}`}
                    className="h-full w-full object-cover"
                  />
                </Carousel>
              </div>
              <div className="rounded-xl h-full text-black bg-white p-10 text-justify font-medium">
                <div>
                  <h1 className="text-2xl font-bold pb-3">About Project</h1>
                </div>
                <div>
                  <p>{selectedProject.longDecs}</p>
                </div>
                {/* <div>
                  <h1 className="text-2xl font-bold py-3">Tech Stack</h1>
                </div>
                <div className="bg-slate-800 grid grid-flow-col gap-2">
                  {selectedProject.Tech.map((tech) => (
                    <div className="w-10 h-10 bg-red-300 items-center justify-center" key={tech.id}>{tech.content}</div>
                  ))}
                </div> */}
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
