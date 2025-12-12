import { useState } from 'react'
import './App.css'
import Footer from "./components/footer/Footer"
import MapComponent from "./components/MapComponent/MapComponent"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Footer/>
    <MapComponent/>
    </>
  )
}

export default App
