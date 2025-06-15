import React from "react";
import "../App.css";
import "aos/dist/aos.css";

function Contact() {
  return (
    <div>
      <div className="py-36 px-20 max-sm:py-10 max-sm:px-5">
        <div class="grid grid-rows-1">
          <div class="flex justify-center items-center">
            <h1
              className="font-bold uppercase text-white text-center 2xl:text-[80px] max-sm:text-[40px] md:text-[60px]"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Get's in touch
            </h1>
          </div>
          <div class="flex justify-center items-center border-t-2 max-sm:my-[10px] md:my-[10px]">
            <h1
              className="font-bold uppercase text-white text-center 2xl:text-[25px] md:py-[20px] max-sm:py-[20px]"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Let’s explore how we can collaborate and craft something impactful and extraordinary together
            </h1>
          </div>
          <div class="flex justify-center items-center py-5 max-sm:py-0">
            <div className="max-sm:py-0">
              <div
                className="grid grid-cols-4 gap-10 max-sm:grid-cols-2  max-sm:gap-5"
                data-aos="fade-left"
                data-aos-duration="1800"
              >
                <a
                  className="text-xl font-semibold text-center border rounded-full px-3 py-1"
                  id="contactsHover"
                  href="https://www.instagram.com/fikrinurdiega_/"
                >
                  Instagram
                </a>
                <a
                  className="text-xl font-semibold text-center border rounded-full px-3 py-1"
                  id="contactsHover"
                  href="https://www.linkedin.com/in/fikrinurdiega/"
                >
                  Linkedin
                </a>
                <a
                  className="text-xl font-semibold text-center border rounded-full px-3 py-1"
                  id="contactsHover"
                  href="https://github.com/FikriNur10"
                >
                  Github
                </a>
                <a
                  className="text-xl font-semibold text-center border rounded-full px-3 py-1"
                  id="contactsHover"
                  href="https://drive.google.com/file/d/105yGAkipPGE4hwbMjszZ1qV3WcrK1YyX/view?usp=sharing"
                >
                  CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
