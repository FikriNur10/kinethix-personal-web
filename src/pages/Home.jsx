import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useLayoutEffect } from "react";
import AnimatedText from "../effects/hacker-effect";

function Home() {
  useLayoutEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div className="Wrapper w-full h-screen max-sm:h-26">
      <div className="overflow-hidden py-56 max-sm:py-34 px-5">
        <div className="w-full h-fit">
          <div className=" text-black text-center max-sm:text-left md:text-center lg:text-center">
            <div className="w-auto h-auto max-[900px]:h-4">
              <p className="text-3xl max-sm:text-xl md:text-md" data-aos="fade-right">
                Hi, I'm Fikri Nur Diega
              </p>
            </div>
            <div className="w-auto h-auto py-5 max-sm:h-30" data-aos="fade-left">
              <h1 className="text-5xl font-semibold max-sm:text-4xl">
                <AnimatedText initialText="I'm Web Developer" />
              </h1>
            </div>
            <div className="w-auto h-auto max-[900px]:h-4">
              <p className="text-3xl max-sm:text-xl md:text-md" data-aos="fade-right">
                From Tangerang, Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
