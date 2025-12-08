import React from 'react'
import "./cloges.css"
import page1 from "../../assets/Ellipse 7.png"
import page2 from "../../assets/Ellipse 8.png"
import page3 from "../../assets/Ellipse 9.png"
import page4 from "../../assets/Ellipse 10.png"
import page5 from "../../assets/Ellipse 11.png"
import page6 from "../../assets/Ellipse 12.png"


function Cloges() {
  return (
    <>
        <div className="container">
            <div className="members">
                <h1 className='about'> What <span className='member'>Our Member's</span> <br /> Saying About Us</h1>
                <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sem velit viverra amet faucibus.</p>
                <div className="pagess">
                    <img src={page1} alt="" />
                    <img src={page2} alt="" />
                    <img src={page3} alt="" />
                    <img src={page4} alt="" />
                    <img src={page5} alt="" />
                    <img src={page6} alt="" />
                    
                    <p>100+ Reviews</p>

                </div>
            </div>
        </div>
    </>
  )
}

export default Cloges
