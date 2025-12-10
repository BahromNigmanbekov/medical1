import React from 'react'
import "./Cloges.css"

import page1 from "../../assets/Ellipse 7.png"
import page2 from "../../assets/Ellipse 8.png"
import page3 from "../../assets/Ellipse 9.png"
import page4 from "../../assets/Ellipse 10.png"
import page5 from "../../assets/Ellipse 11.png"
import page6 from "../../assets/Ellipse 12.png"

import { FaStar } from "react-icons/fa"

function Cloges() {
  return (
    <div className="reviews-bg">
      <div className="container reviews-section">

        <div className="left-side">
          <h1 className="title">
            What <span className="blue">Our Member's</span> <br /> Saying About Us
          </h1>

          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Sem velit viverra amet faucibus.
          </p>

          <div className="avatars-row">
            <div className="avatars">
              <img src={page1} />
              <img src={page2} />
              <img src={page3} />
              <img src={page4} />
              <img src={page5} />
              <img src={page6} />
            </div>
            <p className='review-text'>100+ Reviews</p>
          </div>
        </div>

        <div className="right-side">
          <div className="card">
            <div className="card-top">
              <div className="user-info">
                <img src={page4} className="profile-img" />
                <div>
                  <h3>Jane Cooper</h3>
                  <p>12/4/17</p>
                </div>
              </div>

              <div className="stars">
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
              </div>
            </div>

            <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
            </p>
          </div>
        </div>

      </div>
    </div>



  )
}

export default Cloges
