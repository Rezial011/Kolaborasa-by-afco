import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Owner from "../assets/Owner.jpg";
import CoOwner from "../assets/CoOwner.jpg";
import BussinesD from "../assets/BussinesD.jpg";

const TeamProfiles = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Ahmad Faiz",
      role: "Founder",
      image: Owner,
      bio: "Pemimpin kreatif di balik setiap event berkesan",
      whatsapp: "6281222200233",
      message: "Halo Kak Ahmad Faiz, saya tertarik dengan event Kolaborasa dan ingin berdiskusi lebih lanjut sebagai Founder."
    },
    {
      id: 2,
      name: "Rean Susanti",
      role: "Co-Founder",
      image: CoOwner,
      bio: "Visioner yang memimpin inovasi event",
      whatsapp: "6281329999130",
      message:
        "Halo Kak Rean Susanti, saya ingin tahu lebih banyak tentang inovasi event Kolaborasa. Boleh diskusi, Co-Founder?",
    },
    {
      id: 3,
      name: "Septian Ali",
      role: "Business Development",
      image: BussinesD,
      bio: "Ahli strategi di balik event-event luar biasa",
      whatsapp: "6285212603636",
      message: "Halo Kak Septian Ali, saya tertarik untuk membahas potensi kerja sama dalam pengembangan bisnis event Kolaborasa."
    }
  ];

  return (
    <div className="team-profiles-container">
      <div className="container">
        <div className="header section-title text-center" data-aos="fade-down">
          <h1>People Behind Us</h1>
          <div className="header-line "></div>
        </div>

        <div className="profiles-grid">
          {teamMembers.map((member, index) => {
            const encodedMessage = encodeURIComponent(member.message);
            const waUrl = `https://wa.me/${member.whatsapp}?text=${encodedMessage}`;
            return (
              <div
                key={member.id}
                className="profile-card"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="profile-image-wrapper">
                    <div className="profile-image">
                      <img
                        src={member.image}
                        alt={`Profil ${member.name}`}
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="profile-info">
                    <h3 className="name">{member.name}</h3>
                    <p className="role">{member.role}</p>
                    <p className="bio">{member.bio}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamProfiles;
