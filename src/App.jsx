import { useState } from 'react'
import './App.css'

// import komponen disini (import namanya)
import Banner from './component/Banner'
import Contact from './component/Contact'
import About from './component/About'
import PastEvents from './component/PastEvents'

function App() {
  return (
    <>
      {/* trus panggil nama komponennya disini */}
      <Banner />
      <About/>
      <PastEvents/>
      <Contact/>
    </>
  )
}

export default App
