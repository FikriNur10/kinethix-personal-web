import React, { useState, useEffect } from "react";
import "../App.css";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Carousel } from "@material-tailwind/react";
import "aos/dist/aos.css";
// Image Import
import KinethixLogo from "../images/Kinethix_White.png";
// Slice of Art
import soaCover from "../images/projectImages/sliceOfArt/soa_cover.png";
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

// Toko Buah Rizal
import Tbz1 from "../images/projectImages/tokoBuahRizal/tbz_1.webp";
import Tbz2 from "../images/projectImages/tokoBuahRizal/tbz_2.webp";
import Tbz3 from "../images/projectImages/tokoBuahRizal/tbz_3.webp";
import Tbz4 from "../images/projectImages/tokoBuahRizal/tbz_4.webp";
import Tbz5 from "../images/projectImages/tokoBuahRizal/tbz_5.webp";

// Vicky Alward Hie Indonesia Architect Portfolio
import Vicky1 from "../images/projectImages/VickyArch/vicky1.webp";
import Vicky2 from "../images/projectImages/VickyArch/vicky2.webp";
import Vicky3 from "../images/projectImages/VickyArch/vicky3.webp";
import Vicky4 from "../images/projectImages/VickyArch/vicky4.webp";
import Vicky5 from "../images/projectImages/VickyArch/vicky5.webp";

// Visalux Image 1 to 15
import Visalux1 from "../images/projectImages/Visalux/visalux-1.webp";
import Visalux2 from "../images/projectImages/Visalux/visalux-2.webp";
import Visalux3 from "../images/projectImages/Visalux/visalux-3.webp";
import Visalux4 from "../images/projectImages/Visalux/visalux-4.webp";
import Visalux5 from "../images/projectImages/Visalux/visalux-5.webp";
import Visalux6 from "../images/projectImages/Visalux/visalux-6.webp";
import Visalux7 from "../images/projectImages/Visalux/visalux-7.webp";
import Visalux8 from "../images/projectImages/Visalux/visalux-8.webp";
import Visalux9 from "../images/projectImages/Visalux/visalux-9.webp";
import Visalux10 from "../images/projectImages/Visalux/visalux-10.webp";
import Visalux11 from "../images/projectImages/Visalux/visalux-11.png";
import Visalux12 from "../images/projectImages/Visalux/visalux-12.webp";
import Visalux13 from "../images/projectImages/Visalux/visalux-13.webp";
import Visalux14 from "../images/projectImages/Visalux/visalux-14.webp";
import Visalux15 from "../images/projectImages/Visalux/visalux-15.webp";

// Kokits Image 1 to 10
import Kokits1 from "../images/projectImages/kokits/kokits-1.png";
import Kokits2 from "../images/projectImages/kokits/kokits-2.webp";
import Kokits3 from "../images/projectImages/kokits/kokits-3.webp";
import Kokits4 from "../images/projectImages/kokits/kokits-4.webp";
import Kokits5 from "../images/projectImages/kokits/kokits-5.webp";
import Kokits6 from "../images/projectImages/kokits/kokits-6.webp";
import Kokits7 from "../images/projectImages/kokits/kokits-7.webp";
import Kokits8 from "../images/projectImages/kokits/kokits-8.webp";
import Kokits9 from "../images/projectImages/kokits/kokits-9.webp";
import Kokits10 from "../images/projectImages/kokits/kokits-10.webp";


const Technologies = [
  {
    id: 0,
    name: "Figma",
    content: <i className="fa-brands fa-figma px-2 text-[#F24E1E]"></i>,
  },
  {
    id: 1,
    name: "HTML",
    content: <i className="fa-brands fa-html5 px-2 text-[#E34F26]"></i>,
  },
  {
    id: 2,
    name: "CSS",
    content: <i className="fa-brands fa-css3-alt px-2 text-[#1572B6]"></i>,
  },
  {
    id: 3,
    name: "JavaScript",
    content: <i className="fa-brands fa-js px-2 text-[#F7DF1E]"></i>,
  },
  {
    id: 4,
    name: "Laravel",
    content: <i className="fa-brands fa-laravel px-2 text-[#FF2D20]"></i>,
  },
  {
    id: 5,
    name: "React JS",
    content: <i className="fa-brands fa-react px-2 text-[#61DAFB]"></i>,
  },
  // Mysql
  {
    id: 6,
    name: "MySQL",
    content: <i className="fa-solid fa-database px-2 text-[#4479A1]"></i>,
  },
  // Tailwind CSS
  {
    id: 7,
    name: "Tailwind CSS",
    content: <i className="fa-brands fa-tailwind px-2 text-[#06B6D4]"></i>,
  },
  // codeigniter
  {
    id: 8,
    name: "Codeigniter",
    content: <i className="fa-brands fa-codeigniter px-2 text-[#F58020]"></i>,
  },
];

const ProjectContent = [
  {
    id: 1,
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
    Tech: [Technologies[0], Technologies[1]],
    transition: "fade-right",
    durations: "1000",
    hovercolor: "bg-[#444444]",
  },
  {
    id: 2,
    name: "UI/UX Design SEWALLET",
    desc: "Slice of Art is an e-commerce platform engaged in art. In the context of e-commerce commission art.",
    longDecs:
      "Sewallet is a fintech application that provides electronic wallet-based digital payment services. This application allows users to make bill payments, credit purchases, and money transfers quickly and easily via their cellphones. As a fintech application, one of Sewallet's main goals is to make it easier for users to carry out various financial transactions digitally. This application provides various features such as bill payments, e-wallet balance top-ups, credit purchases, and money transfers between users.",
      type: "UI/UX Design",
      image: [sewalletCover, sewalletImage2, sewalletImage3, sewalletImage4, sewalletImage5],
      Tech: [Technologies[0], Technologies[1]],
      transition: "fade-left",
      durations: "2000",
      hovercolor: "bg-[#444444]",
    },
    {
      id: 3,
      name: "UI/UX Design TASKFY",
      desc: "TASKFY, an advanced task management app, is a great solution for living a more organized and organized life.",
      longDecs:
      "TASKFY, an advanced task management app, is a great solution for living a more organized and organized life. This is the story of how TASKFY can change the way you deal with the daily grind and give you powerful tools to manage your tasks. In a world full of tasks and responsibilities, it often feels like there are too many things to remember and manage. But with the presence of TASKFY, everything becomes simpler. This app offers an intuitive interface and a variety of very helpful features. With TASKFY, you can easily note down the tasks that need to be done. You can set deadlines, set priorities, and categorize the tasks. This makes you feel more organized and able to focus on what's important.",
      type: "UI/UX Design",
      image: [taskfyCover, taskfyImage2, taskfyImage3, taskfyImage4, taskfyImage5, taskfyImage6],
      Tech: [Technologies[0], Technologies[1]],
      transition: "fade-right",
      durations: "2000",
      hovercolor: "bg-[#444444]",
    },
    {
      id: 4,
      name: "Slice of Art with Laravel",
      desc: "Slice of Art is an e-commerce platform engaged in art.The name “Slice of Art” is a representation of the pieces of artwork available for sale on this platform.",
      type: "Web Development",
      longDecs:
      "Slice of Art is an e-commerce platform that operates in the art sector. In the context of e-commerce commissioned art, the name “Slice of Art” is a representation of the pieces of art that are available for sale on this platform. The name “Slice of Art” can be interpreted as a slice of the larger world of art available for users of this platform to enjoy.The name can also reflect that this platform provides unique and original art products and works of art, so that every piece of art sold on the platform has uniqueness and unique artistic value. So the name is enough to explain that this platform provides a space for artists to be able to promote commission art services, that is, clients/customers can order art work creation services from an artist by requesting what kind of work they want.",
      image: [soaCover, soaPhoto, soaPhoto2, soaPhoto3, soaPhoto4, soaPhoto5, soaPhoto6, soaPhoto7],
      Tech: [Technologies[0], Technologies[1], Technologies[2], Technologies[3], Technologies[4], Technologies[6]],
      transition: "fade-right",
      durations: "2000",
      hovercolor: "bg-[#444444]",
      link: "https://github.com/FikriNur10/sliceofart-websitecrud",
    },
    {
      id: 5,
      name: "Go Green Campaign",
      desc: "The Website for participation at I/O FEST Tarumanagara Web Dev Competition is a dynamic and visually engaging web application created using HTML, CSS, JavaScript, and Git.",
      longDecs:
      "The Earth Campaign website is an online platform aims to disseminate information and educate the public about the importance of protecting environmental life and doing environmentally friendly actions. In the digital era like now, Websites are one of the most effective media for reach the wider community so that it can be formed larger community to raise awareness of its importance preserving environmental life. The background to creating the Earth Campaign website is the fact is that more and more people are using the internet and media social as a source of information and inspiration, so this campaign can reach a larger audience and help improve awareness and action to protect the environment.",
      type: "Web Development",
      image: [ioWebDev, ioWebDev2, ioWebDev3, ioWebDev4, ioWebDev5, ioWebDev6],
      Tech: [Technologies[0], Technologies[1]],
      transition: "fade-left",
      durations: "1000",
      hovercolor: "bg-[#444444]",
      link: "https://fikrinur10.github.io/webdev-competition/",
    },
    {
      id: 6,
      name: "Toko Buah Rizal",
      desc: "Ecommerce Website with Codeigniter 4 for Toko Buah Rizal is a web application that allows users to buy and sell fresh fruits online.",
      longDecs:
      "Ecommerce Website with Codeigniter 4 for Toko Buah Rizal is a web application that allows users to buy and sell fresh fruits online. This website is designed to provide a convenient and efficient shopping experience for customers who want to purchase fresh fruits from the comfort of their own homes. The website features a user-friendly interface that allows customers to easily browse through the available products, add items to their cart, and complete their purchases securely. The website also includes features such as product search, product categories, and customer reviews to help customers make informed decisions.",
      type: "Web Development",
      image: [Tbz1, Tbz2, Tbz3, Tbz4, Tbz5],
      Tech: [Technologies[8], Technologies[1], Technologies[2], Technologies[3], Technologies[6]],
      transition: "fade-right",
      durations: "1000",
      hovercolor: "bg-[#444444]",
      link: "https://github.com/FikriNur10/toko-buah-rizal",
    },
    {
      id: 7,
      name: "Vicky Alward Hie Indonesia Architect Portfolio",
      desc: "Vicky Alward Hie Indonesia Architect Portfolio is a website that showcases the work of Vicky Alward Hie, an architect based in Indonesia.",
      longDecs:
        "Vicky Alward Hie Indonesia Architect Portfolio is a website that showcases the work of Vicky Alward Hie, an architect based in Indonesia. The website features a clean and modern design that highlights the architect's portfolio, including images of completed projects, design concepts, and architectural drawings. The website also includes information about the architect's background, education, and experience in the field of architecture. Visitors to the website can easily navigate through the portfolio and learn more about the architect's design philosophy and approach to architecture.",
      type: "Web Development",
      image : [Vicky1, Vicky2, Vicky3, Vicky4, Vicky5],
      Tech: [Technologies[1], Technologies[2], Technologies[3], Technologies[5]],
      transition: "fade-left",
      durations: "1000",
      hovercolor: "bg-[#444444]",
      link : "https://vickyhiearchitect-demo.vercel.app/",
    },
    {
      // Visalux Online Shop Website With Laravel and Tailwind CSS for electronic store
      id: 8,
      name: "Visalux Online Shop Website With Laravel and Tailwind CSS",
      desc: "Visalux Online Shop Website With Laravel and Tailwind CSS for electronic store is a web application that allows users to buy and sell electronic products online.",
      longDecs:
        "Visalux Online Shop Website With Laravel and Tailwind CSS for electronic store is a  web application that allows users to buy and sell electronic products online. This website is designed to provide a convenient and efficient shopping experience for customers who want to purchase electronic products from the comfort of their own homes. The website features a user-friendly interface that allows customers to easily browse through the available products, add items to their cart, and complete their purchases securely. The website also includes features such as product search, product categories, and customer reviews to help customers make informed decisions.",
      type: "Web Development",
      image: [Visalux11, Visalux2, Visalux3, Visalux4, Visalux5, Visalux6, Visalux7, Visalux8, Visalux9, Visalux10, Visalux1, Visalux12, Visalux13, Visalux14, Visalux15],
      Tech: [Technologies[0], Technologies[1], Technologies[2], Technologies[3], Technologies[4], Technologies[7]],
      transition: "fade-right",
      durations: "1000",
      hovercolor: "bg-[#444444]",
      link: "https://visalux.fikrinurdev.my.id/"
    },
    {
      // Koperasi Indonesia Toray Synthetics (KOKITS)
      id: 9,
      name: "Koperasi Indonesia Toray Synthetics (KOKITS)",
      desc: "Koperasi Indonesia Toray Synthetics (KOKITS) is a cooperative organization in Indonesia that focuses on the production and distribution of synthetic fibers.",
      longDecs:
        "Koperasi Indonesia Toray Synthetics (KOKITS) is a cooperative organization in Indonesia that focuses on the production and distribution of synthetic fibers. The cooperative was established to support the development of the synthetic fiber industry in Indonesia and to provide a platform for local producers to collaborate and share resources. KOKITS aims to promote sustainable practices in the production of synthetic fibers and to contribute to the growth of the local economy by creating job opportunities and supporting local communities.",
      type: "Web Development",
      image: [Kokits1, Kokits2, Kokits3, Kokits4, Kokits5, Kokits6, Kokits7, Kokits8, Kokits9, Kokits10],  
      Tech: [Technologies[0], Technologies[1], Technologies[2], Technologies[3], Technologies[4], Technologies[7]],
      transition: "fade-left",
      durations: "1000",
      hovercolor: "bg-[#444444]",
      link: "https://kokits.my.id/"
    }
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

  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <>
      {/* Project List */}
      <ul className="space-y-6">
        {ProjectContent.slice().reverse().map((project) => (
          <li
            key={project.id}
            onClick={() => handleOpen(project)}
            className="bg-black text-white border border-white rounded-xl overflow-hidden hover:ring-2 hover:ring-white hover:scale-[1.01] transition-all cursor-pointer"
            data-aos={project.transition}
            data-aos-duration={project.durations}
            style={{ minHeight: '180px' }} // 💡 Tinggi minimum seragam
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full">
              {/* Thumbnail */}
              <div className="md:col-span-1 h-full">
                <img
                  src={project.image[0]}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  style={{ height: '100%', objectFit: 'cover' }} // 💡 Kunci tinggi
                />
              </div>

              {/* Info */}
              <div className="md:col-span-3 p-4 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl font-bold text-white">{project.name}</h2>
                  <p className="text-gray-300 text-sm mt-2">{project.desc}</p>
                </div>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.Tech.map((tech) => (
                    <div
                      key={tech.id}
                      className="text-xs bg-white text-black px-2 py-1 rounded flex items-center gap-1"
                    >
                      {tech.content}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Link to Project */}
                {project.link && (
                  <div className="mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium bg-black text-white py-1 rounded transition underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* Pop up Project */}
      {selectedProject && (
        <Dialog
          open={open}
          handler={handleClose}
          className="DialogBox px-4 sm:px-6 md:px-10 py-5 max-sm:overflow-y-auto"
        >
          <DialogHeader className="px-4 sm:px-6 md:px-10">
            <div className="grid grid-cols-3 items-center text-center w-full gap-3">
              <div className="flex justify-start">
                <img
                  src={KinethixLogo}
                  alt="Kinethix Logo"
                  className="w-10 sm:w-12"
                />
              </div>
              <div className="flex justify-center items-center">
                <h1 className="text-lg font-semibold text-center sm:text-xl">
                  {selectedProject.name}
                </h1>
              </div>
              <div className="flex justify-end items-center">
                <Button
                  variant="text"
                  color="red"
                  onClick={handleClose}
                  className="text-lg"
                >
                  <span>X</span>
                </Button>
              </div>
            </div>
          </DialogHeader>

          <DialogBody className="py-4 px-4 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Gambar */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
                <Carousel
                  className="w-full h-full"
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
                  <div className="w-full h-[550px] flex items-center justify-center bg-gray-100">
                    <img
                      src={selectedProject.image[activeIndex]}
                      alt={`image ${activeIndex + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </Carousel>
              </div>

              {/* Deskripsi */}
              <div className="bg-white rounded-xl p-5 sm:p-6 md:p-10 text-black font-medium space-y-6">
                {/* About Project */}
                <div>
                  <h1 className="text-xl font-bold mb-3 sm:text-xl">About Project</h1>
                  <p className="text-justify leading-relaxed">{selectedProject.longDecs}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h1 className="text-xl font-bold mb-4 sm:text-xl">Tech Stack</h1>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {selectedProject.Tech.map((tech) => (
                      <div
                        key={tech.id}
                        className="flex items-center justify-start bg-gray-100 rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="text-xl mr-2">{tech.content}</div>
                        <span className="text-sm font-semibold">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogBody>
          <DialogFooter>{/* Tambahkan tombol aksi di sini */}</DialogFooter>
        </Dialog>
      )}
    </>
  );
};

export default ProjectCard;
