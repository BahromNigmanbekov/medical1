<<<<<<< HEAD
import { useState } from 'react'
import './App.css'
import Footer from "./components/footer/Footer"
import MapComponent from "./components/MapComponent/MapComponent"
=======
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "aos/dist/aos.css";
import AOS from "aos";
import './App.css'
import Home from './pages/home/Home'
>>>>>>> cff864e06fc30874cec911c09aa58438d08150c0

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    AOS.init({
      duration: 800, // default animation davomiyligi (ms)
      easing: "ease-in-out",
      once: false,   // true bo'lsa element bir marta animatsiyalanadi
      mirror: false, // scroll up qilganda ham anim bo'lsinmi
      offset: 120,   // trigger offset
    });
  }, []);

  return (
    <>
<<<<<<< HEAD
    <Footer/>
    <MapComponent/>
=======
      <Home />
>>>>>>> cff864e06fc30874cec911c09aa58438d08150c0
    </>
  )
}

export default App
