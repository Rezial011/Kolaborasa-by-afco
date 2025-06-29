import React from "react";
import kuliner from "../assets/braga/braga4.png";
import people from "../assets/jajananViral/javiral4.png";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="section-title">
          <h2
            className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold mb-5"
            data-aos="fade-up"
          >
            About Kolaborasa
          </h2>
          <div data-aos="zoom-in" data-aos-delay="200">
            <hr className="header-line rounded-full border-hidden" />
          </div>
        </div>

        <div className="about-content">
          <div
            className="about-text"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <p>
              Kolaborasa is a creative movement by AFCO Project that focuses on
              empowering local F&B businesses through collaborative and viral
              events.
            </p>
            <p>
              Our mission is to create unforgettable food festivals and events
              that not only promote local culinary talent but also create
              vibrant community spaces.
            </p>
            <p>
              With successful events like BogorFest, Braga Ngabuburit Festival,
              and our upcoming Jajanan Viral series, we've established ourselves
              as pioneers in the culinary event industry.
            </p>
          </div>

          <div
            className="about-visual"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="decorative-elements">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
            </div>

            <div className="image-container">
              <div className="main-image">
                <img src={kuliner} alt="Food enthusiast enjoying meal" />
              </div>
              <div className="overlay-image">
                <img src={people} alt="Kolaborasa culinary event" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
