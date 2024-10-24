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
    <div className="homeWrapper w-full h-screen max-sm:h-24">
    <div className="overflow-hidden px-5 2xl:py-[320px] xs:py-[300px] max-xs:py-[200px]">
      <div className="wrapper text-center font-bold uppercase 2xl:text-[20px] 2xl:flex xs:grid xs:grid-rows-2	max-xs:grid max-xs:grid-rows-2">
        <div className="words grid 2xl:h-[25px]">
            <span>Website Developer</span>
            <span>I'm Fikri Nur Diega</span>
            <span>UI and UX Designer</span>
            <span>Graphic Designer</span>
            <span>Website Developer</span>
        </div>
        <div className="additional-text">
            <p className="pl-2 drop-shadow-glow">with a passion for creating engaging and interactive online experiences. </p>
        </div>
      </div>
    </div>
</div>

  );
}

export default Home;
