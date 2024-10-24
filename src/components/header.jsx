import "../App.css";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import KinethixLogo from "../images/Kinethix_White.png";

function Header() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <nav className="flex justify-center overflow-hidden py-8 max-sm:hidden max-md:hidden md:px-10 lg:px-28 max-lg:px-20 xl:px-36">
  {/* Center */}
  <div data-aos="fade-down" data-aos-duration="1500" className="w-full text-white">
    <div className="flex justify-center items-center space-x-14 font-bold">
      <span className="hover:animate-pulse">
        <Link to="/" className="px-5 mx-2 hover:underline md:px-2">Home</Link>
      </span>
      <span className="hover:animate-pulse">
        <Link to="/aboutme" className="px-5 mx-2 hover:underline md:px-2">About Me</Link>
      </span>
      <span className="hover:animate-pulse drop-shadow-glow">
        <img src={KinethixLogo} alt="Kinethix Logo" className="w-[70px]" />
      </span>
      <span className="hover:animate-pulse">
        <Link to="/projects" className="px-5 mx-2 hover:underline md:px-2">Projects</Link>
      </span>
      <span className="hover:animate-pulse">
        <Link to="/contact" className="px-5 mx-2 hover:underline md:px-2">Contact</Link>
      </span>
    </div>
  </div>
</nav>

  );
}

export default Header;
