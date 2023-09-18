import "../App.css";
import "aos/dist/aos.css";
import { IconButton } from "@material-tailwind/react";

function Footer() {
  return (
    <footer className="footer py-20 px-20 max-sm:py-10 max-sm:px-3">
      <div className="grid grid-cols-1 justify-items-stretch gap-y-3">
        <div className="">
          <h1 className="text-black font-bold text-2xl text-center">THANK YOU</h1>
        </div>
        <div className="text-center">
          <p>Let's collaborate on future projects to achieve even greater success.</p>
        </div>
        <div className="text-center">
          <p>Copyright &copy; 2023 Fikri Nur Diega, Develop by Fikri Nur Diega.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
