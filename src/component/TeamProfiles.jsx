import React, { useEffect } from 'react';

const TeamProfiles = () => {
  // Data tim yang bisa diubah secara dinamis
  const teamMembers = [
    {
      id: 1,
      name: "Ahmad Faiz",
      role: "Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Visioner yang memimpin inovasi teknologi",
    },
    {
      id: 2,
      name: "Rean Susanti",
      role: "Co-Founder",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      bio: "Ahli dalam pengembangan produk digital",
    },
    {
      id: 3,
      name: "Septian Ali",
      role: "Bussines Development",
      image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Kreator konten visual yang inspiring",
    }
  ];

  return (
    <div className="team-profiles-container">
      <div className="container">
        <div 
          className="header"
          data-aos="fade-down"
        >
          <h1>People Behind Us</h1>
          <div className="header-line"></div>
        </div>

        <div className="profiles-grid">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="profile-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
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

              {/* ===== BAGIAN SOCIAL LINKS SUDAH DIHAPUS TOTAL ===== */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamProfiles;
