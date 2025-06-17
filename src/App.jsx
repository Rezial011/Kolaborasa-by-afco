import { useState } from 'react'
import './App.css'

// import komponen disini (import namanya)
import Banner from './component/Banner'
import Contact from './component/Contact'
import Footer from './component/Footer'
function App() {
  return (
    <>
      {/* trus panggil nama komponennya disini */}
      <Banner/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
