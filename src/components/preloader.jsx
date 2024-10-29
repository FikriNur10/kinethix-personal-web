import React, { useEffect } from "react";
import "../assets/preloader.css";
import { preLoaderAnim } from "../animations";
function preloader() {
  useEffect(() => {
    preLoaderAnim(); // Call the preloader animation function
    // Add your own code here to handle preloader animation
    // Example: setTimeout(() => {
    //   // After animation finishes, navigate to your desired page
    //   // window.location.href = "/your-page";
    // }, 3000); // Adjust the duration of the animation as needed
    // Make sure to import the preloaderAnim function from the animations file
    // import { preLoaderAnim } from "../animations";
    // You can also use other libraries or tools to achieve the desired animation effect
    // For example, you can use GSAP or React Spring to create the animation effect
    // }, 0); // Use 0 as the delay to ensure the animation starts immediately after the component mounts

    // If you want to handle preloader animation using a different library or tool,
    // you can replace the preLoaderAnim function with the appropriate code to achieve the desired animation effect
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container flex gap-5 text-lg max-sm:px-5 max-sm:gap-1 max-sm:text-[10px] max-sm:flex-col max-sm:items-center">
        <span className="2xl:hidden md:hidden">Welcome</span>
        <span className="max-sm:hidden">Developer</span>
        <span className="max-sm:hidden">Graphic Designer</span>
        <span className="max-sm:hidden">UI/UX Designer</span>
      </div>
    </div>
  );
}

export default preloader;
