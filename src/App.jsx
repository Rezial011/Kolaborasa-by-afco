import './App.css'

// import komponen disini (import namanya)
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import SuccessStories from './component/SuccesStories'
import Testi from './component/Testi'
import UpcomingEvents from './component/UpcomingEvent'
import Contact from './component/Contact'

function App() {
  return (
    <>
      {/* trus panggil nama komponennya disini */}
      <Navbar />
      <Banner />
      <section className='sm:px-5 md:px-15 lg:px-19 xl:px-34 py-19 bg-gray-50 overflow-hidden'>
        <SuccessStories />
        <Testi />
      </section>
      <UpcomingEvents />
      <Contact />
    </>
  )
}

export default App
