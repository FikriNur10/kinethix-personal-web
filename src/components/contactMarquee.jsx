import React from "react";

function contactMarquee() {
  return (
    <div className="relative flex overflow-x-hidden text-black font-extrabold">
      {" "}
      {/* Ganti class dengan className */}
      <div className="animate-marquee whitespace-nowrap uppercase text-3xl">
        <span className="mx-4">Let's Work Together</span>
        <span className="mx-4">
          <i className="fa-regular fa-handshake animate-spin1"></i>
        </span>
        <span className="mx-4">Let's Work Together</span>
        <span className="mx-4">
          <i class="fa-regular fa-handshake animate-spin1"></i>
        </span>
        <span className="mx-4">Let's Work Together</span>
        <span className="mx-4">
          <i class="fa-regular fa-handshake animate-spin-slow"></i>
        </span>
        <span className="mx-4">Let's Work Together</span>
        <span className="mx-4">
          <i class="fa-regular fa-handshake animate-spin-slow"></i>
        </span>
      </div>
      <div className="absolute top-0  animate-marquee2 whitespace-nowrap uppercase text-3xl">
        <span className="mx-4">Let's Work Together</span>
        <span className="mx-4">
          <i className="fa-regular fa-handshake animate-spin1"></i>
        </span>
        <span className="mx-4">Let's Work Together</span>
        <span className="mx-4">
          <i class="fa-regular fa-handshake animate-spin-slow"></i>
        </span>
        <span className="mx-4">Let's Work Together</span>
        <span className="mx-4">
          <i class="fa-regular fa-handshake animate-spin-slow"></i>
        </span>
        <span className="mx-4">Let's Work Together</span>
        <span className="mx-4">
          <i class="fa-regular fa-handshake animate-spin-slow"></i>
        </span>
      </div>
    </div>
  );
}

export default contactMarquee;
