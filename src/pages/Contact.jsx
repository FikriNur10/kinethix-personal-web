import React from "react";
import "../App.css";
import "aos/dist/aos.css";

function Contact() {
  return (
    <div>
      <div className="py-36 max-sm:py-10 max-sm:px-5">
        <div class="grid grid-rows-1">
          <div class="flex justify-center items-center">
            <h1
              className="font-bold uppercase text-white text-center 2xl:text-[50px] cursor-progress"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Get's in touch
            </h1>
          </div>
          <div class="flex justify-center items-center">
            <h1
              className="font-bold uppercase text-white text-center 2xl:text-[25px]"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Let’s explore how we can collaborate and craft something impactful and extraordinary together
            </h1>
          </div>
          <div class="flex justify-center items-center py-5">
            <div className="max-sm:py-0">
              <div
                className="grid grid-cols-4"
                data-aos="fade-left"
                data-aos-duration="1800"
              >
                <a
                  className="text-xl font-semibold w-fit text-center"
                  id="contactsHover"
                  href="https://www.instagram.com/fikrinurdiega_/"
                >
                  Instagram
                  <i class="fa-solid fa-location-arrow px-2"></i>
                </a>
                <a
                  className="text-xl font-semibold w-fit text-center"
                  id="contactsHover"
                  href="https://www.linkedin.com/in/fikrinurdiega/"
                >
                  Linkedin
                  <i class="fa-solid fa-location-arrow px-2"></i>
                </a>
                <a
                  className="text-xl font-semibold w-fit text-center"
                  id="contactsHover"
                  href="https://github.com/FikriNur10"
                >
                  Github<i class="fa-solid fa-location-arrow px-2"></i>
                </a>
                <a
                  className="text-xl font-semibold w-fit text-center"
                  id="contactsHover"
                  href="https://drive.google.com/file/d/1N-qwOEDZdSfLIku6MmVt9ajgfX869Jzr/view?usp=drive_link"
                >
                  My Resume<i class="fa-solid fa-location-arrow px-2"></i>
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
