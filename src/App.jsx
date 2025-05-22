import { useState } from 'react'
import './App.css'

// import komponen disini (import namanya)
import Banner from './component/Banner'
import Contact from './component/Contact'

function App() {
  return (
    <>
      {/* trus panggil nama komponennya disini */}
      <Banner/>
      <Contact/>
    </>
  )
}

export default App
