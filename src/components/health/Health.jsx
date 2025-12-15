import React from 'react'
import "./health.css"
import doctors1 from "../../assets/Rectangle 15.png"

function Health() {
  return (
    <>
      <div className="container">
        <div className="future">

          <div className="future_wrapper">

            <div className="future_left">
              <h1 className="title">
                The Future <br /> of <span>Quality Health</span>
              </h1>

              <p className="future_p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus 
                feugiat lectus risus sed ullamcorper. Auctor semper fermentum 
                volutpat integer vel. In rhoncus elementum nunc, malesuada mi  sed.
                Nibh est sit lobortis id semper.
              </p>

              <p className="future_p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
                feugiat lectus risus sed ullamcorper. Auctor semper fermentum
                volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed.
                Nibh est sit lobortis id semper.
              </p>

              <p className="future_p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
                feugiat lectus risus sed ullamcorper. sed. Nibh est sit lobortis id
                semper.
              </p>

              <button className="learn_more">Learn More →</button>
            </div>

            <div className="future_right">
              <img src={doctors1} alt="" />
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Health
