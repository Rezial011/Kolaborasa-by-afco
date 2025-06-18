import React, { useState } from "react";
import EventPopup from "./EventPopup";
import bogor from "../assets/bogorfest.png";
import braga from "../assets/braga.png";
import jajanan from "../assets/jajanan.png";

import senam from "../assets/bogorfest/senam.png";
import cek from "../assets/bogorfest/cekMedis.png";
import crowd from "../assets/bogorfest/crowd.png";

import ngabuburit from "../assets/braga/ngabuburit.png";
import jajan from "../assets/braga/jajan.png";
import makan from "../assets/braga/makan.png";

import night from "../assets/jajananViral/night.png";
import view from "../assets/jajananViral/view.png";
import nightView from "../assets/jajananViral/nightView.png";

export default function PastEvents() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventsData = [
    {
      id: 1,
      title: "BogorFest 2023",
      date: "24-27 August 2023",
      location: "Stadion Pakansari, Bogor",
      image: bogor,
      description: "A massive festival featuring music performances, art shows, exhibitions, and culinary delights.",
      fullDescription: "BogorFest 2023 adalah festival besar di Bogor yang menampilkan konser musik, pemeriksaan kesehatan gratis, dan senam pagi bersama warga.",
      attendance: 5000,
      artists: 12,
      highlights: [
        "Senam massal bersama 1000 peserta",
        "Pemeriksaan medis gratis",
        "Penampilan band lokal"
      ],
      gallery: [senam, cek, crowd]
    },
    {
      id: 2,
      title: "Braga Ngabuburit Festival",
      date: "14 March - 10 April 2025",
      location: "Braga City Walk, Bandung",
      image: braga,
      description: "A Ramadan-themed culinary festival featuring 19 food booths, cultural performances, and religious activities.",
      fullDescription: "Festival ngabuburit di Braga dengan jajanan khas Ramadhan, pertunjukan budaya, dan buka puasa bersama.",
      attendance: 3000,
      activities: 8,
      highlights: [
        "19 booth kuliner khas Ramadhan",
        "Live music sore hari",
        "Lomba adzan dan ceramah"
      ],
      gallery: [ngabuburit, jajan, makan]
    },
    {
      id: 3,
      title: "Jajanan Viral 2025 Paradise Walk Serpong",
      date: "16 June - 15 Juni 2024",
      location: "Paradise Walk Serpong, Tangerang Selatan",
      image: jajanan,
      description: "A family-friendly event featuring colorful activities for kids, Game Night: Indo National Team Live, and diverse culinary experiences.",
      fullDescription: "Event kuliner kekinian dengan berbagai jajanan viral, hiburan malam, dan area bermain untuk anak-anak.",
      attendance: 4000,
      duration: "1 months",
      highlights: [
        "Makan malam di bawah lampu hias",
        "Stand makanan TikTok viral",
        "Nobar Timnas"
      ],
      gallery: [night, view, nightView]
    },
  ];

  const openPopup = (event) => {
    setSelectedEvent(event);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setSelectedEvent(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section className="flex flex-col items-center bg-gray-50" id="events">
        <div className="section-title">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#333333] mb-5" data-aos="fade-up">
            Our Past Events
          </h2>
          <hr className="w-43 sm:w-48 lg:w-60 h-[3px] rounded-full border-hidden mb-15" data-aos="zoom-in" data-aos-delay="200" />
        </div>

        <div className="events-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8">
          {eventsData.map((event, index) => (
            <div
              key={event.id}
              className={`event-card w-[80vw] sm:w-[45vw] lg:w-[30vw] xl:w-[25vw]`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-info">
                  <i className="fas fa-calendar"></i>
                  <span>{event.date}</span>
                </div>
                <div className="event-info">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{event.location}</span>
                </div>
                <p className="event-description">{event.description}</p>
                <button className="event-link" onClick={() => openPopup(event)}>
                  More Info
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <EventPopup event={selectedEvent} onClose={closePopup} />
    </>
  );
}
