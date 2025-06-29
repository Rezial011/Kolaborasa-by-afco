import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

// import komponen disini (import namanya)
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Contact from "./component/Contact";
import About from "./component/About";
import PastEvents from "./component/PastEvents";
import SuccessStories from "./component/SuccesStories";
import Testi from "./component/Testi";
import UpcomingEvents from "./component/UpcomingEvent";
import Footer from "./component/Footer";
import TeamProfiles from "./component/TeamProfiles";
import OurClient from './component/OurClient';

function App() {
  return (
    <>
      {/* trus panggil nama komponennya disini */}
      <Navbar />
      <Banner />
      <section className="bg relative overflow-hidden">
        <svg className="absolute top-[1.8%] h-auto -right-70 sm:top-[1.5%] sm:-right-80 sm:w-190 md:top-[1%] md:-right-80 lg:top-[0.8%] opacity-10 "
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="500"
          viewBox="0 0 24 24"
        >
          <path
            fill="#00000000"
            d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
            stroke-width="2.7"
            stroke="#fff"
          />
        </svg>
        <About />
        <TeamProfiles />
        <PastEvents />
        <section className="sm:px-5 md:px-15 lg:px-19 xl:px-34 py-19 overflow-hidden">
          <SuccessStories />
          <Testi />
        </section>
        <UpcomingEvents />
        <OurClient />
        <Partner />
        <Contact />
        <Footer />
      </section>
    </>
  );
}

export default App;
