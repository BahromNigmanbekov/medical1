import React from 'react'
import './Footer.css'

 function Footer() {
  return (
    <>
    <div className='subscribe_card'>
      <br /><br /><br /> 
    <h1 className='h1_footer'>Subscribe To Our Newsletter</h1>

    <button className='btn_card'>
      <button className='btn_into'>→</button>
    </button>
    </div>

<br /><br /><br /><br /><br />
    <footer>
      <div className='h2_1'>
        <h2>E-sheba</h2>
        <h2>Useful Link</h2>
        <h2>Address</h2>
       </div>

    <div className='h2_2'>
     <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nec risus feugiat lectus risus sed <br /> ullamcorper. Auctor semper fermentum <br />
      <br /> volutpat integer vel. In rhoncus elementum nunc, <br /> malesuada mi sed. Nibh est sit lobortis id semper.</p>
        <p>About Us <br />
           Privacy Policy <br />
           Our Mission <br />
           Our Team</p>

          

          {/*} <iframe 
    src="https://www.google.com/maps/embed?pb=YOUR_MAP_LINK"
    width="600" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
    </iframe>*/}

    </div>
    <p className='btn_footer'>____________________________________________________________________________________________________________________________________</p>
    <br />
    <p className='footer_p'>2022 All Right Reserved</p>
    <br />
    </footer>
    </>
  )
}

export default Footer