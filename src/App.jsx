import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";

// import komponen disini (import namanya)
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import Contact from './component/Contact'
import About from './component/About'
import PastEvents from './component/PastEvents'
import SuccessStories from './component/SuccesStories'
import Testi from './component/Testi'
import UpcomingEvents from './component/UpcomingEvent'
import Footer from './component/Footer'
import TeamProfiles from './component/TeamProfiles';

function App() {
  return (
    <>
      {/* trus panggil nama komponennya disini */}
      <Navbar />
      <Banner />
      <About/>
      <TeamProfiles/>
      <PastEvents/>
      <section className='sm:px-5 md:px-15 lg:px-19 xl:px-34 py-19 bg-gray-50 overflow-hidden'>
        <SuccessStories />
        <Testi />
      </section>
      <UpcomingEvents />
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
