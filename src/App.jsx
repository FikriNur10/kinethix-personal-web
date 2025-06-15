import "./App.css";
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Header from "./components/header";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import ContactMe from "./pages/ContactMe";
import Footer from "./components/footer";
import AboutMarquee from "./components/aboutMarquee";
import ProjectMarquee from "./components/projectMarquee";
import ContactMarquee from "./components/contactMarquee";
import Preloader from "./components/preloader";
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
        <Preloader />
        <Header />
        <section className="homeSection h-screen w-full px-0 overflow-hidden sm:px-10 md:24 lg:px-36">
          <Home />
        </section>
        <section className="aboutMarquee">
          <AboutMarquee />
        </section>
        <section className="introSection overflow-hidden max-sm:px-14 md:px-16 lg:px-40 2xl:px-48">
          <Aboutme />
        </section>
        <section className="aboutMarquee">
          <ProjectMarquee />
        </section>
        <section className="projectSection overflow-hidden px-36 max-sm:px-3">
          <Project />
        </section>
        <ContactMarquee />
        <section className="contactSection overflow-hidden py-32 max-sm:px-3 md:px-24">
          <Contact />
        </section>
        {/* <section className="py-32 max-sm:px-3 md:px-24 bg-gray-300">
          <ContactMe />
        </section> */}
        <Footer />
        
      </div>
    </>
  );
}

export default App;
