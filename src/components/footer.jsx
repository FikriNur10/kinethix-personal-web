import "../App.css";
import "aos/dist/aos.css";
import { IconButton } from "@material-tailwind/react";
import KinethixLogo from "../images/Kinethix_White.png";
function Footer() {
  return (
    <footer className="footer flex justify-center items-center px-20 max-sm:px-3 border-t-2">
      <div className="grid grid-cols-1 justify-items-stretch gap-y-1">
        <div className="flex justify-center items-center">
          <img
            src={KinethixLogo}
            alt="Kinethix Logo"
            className="w-[90px] max-sm:w-[70px]"
          />
        </div>
        <div className="text-center font-bold pt-3 max-sm:text-[10px]">
          <p>Let's collaborate on future projects to achieve even greater success.</p>
        </div>
        <div className="text-center max-sm:text-[10px]">
          <p>Copyright &copy; 2025 Fikri Nur Diega, Develop by Fikri Nur Diega.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
