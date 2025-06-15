import "../App.css";
import Profile from "../images/Profile picture_2.jpg";
import { Tooltip, IconButton } from "@material-tailwind/react";
import QrInstagram from "../images/fikrinurdiega__qr.png";
import Technologies from "../components/techstack";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import "aos/dist/aos.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Aboutme() {
  const [scale, setScale] = useState(1); // Default scale 1 (tanpa zoom)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const zoomFactor = 1 + scrollPosition * 0.001; // Menambah skala seiring scroll
      setScale(zoomFactor);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Bersihkan listener saat component unmount
    };
  }, []);
  return (
    <div className="Wrapper py-60 max-sm:py-10">
      <div className="grid grid-cols-4 gap-6 text-white md:grid-cols-3 max-xs:grid-cols-1 max-sm:grid-cols-1 max-sm:gap-x-0 max-sm:gap-y-2">
        {/* Photo */}
        <div
          className="col-span-1 md:col-span-1"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="box w-full h-fit 2xl:h-full 2xl:pt-0 shadow-md overflow-hidden hover:drop-shadow-glow rounded-lg">
            <img
              className="w-full h-fit scale-100 object-cover 2xl:scale-150 "
              src={Profile}
              alt="Its me"
              style={{ transform: `scale(${scale})` }}
            />
          </div>
        </div>
        {/* Intro Text */}
        <div
          className="col-span-1 md:col-span-2 "
          data-aos="fade-left"
          data-aos-duration="500"
        >
          <div className="hover:drop-shadow-glow w-full h-full px-10 shadow-md overflow-hidden 2xl:h-full lg:h-fit max-md:py-0 max-md:px-2 md:px-5 max-sm:px-1 max-sm:py-0">
            <h1 className="font-bold text-right 2xl:text-right 2xl:text-[40px] xs:text-[30px] max-xs:text-[30px] max-xs:text-left xs:text-left">
              I'm Fikri Nur Diega
            </h1>
            <p className="text-normal leading-loose max-sm:text-[15px] 2xl:text-[20px] 2xl:text-justify xs:text-justify max-xs:text-justify">
              I'm a Web Developer with a passion for creating engaging and interactive online experiences. With my
              extensive experience in Web development, I am determined to provide creative solutions and present
              outstanding designs to users. Passionate about Web Development and Innovation Technology, with an overall
              experience of 3 years in Web Development I have gathered experience in the field of Web Development.
            </p>
          </div>
        </div>
        {/* Tech Stack */}
        <div
          className="col-span-1 md:col-span-1 lg:col-span-2 pt-3"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <p className="tracking-wide uppercase pb-3 font-bold 2xl:text-[40px] xs:text-[30px] max-xs:text-[30px] max-xs:text-left xs:text-left">
            Tech Stack
          </p>
          <div className="hover:drop-shadow-glow w-full h-fit border-2 rounded-lg shadow-md overflow-hidden max-sm:w-full max-sm:h-fit max-sm:py-8">
            <div className="grid grid-cols-6 justify-items-center gap-y-4 px-5 py-6 2xl:px-0 lg:px-8 max-md:grid-cols-4 md:px-36 max-sm:grid-cols-3 max-sm:px-8 max-sm:py-6 max-xs:px-6">
              <Technologies />
            </div>
          </div>
        </div>
        {/* Education */}
        <div
          className="hover:drop-shadow-glow row-span-4 md:col-span-1"
          data-aos="fade-left"
          data-aos-duration="1900"
        >
          <div className="w-full h-full shadow-md overflow-hidden max-sm:w-full">
            <h1 className="uppercase pb-3 tracking-wide text-3xl text-right font-bold 2xl:text-[35px] xs:text-[30px] max-xs:text-[30px] max-xs:text-left xs:text-left md:text-[25px]">
              Work Experience
            </h1>
            <div className="border-2 p-5 max-sm:px-4 max-sm:py-10 rounded-lg">
              <ol class="relative border-s border-gray-200 dark:border-gray-700">
                <li class="mb-4 ms-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Backslash Creative Nusantara</time>
                  <h3 class="text-lg font-semibold text-white dark:text-white">IT Associate</h3>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    As an IT Associate for PT Paul Buana Indonesia, I developed automation scripts, documented over 250 Cron Jobs, supported network planning, and contributed to system improvements through data migration and application development.
                  </p>
                </li>
                <li class="mb-4 ms-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Freelance</time>
                  <h3 class="text-lg font-semibold text-white dark:text-white">Web Developer</h3>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Engaging and responsive user interfaces are created using HTML, CSS, and JavaScript. Robust systems are developed with React JS, CodeIgniter, and Laravel. I have successfully completed 4+ projects, applying these technologies to deliver functional and visually appealing web applications.
                  </p>
                </li>
                <li class="mb-4 ms-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    PT. Indonesia Toray Synthetics
                  </time>
                  <h3 class="text-lg font-semibold text-white dark:text-white">
                    Data Migration Analyst (Project Based)
                  </h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    In-depth analysis of existing data is conducted to identify and resolve inconsistencies,
                    inaccuracies, and anomalies. Excel functions and tools are utilized to develop and implement data
                    cleansing strategies, ensuring optimal data integrity and quality
                  </p>
                </li>
                <li class="mb-4 ms-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    MGI Esports Media
                  </time>
                  <h3 class="text-lg font-semibold text-white dark:text-white">Graphic Designer</h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Creates visually stunning and relevant graphic designs tailored to the needs of esports clients,
                    working independently as a freelancer while collaborating closely with MGI Esports Media's creative
                    team
                  </p>
                </li>
                <li class="ms-4">
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    PT. Indonesia Toray Synthetics
                  </time>
                  <h3 class="text-lg font-semibold text-white dark:text-white">Information System Staff Intern</h3>
                  <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Gain practical experience in managing and supporting the company's IT infrastructure by assisting
                    with maintenance and troubleshooting of hardware and software systems
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
        {/* Award & Certification */}
        <div
          className="hover:drop-shadow-glow md:col-span-1 lg:col-span-2 pt-5 md:pt-0"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <p className="pb-3 tracking-wide uppercase font-bold 2xl:text-[40px] xs:text-[23px] max-xs:text-[23px] max-xs:text-left xs:text-left">
            Award & Certification
          </p>
          <div className="p-10 w-full h-fit border-2 shadow-md overflow-hidden max-sm:w-full max-sm:h-fit max-sm:py-8 rounded-lg">
            <ol class="relative border-s border-gray-200 dark:border-gray-700">
              <li class="mb-10 ms-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    class="w-4 h-4 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 26 26"
                    aria-hidden="true"
                  >
                    <path d="M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zm-1 16H5v-2h14v2zm0-4H5v-2h14v2zm0-4H5V8h14v2z" />
                  </svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-white dark:text-white">
                  Scrum Foundation Professional Certification SFPC{" "}
                  <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                    Certified
                  </span>
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Released on November 17th, 2023
                </time>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  The Scrum Foundation Professional Certification (SFPC) is an entry-level certification that validates
                  a fundamental understanding of Scrum principles, practices, and roles. It demonstrates proficiency in
                  applying Scrum methodologies to enhance teamwork, productivity, and project management.
                </p>
              </li>
              <li class="mb-10 ms-6">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    class="w-5 h-5 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10zm-6 5v2l2-1 2 1v-2h-4zm10 0v2l2-1 2 1v-2h-4z" />
                  </svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-white dark:text-white">
                  2nd IT Support Competition at Tangerang Raya Kompeten
                  <span class="bg-yellow-400 text-black text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">
                    Award
                  </span>
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Released on December 18th, 2020
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  The 2nd IT Support Competition at Tangerang Raya Kompeten is a regional competition that tests
                  participants' technical skills and problem-solving abilities in IT support. It brings together
                  talented individuals to showcase their expertise in troubleshooting and IT infrastructure management.
                </p>
              </li>
            </ol>
          </div>
        </div>
        {/* Quote */}
        <div
          className="hover:drop-shadow-glow md:col-span-1 lg:col-span-2 pt-2 md:pt-0"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="border-l-4 pl-4 text-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-white">
              What I’m Learning Now
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Next.js – for building fast, SEO-friendly React apps</li>
              <li>Docker – containerization and deployment</li>
              <li>CI/CD – automating deployment workflows (GitHub Actions)</li>
              <li>PostgreSQL – advanced queries & optimization</li>
              <li>Framer Motion – for smooth, interactive animations</li>
              <li>TypeScript – for type safety in JavaScript projects</li>
              <li>GSAP – for high-performance animations</li>

            </ul>
          </div>
        </div>
        <div
          className="hover:drop-shadow-glow md:col-span-1 lg:col-span-2 pt-2"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h3 className="text-lg font-semibold mb-2 text-white">
            Quote to Live By
          </h3>
          <blockquote className="border-l-4 pl-4 italic text-gray-400">
            “Failure is an option here. If things are not failing, you are not innovating enough.” – <span className="text-white font-medium">Elon Musk</span>
          </blockquote>
        </div>

      </div>
    </div>
  );
}

export default Aboutme;
