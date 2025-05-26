import './App.css'

// import komponen disini (import namanya)
import Banner from './component/Banner'
import SuccessStories from './component/SuccesStories'
import Testi from './component/Testi'
import UpcomingEvents from './component/UpcomingEvent'

function App() {
  return (
    <>
      {/* trus panggil nama komponennya disini */}
      <Banner />
      <section className='sm:px-5 md:px-15 lg:px-19 xl:px-34 py-19 bg-gray-50'>
        <SuccessStories />
        <Testi />
      </section>
      <UpcomingEvents />
    </>
  )
}

export default App
