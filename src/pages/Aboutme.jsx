import "../App.css";
import Profile from "../images/Profile picture_2.jpg";
import { Tooltip, IconButton } from "@material-tailwind/react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import QrInstagram from "../images/fikrinurdiega__qr.png";
import Technologies from "../components/techstack";
import React from "react";
import "aos/dist/aos.css";

function Aboutme() {
  return (
    <div className="Wrapper py-28 max-sm:py-10">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 max-xs:grid-cols-1 max-sm:grid-cols-1 max-sm:gap-x-0 max-sm:gap-y-2">
        {/* Headline */}
        <div className="col-span-1 md:col-span-3" data-aos="fade-down" data-aos-duration="1000">
          <div className="w-full h-20 bg-white rounded-xl shadow-md overflow-hidden max-sm:w-full max-sm:h-14">
            <div className="py-5 max-sm:py-3">
              <h1 className="pb-3 text-3xl text-center font-bold lg:text-3xl md:text-2xl max-sm:text-xl">About Me</h1>
            </div>
          </div>
        </div>
        {/* Photo */}
        <div className="col-span-1 md:col-span-1" data-aos="fade-right" data-aos-duration="1500">
          <div className="w-full h-fit md:h-full  2xl:h-full max-lg:h-fit 2xl:pt-0 lg:pt-52 bg-white rounded-xl shadow-md overflow-hidden">
            <img className="w-full h-fit scale-100 object-cover 2xl:scale-150 lg:scale-300" src={Profile} alt="Its me" />
          </div>
        </div>
        {/* Intro Text */}
        <div className="col-span-1 md:col-span-2" data-aos="fade-left" data-aos-duration="1800">
          <div className="w-full h-full bg-white px-10 py-8 rounded-xl shadow-md overflow-hidden 2xl:h-full lg:h-fit max-md:py-0 max-md:px-2 md:py-5 md:px-5 max-sm:px-1 max-sm:py-0">
            <div className="px-5 py-6 lg:py-12 md:px-7 md:py-7 max-xs:py-10">
              <h1 className="pb-3 text-2xl font-bold 2xl:text-3xl min-lg:text-2xl max-md:text-2xl max-sm:text-xl">Hello, I'm Fikri Nur Diega</h1>
              <p className="text-2xl lg:text-1xl min-lg:text-base max-md:text-base max-sm:text-lg max-xs:text-base">
                I'm a Web Developer with a passion for creating engaging and interactive online experiences. With my extensive experience in Web development, I am determined to provide creative solutions and present outstanding designs to
                users. Passionate about Web Development and Innovation Technology, with an overall experience of 3 years in Web Development I have gathered experience in the field of Web Development.
              </p>
            </div>
          </div>
        </div>
        {/* Tech Stack */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2" data-aos="fade-right" data-aos-duration="1500">
          <div className="w-full h-fit bg-white py-10 rounded-xl shadow-md overflow-hidden max-sm:w-full max-sm:h-fit max-sm:py-8">
            <h1 className="text-3xl text-center font-bold lg:text-3xl md:text-2xl max-sm:text-2xl">Tech Stack</h1>
            <div className="grid grid-cols-6 justify-items-center gap-y-4 px-5 py-6 2xl:px-24 lg:px-8 max-md:grid-cols-4 md:px-36 max-sm:grid-cols-3 max-sm:px-8 max-sm:py-6 max-xs:px-6">
              <Technologies />
              <Tooltip content="Tailwind CSS" placement="right" id="toolTip">
                <div id="techBox">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="tailwind-css" className="scale-200">
                    <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
                  </svg>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
        {/* Social Media */}
        <div className="col-span-1 md:col-span-1" data-aos="fade-left" data-aos-duration="1900">
          <div className="w-full h-full bg-white rounded-xl shadow-md overflow-hidden max-sm:w-full">
            <div className="p-10 max-sm:px-4 max-sm:py-10">
              <h1 className="text-3xl text-center font-bold 2xl:text-3xl lg:text-2xl md:text-2xl max-sm:text-2xl">Social Media</h1>
              <div className="grid grid-cols-3 justify-items-center gap-x-0 gap-y-3 px-5 py-5 2xl:grid-cols-3 2xl:px-10 2xl:py-5 lg:grid-cols-2 lg:px-0 md:px-10 max-sm:px-10 max-sm:py-6 max-xs:px-6">
                {/* Linkedin*/}
                <a href="https://www.linkedin.com/in/fikrinurdiega/">
                  <IconButton id="socialBox" className="fa-brands fa-linkedin-in fa-2xl bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10 "></IconButton>
                </a>
                {/* Github */}
                <a href="https://github.com/FikriNur10">
                  <IconButton id="socialBox" className="fab fa-github fa-2xl bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10"></IconButton>
                </a>
                {/* Instagram */}
                <Tooltip content={<img src={QrInstagram} alt="Instagram QR Code" />} placement="top" className="w-44 h-44 bg-white rounded-lg drop-shadow-md max-sm:hidden">
                  <a href="https://www.instagram.com/fikrinurdiega_/">
                    <IconButton id="socialBox" className="fab fa-instagram fa-2xl bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10"></IconButton>
                  </a>
                </Tooltip>
                {/* Twitter */}
                <Tooltip
                  content={
                    <div className="w-60 h-60 bg-white rounded-lg drop-shadow-md p-2 max-sm:hidden">
                      <TwitterTweetEmbed tweetId="1627762443417169922" /> {/* Replace with your tweet's ID */}
                    </div>
                  }
                  placement="top"
                >
                  <a href="https://twitter.com/kinethixcreated">
                    <IconButton id="socialBox" className="fa-brands fa-twitter fa-2xl bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10"></IconButton>
                  </a>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
