import React from "react";
import Afco from "../assets/Afco.png";
import antam from "../assets/antam.jpg";
import PDAM from "../assets/PDAM.png";
import bankbjb from "../assets/bankbjb.webp";
import Cimory from "../assets/Cimory.png";
import Summarecon from "../assets/Summarecon.svg";
import Tigaroda from "../assets/Tigaroda.png";
import Indomart from "../assets/Indomart.png";
import PWS from "../assets/PWS.png";
import Logobraga from "../assets/LogoBraga.png";
import Maestro from "../assets/Maestro.jpeg";
import Biznet from "../assets/Biznet.png";
import Bejo from "../assets/Bejo.webp";
import Kecapbango from "../assets/Kecapbango.png";
import Logobogorfest from "../assets/Logobogorfest.jpg";
import Kabupatenbogor from "../assets/Kabupatenbogor.png";

const clients = [
  { name: "AFCO", src: Afco},
  { name: "Antam", src: antam },
  { name: "PDAM", src: PDAM },
  { name: "Bank BJB", src: bankbjb },
  { name: "Cimory", src: Cimory },
  { name: "Summarecon", src: Summarecon },
  { name: "Semen Tiga Roda", src: Tigaroda },
  { name: "Indomaret", src: Indomart },
  { name: "Paradise Walk", src: PWS },
  { name: "Braga Citywalk", src: Logobraga },
  { name: "Maestro Project", src: Maestro },
  { name: "Biznet", src: Biznet },
  { name: "Bejo Jahe Merah", src: Bejo },
  { name: "Bango", src: Kecapbango },
  { name: "Bogorfest 2019", src: Logobogorfest },
  { name: "Kabupaten Bogor", src: Kabupatenbogor },
];

const OurClients = () => {
  return (
    <section className="py-10 px-4">
      <div className="section-title partner flex flex-col gap-3 items-center justify-center text-center mb-10 md:mb-15" data-aos="fade-down">
                <h1 className="font-semibold text-3xl sm:text-4xl ">Our Clients & Partners</h1>
                <hr className="header-line h-[4px] w-14 sm:w-19 rounded-full border-hidden" style={{background: "linear-gradient(90deg, #fab12f 0%, #faa22f 100%)"}}/>
            </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center" data-aos="fade-up">
        {clients.map((client, index) => (
          <div key={index} className="w-28 h-28 flex items-center justify-center">
            <img
              src={client.src}
              alt={client.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurClients;
