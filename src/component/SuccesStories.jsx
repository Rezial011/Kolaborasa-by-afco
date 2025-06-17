import { React, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrambleTextPlugin, ScrollTrigger);

const stats = [
  {
    id: 1,
    num: "117K+",
    text: "Visitiors at BogorFest",
  },
  {
    id: 2,
    num: "3.5B+",
    text: "IDR Revenue Generated",
  },
  {
    id: 3,
    num: "15K+",
    text: "Daily Visitors at Braga Festival",
  },
  {
    id: 4,
    num: "100+",
    text: "Food Vendors Empowered",
  },
];

export default function SuccessStories() {
  useEffect(() => {
    AOS.init();
  }, []);

  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((el, index) => {
      gsap.to(el, {
        duration: 1.5,
        scrambleText: {
          text: stats[index].num,
        }, // jika pakai plugin

        scrollTrigger: {
          trigger: el,
          start: "top 90%", // animasi mulai saat elemen ~10% dari bawah viewport
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section
      id="success"
      className="SuccessStories flex flex-col justify-center items-center mb-5"
    >
      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#333333] mb-5 "
        data-aos="fade-up"
      >
        Success Stories
      </h1>
      <hr
        className="w-43 sm:w-48 lg:w-60 h-[3px] rounded-full border-hidden mb-10"
        data-aos="zoom-in" data-aos-delay="200"
      />
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.id}
            data-aos="fade-up"
            className={`text-center m-7 ${
              stat.id === 4
                ? "md:col-start-2 md:col-end-2 lg:col-start-auto lg:col-end-auto"
                : ""
            }`}
          >
            <h1
              className="stat text-[42px] sm:text-5xl font-bold mb-1.5"
              ref={(el) => (refs.current[i] = el)}
            >
              {stat.num}
            </h1>
            <h3 className="text-[1.05rem] md:text-lg text-gray-500">
              {stat.text}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
