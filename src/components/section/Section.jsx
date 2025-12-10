import React from 'react'
import covid from "../../assets/covid.png"
import opka from "../../assets/obka.png"
import kosa from "../../assets/kosa.png"
import bosh from "../../assets/bosh.png"
import rasim from "../../assets/rasim.png"
import "./Section.css"

function Section() {
  return (
    <>
      <div className="container">
        <h2 className='name_page'>Our Consulting Specialists</h2>


        <div className="big_ul">
            <div className="card_1">
                <img src={covid} alt="" />
                <h3 className='h3t'>Covid-19 Test</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
            </div>
            <div className="card_1">
                <img src={opka} alt="" />
                <h3 className='h3t'>Heart Lungs</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
            </div>
            <div className="card_1">
                <img src={kosa} alt="" />
                <h3 className='h3t'>Suppliment</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
            </div>
            <div className="card_1">
                <img src={bosh} alt="" />
                <h3 className='h3t'>Mental Health</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
            </div>
        </div>


        <div className="img_section">
          <div className="wrapper_left">
            <img src={rasim} alt="" />
          </div>

          <div className="wrapper_rigth">
            <h2>
              Why You Choose Us?
            </h2>

            <ul className="list_lorem">
              <li className='list'>✔️ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li className='list'>✔️ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li className='list'>✔️ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li className='list'>✔️ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li className='list'>✔️ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>

            <button className='wrapper_btn'>Learn More →</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section
