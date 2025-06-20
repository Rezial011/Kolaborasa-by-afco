import React, { useState } from "react";
import EventPopup from "./EventPopup";

//gallery card
import bogor from "../assets/bogorfest.png";
import braga from "../assets/braga.png";
import jajanan from "../assets/jajanan.png";
import bango from "../assets/fjb.png";
import janus from "../assets/janus.png";

//bogorfest gallery
import senam from "../assets/bogorfest/senam.png";
import cek from "../assets/bogorfest/cekMedis.png";
import crowd from "../assets/bogorfest/crowd.png";
import bogor4 from "../assets/bogorfest/bogor4.png";
import bogor5 from "../assets/bogorfest/bogor5.png";

//braga gallery
import ngabuburit from "../assets/braga/ngabuburit.jpg";
import jajan from "../assets/braga/jajan.png";
import makan from "../assets/braga/makan.png";
import braga4 from "../assets/braga/braga4.png";
import braga5 from "../assets/braga/braga5.png";

//jajanan viral gallery
import night from "../assets/jajananViral/night.png";
import view from "../assets/jajananViral/view.png";
import nightView from "../assets/jajananViral/nightView.png";
import javiral4 from "../assets/jajananViral/javiral4.png";
import javiral5 from "../assets/jajananViral/javiral5.png";

//jajanan bango gallery
import fjb from "../assets/bango/fjb.png";
import fjb1 from "../assets/bango/fjb1.png";
import fjb2 from "../assets/bango/fjb2.png";
import fjb3 from "../assets/bango/fjb3.png";
import fjb4 from "../assets/bango/fjb4.png";

//jajanan nusantara gallery
import nusantara from "../assets/jajananNusantara/nusantara.png";
import nusantara1 from "../assets/jajananNusantara/nusantara1.png";
import nusantara2 from "../assets/jajananNusantara/nusantara2.png";
import nusantara3 from "../assets/jajananNusantara/nusantara3.png";
import nusantara4 from "../assets/jajananNusantara/nusantara4.png";

export default function PastEvents() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventsData = [
    {
      id: 1,
      title: "Festival Jajanan Bango 2022",
      date: "28-30 October 2022",
      location: "GBK Senayan, Jakarta",
      image: bango,
      description:
        "Traditional culinary festival with various regional snacks and local cultural arts performances..",
      fullDescription:
        "Festival jajanan tradisional yang menampilkan kuliner khas Bango dengan suasana tradisional dan pertunjukan seni budaya setempat.",
      attendance: 6000,
      vendors: 30,
      highlights: [
        "Jajanan tradisional khas daerah",
        "Pertunjukan seni budaya lokal",
        "Lomba memasak tradisional",
      ],
      gallery: [fjb, fjb1, fjb2, fjb3, fjb4],
    },
    {
      id: 2,
      title: "BogorFest 2023",
      date: "24-27 August 2023",
      location: "Stadion Pakansari, Bogor",
      image: bogor,
      description:
        "A massive festival featuring music performances, art shows, exhibitions, and culinary delights.",
      fullDescription:
        "BogorFest 2023 adalah festival besar di Bogor yang menampilkan konser musik, pemeriksaan kesehatan gratis, dan senam pagi bersama warga.",
      attendance: 5000,
      artists: 12,
      highlights: ["600 tenant participant", "Penampilan band lokal"],
      gallery: [senam, cek, crowd, bogor4, bogor5],
    },
    {
      id: 3,
      title: "Festival Jajanan Nusantara 2024",
      date: "2-13 October 2024",
      location: "Baywalk Mall, Jakarta",
      image: janus,
      description:
        "A celebration of Indonesia's rich culinary heritage featuring traditional dishes from all 34 provinces.",
      fullDescription:
        "Festival kuliner nusantara yang menampilkan makanan tradisional dari 34 provinsi di Indonesia, lengkap dengan demo masak dan workshop kuliner.",
      attendance: 8000,
      duration: "4 days",
      highlights: [
        "Kuliner dari 34 provinsi Indonesia",
        "Demo masak oleh chef ternama",
        "Workshop membuat jamu tradisional",
      ],
      gallery: [nusantara, nusantara1, nusantara2, nusantara3, nusantara4],
    },
    {
      id: 4,
      title: "Braga Ngabuburit Festival 2025",
      date: "14 March - 10 April 2025",
      location: "Braga City Walk, Bandung",
      image: braga,
      description:
        "A Ramadan-themed culinary festival featuring 19 food booths, cultural performances, and religious activities.",
      fullDescription:
        "Festival ngabuburit di Braga dengan jajanan khas Ramadhan, pertunjukan budaya, dan buka puasa bersama.",
      attendance: 3000,
      activities: 8,
      highlights: [
        "19 booth kuliner khas Ramadhan",
        "Live music sore hari",
        "Lomba adzan dan ceramah",
      ],
      gallery: [ngabuburit, jajan, makan, braga4, braga5],
    },
    {
      id: 5,
      title: "Jajanan Viral 2025 Paradise Walk Serpong",
      date: "16 June - 15 July 2025",
      location: "Paradise Walk Serpong, Tangerang Selatan",
      image: jajanan,
      description:
        "A family-friendly event featuring colorful activities for kids, Game Night: Indo National Team Live, and diverse culinary experiences.",
      fullDescription:
        "Event kuliner kekinian dengan berbagai jajanan viral, hiburan malam, dan area bermain untuk anak-anak.",
      attendance: 4000,
      duration: "1 months",
      highlights: [
        "Makan malam di bawah lampu hias",
        "Stand makanan TikTok viral",
        "Nobar Timnas",
      ],
      gallery: [night, view, nightView, javiral4, javiral5],
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
      <section className="past-events-section" id="events">
        <div className="section-title">
          <h2 className="main-title" data-aos="fade-up">
            Our Past Events
          </h2>
          <div data-aos="zoom-in" data-aos-delay="200">
            <hr className="header-line rounded-full border-hidden" />
          </div>
        </div>

        <div className="events-grid">
          {eventsData.map((event, index) => (
            <div key={event.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="event-card group">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="event-details">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-info">
                    <i className="fas fa-calendar">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#ff4d4d"
                          className="group-hover:fill-white"
                          d="M18 4H2V2h16zm-.5 9H16v5l3.61 2.16l.75-1.22l-2.86-1.69zm6.5 4c0 3.87-3.13 7-7 7c-3.53 0-6.43-2.61-6.92-6H2v-6H1v-2l1-5h16l1 5v.29c2.89.87 5 3.54 5 6.71M4 16h6v-4H4zm18 1c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5"
                        />
                      </svg>
                    </i>
                    <span>{event.date}</span>
                  </div>
                  <div className="event-info">
                    <i className="fas fa-map-marker-alt">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path
                          className="group-hover:fill-white"
                          fill="#ff4d4d"
                          d="M10 2C6.69 2 4 4.69 4 8c0 2.02 1.17 3.71 2.53 4.89c.43.37 1.18.96 1.85 1.83c.74.97 1.41 2.01 1.62 2.71c.21-.7.88-1.74 1.62-2.71c.67-.87 1.42-1.46 1.85-1.83C14.83 11.71 16 10.02 16 8c0-3.31-2.69-6-6-6m0 2.56a3.44 3.44 0 1 1 0 6.88a3.44 3.44 0 0 1 0-6.88"
                        />
                      </svg>
                    </i>
                    <span>{event.location}</span>
                  </div>
                  <p className="event-description">{event.description}</p>
                  <button
                    className="event-link"
                    onClick={() => openPopup(event)}
                  >
                    More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <EventPopup event={selectedEvent} onClose={closePopup} />
    </>
  );
}
