import React, { useEffect, useState } from "react";
import logo from "../../public/logo-round.png";
import AOS from "aos";
import "aos/dist/aos.css";

import woman1 from "../assets/avatar/woman.png"
import woman2 from "../assets/avatar/woman (1).png"
import man1 from "../assets/avatar/man.png"
import man2 from "../assets/avatar/man (1).png"
import man3 from "../assets/avatar/man (2).png"

const testimoni = [
  {
    id: 1,
    text: "Bergabung di event Kolaborasa adalah keputusan terbaik untuk brand kami. Antusiasme pengunjung luar biasa, dan penjualan kami meningkat drastis hanya dalam beberapa hari!",
    name: "thea",
    status: "Takoyaki mak gaul",
    image: woman1,
  },
  {
    id: 2,
    text: "Kolaborasa adalah platform yang tepat bagi kami untuk menjangkau target pasar yang lebih luas. Tim AFCO sangat profesional dan hasilnya sangat memuaskan.",
    name: "aditya",
    status: "Jagungku",
    image: man1,
  },
  {
    id: 3,
    text: "Menjadi bagian dari event Kolaborasa adalah pengalaman menyenangkan! Penonton interaktif, panggung keren, dan semuanya well-organized.",
    name: "alwi",
    status: "Haya turkhis ice cream",
    image: man2,
  },
  {
    id: 4,
    text: "AFCO Project benar-benar mendukung UMKM. Kami merasa dihargai, dibimbing, dan dilibatkan secara aktif. Terima kasih telah membuka peluang besar bagi usaha kecil seperti kami.",
    name: "sutrisno",
    status: "Bakso solo raja super 234",
    image: man3,
  },
  {
    id: 5,
    text: "Saya dan keluarga sangat menikmati suasana festivalnya. Makanan lezat, acara tertata rapi, dan banyak spot foto Instagramable. Can't wait for the next one!",
    name: "susi",
    status: "Es tebu",
    image: woman2,
  },
];

export default function Testi() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [clicked, setClicked] = useState(false);
  const click = (id) => {
    setClicked((itemId) => (itemId === id ? null : id));
  };
  return (
    <section
      className="testi-wrap overflow-scroll"
      style={{ scrollbarColor: "transparent transparent" }}
      data-aos="fade-left"
      data-aos-delay="300"
    >
      <div className="flex w-max gap-8 px-10 md:px-0 py-5">
        {testimoni.map((testi) => (
          <div
            key={testi.id}
            className={`testi w-[75vw] sm:w-[60vw] md:w-[38vw] lg:w-[32vw] xl:w-[22vw] p-6 md:p-8 bg-white text-gray-700 rounded-2xl ${
              clicked === testi.id ? "h-max" : "h-[100%]"
            }`}
          >
            <p
              className={`italic mb-7 leading-6 overflow-scroll  ${
                clicked === testi.id ? "line-clamp-none" : "line-clamp-7"
              }`}
              onClick={() => click(testi.id)}
            >
              "{testi.text}"
            </p>
            <div className="flex items-center gap-5">
              <img
                src={testi.image}
                className="w-13 h-13 rounded-full overflow-hidden bg-gray-200"
                alt=""
              />
              <div>
                <h1 className="text-[#333333] font-semibold line-clamp-2 capitalize">
                  {testi.name}
                </h1>
                <h2 className="text-xs line-clamp-1 font-bold capitalize">{testi.status}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
