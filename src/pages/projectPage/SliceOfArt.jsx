import React from "react"; // Import React
import "/src/App.css"
import Header from "/src/components/header.jsx"; // Import Header component
import { Helmet } from "react-helmet";
import "./sliceofart.css";
import "aos/dist/aos.css";

function SliceOfArt() {
  return (
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
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </Helmet>
        <Header />
        <section className="HeaderBackground">
            
        </section>
        <section className="p-10">
            <div>Slice Of Arts</div>
        </section>
    </div>
  );
}

export default SliceOfArt;
