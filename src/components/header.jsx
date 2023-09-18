import "../App.css";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Header() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <nav class="flex justify-between overflow-hidden py-8 px-32 max-sm:hidden max-md:hidden md:px-10 lg:px-28 max-lg:px-20 xl:px-36">
      {/* left */}
      <div>
        <div data-aos="fade-right">
          <div className="text-left w-36 md:w-18">
            <p className="text-black">Welcome</p>
          </div>
        </div>
      </div>
      {/* center */}
      <div data-aos="fade-down" data-aos-duration="1500" className="w-100">
        <div className="mx-5 md:mx-0">
          <span className="px-5 mx-2 md:px-2">
            <a className="hover:animate-pulse 2" href="/">
              <Link to="/">Home</Link>
            </a>
          </span>
          <span className="px-3 mx-2 md:px-2">
            <a className="hover:animate-pulse 2" href="/">
              <Link to="/aboutme">About Me</Link>
            </a>
          </span>
          <span className="px-3 mx-2 md:px-2">
            <a className="hover:animate-pulse 2" href="/">
              <Link to="/">Project</Link>
            </a>
          </span>
          <span className="px-5 mx-2 md:px-2">
            <a className="hover:animate-pulse 2" href="/">
              <Link to="/">Contact</Link>
            </a>
          </span>
        </div>
      </div>
      {/* right */}
      <div>
        <div data-aos="fade-left">
          <div className="text-right w-36 md:w-18">
            <p className="text-black">{time.toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
