import { React, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, TextPlugin);

export default function Banner() {
  useEffect(() => {
    gsap.to(".desc", {
      duration: 3,
      text: "Bringing culinary experiences to life through collaborative events",
      ease: "none",
      delay: 0.4,
    });
  }, []);

  return (
    <section
      className="hero relative flex flex-col justify-center items-center w-full h-full"
      id="home"
    >
      <h1 className="animate z-10">Kolaborasa</h1>
      <p className="wm animate animate-delay-1 text-center z-10 -mt-6 ">by AFCO Project</p>
      <p className="desc animate animate-delay-1 text-center z-10"></p>
      <a href="#events" className="cta-btn animate animate-delay-2 z-10">
        Discover Our Events
      </a>
      <div className="gradient absolute bottom-0"></div>
      <video
        className="w-full h-full object-cover absolute top-0 -z-10"
        autoPlay
        loop
        muted
      >
        <source src="/VideoBanner.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

// ini namanya komponen
// nama komponen harus diawali huruf kapital
// usahain nama komponen sama kayak nama file (misal Banner.jsx, berarti yang disini function Banner())
// note : didalem return() isinya kayak html biasa aja
