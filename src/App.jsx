import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "aos/dist/aos.css";
import AOS from "aos";
import './App.css'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => { 
    AOS.init({
      duration: 800, 
      easing: "ease-in-out",
      once: false,   
      mirror: false, 
      offset: 120,   
    });
  }, []);

  return (
    <>
      <Home />
    </>
  )
}

export default App
