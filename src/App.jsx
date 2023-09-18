import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Header from "./components/header";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./components/footer";
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
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          
        </Helmet>
        <Header />
        <section className="homeSection px-0 overflow-x-hidden sm:px-10 md:24 lg:px-36">
          <Home />
        </section>
        <section className="introSection overflow-x-hidden px-36 max-sm:px-5 md:24 lg:px-36">
          <Aboutme />
        </section>
        <section className="projectSection overflow-hidden px-36 max-sm:px-3">
          <Project />
        </section>
        <section className="contactSection overflow-x-hidden px-36 max-sm:px-3">
          <Contact />
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default App;
