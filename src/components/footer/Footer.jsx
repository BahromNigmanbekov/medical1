import React from 'react'
import './Footer.css'
import map from "../../assets/map.png"

function Footer() {
  return (
    <>
    <div className="container">
      
    </div>
    <div className='subscribe_card'>
        <h2 className="font_h2">Subscribe To Our Newsletter</h2>

        <form action="" className="font_form" >
          <input type="text" className='input_form_b' placeholder='Enter your name...' />
          <button className="btn_into">→</button>
        </form>
      </div>
    <br /><br /><br /><br /><br />

    <footer>
        <div className="container">
          <div className="hammasi">


            <div className='h2_1'>
          <h2 className='salom_h2'>E-sheba</h2>
          
          <p className='salom_p'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nec risus feugiat lectus risus sed <br /> ullamcorper. Auctor  semper fermentum <br /><br />
             volutpat integer vel. In rhoncus elementum nunc, <br /> malesuada mi sed. Nibh est sit lobortis id semper.
             </p>
        </div>


        <div className="useful">
          <h2 className='user_h2'>
            Useful Links
          </h2>

          <ul className='user_ul_list'>
            <li className='list_link'>About Us</li>
            <li className='list_link'>Privacy Policy</li>
            <li className='list_link'>Our Mission</li>
            <li className='list_link'>Our Team</li>
          </ul>
        </div>


        <div className="map">
          <h2 className='map_h2'>Address</h2>

              <img src={map} alt="" />
        </div>
         
          </div>
        </div>

        <p className='btn_footer'>____________________________________________________________________________________________________________________________________</p>
        <br /><br />
        <p className='footer_p'>2022 All Right Reserved</p>
        <br />
      </footer>
    </>
    
  )
}

export default Footer;
