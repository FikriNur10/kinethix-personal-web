import React from "react";
import "../App.css";
import "aos/dist/aos.css";

function Contact() {
  return (
    <div>
      <div className="py-20 max-sm:py-10 max-sm:px-5">
        {/* Change col-span-1 to grid */}
        <div className="w-full h-20 overflow-hidden max-sm:w-full max-sm:h-14" style={{ borderBottom: "1px solid black" }}>
          <div className="py-5 max-sm:py-3" data-aos="fade-down" data-aos-duration="1000">
            <h1 className="pb-3 text-3xl text-center font-bold lg:text-3xl md:text-2xl max-sm:text-xl">Contact</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 py-14 max-sm:grid-cols-1 max-sm:py-0 md:grid-cols-1 md:py-0">
          <div className="h-full row-span-3 p-10 max-sm:p-0 max-sm:py-3" style={{ borderBottom: "1px solid black" }}>
            <h1 className="font-bold text-90 max-sm:text-5xl max-sm:text-right" data-aos="fade-right" data-aos-duration="1500">
              Let's
            </h1>
            <h1 className="font-bold text-center text-90 max-sm:text-right max-sm:text-5xl" data-aos="fade-right" data-aos-duration="2500">
              Work
            </h1>
            <h1 className="font-bold text-right text-90 max-sm:text-right max-sm:text-5xl" data-aos="fade-right" data-aos-duration="3000">
              Together
            </h1>
          </div>
          <div className="max-sm:py-5" style={{ borderBottom: "1px solid black" }}>
            <h1 className="font-bold text-100 max-sm:text-4xl max-sm:text-center md:text-center" data-aos="fade-left" data-aos-duration="1500">
              Get in Touch
            </h1>
          </div>
          <div className="h-full rounded-xl py-7 row-span-3" data-aos="fade-left" data-aos-duration="1800" >
            <div className="grid grid-cols-1 gap-y-3 py-3">
              <h1 className="font-black text-2xl text-left">EMAIL</h1>
              <p className="text-xl">fikrinurdiega@gmail.com</p>
            </div>
            <div className="py-3">
              <h1 className="font-black text-2xl text-left">Social Links</h1>
              <div className="grid grid-cols-1 gap-y-3 py-3">
                <a className="text-xl hover:animate-pulse" href="https://www.instagram.com/fikrinurdiega_/">
                  Instagram
                </a>
                <a className="text-xl hover:animate-pulse" href="https://www.linkedin.com/in/fikrinurdiega/">
                  Linkedin
                </a>
                <a className="text-xl hover:animate-pulse" href="/">
                  Twitter or X
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
