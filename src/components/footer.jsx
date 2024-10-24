import "../App.css";
import "aos/dist/aos.css";
import { IconButton } from "@material-tailwind/react";
import KinethixLogo from "../images/Kinethix_White.png";
function Footer() {
  return (
    <footer className="footer py-20 px-20 max-sm:py-10 max-sm:px-3">
      <div className="grid grid-cols-1 justify-items-stretch gap-y-1">
        <div className="flex justify-center items-center">
          <img
            src={KinethixLogo}
            alt="Kinethix Logo"
            className="w-[90px]"
          />
        </div>
        <div className="text-center pt-3">
          <p>Let's collaborate on future projects to achieve even greater success (Thank you Beyonce).</p>
        </div>
        <div className="text-center">
          <p>Copyright &copy; 2024 Fikri Nur Diega, Develop by Fikri Nur Diega.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
