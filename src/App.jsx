import "./App.css";
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Header from "./components/header";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./components/footer";
import AboutMarquee from "./components/aboutMarquee";
import ProjectMarquee from "./components/projectMarquee";
import ContactMarquee from "./components/contactMarquee";
import { Helmet } from "react-helmet";


function App() {
  return (
    <>
      <div>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
            integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          {/* eslint-disable-next-line react/no-unknown-property */}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
          <link
            href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Header />
        <section className="homeSection h-screen w-full px-0 overflow-hidden sm:px-10 md:24 lg:px-36">
          <Home />
        </section>
        <section className="aboutMarquee">
          <AboutMarquee />
        </section>
        <section className="introSection overflow-hidden max-sm:px-5 md:px-24 lg:px-36">
          <Aboutme />
        </section>
        <section className="aboutMarquee">
          <ProjectMarquee />
        </section>
        <section className="projectSection overflow-hidden px-36 max-sm:px-3">
          <Project />
        </section>
        <ContactMarquee />
        <section className="contactSection overflow-hidden py-32 px-36 max-sm:px-3 md:px-24">
          <Contact />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
