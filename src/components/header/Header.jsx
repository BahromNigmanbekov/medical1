import "./Header.css"
import logo from '../../assets/logo.png'
import brat from '../../assets/brat.png'
import chiziq from '../../assets/chiziq.png'
import { FaRegUserCircle } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io"
import { CiLocationOn, CiSearch } from "react-icons/ci"


function Header() {
 
  return (
    <>
      <header>
        <div className="container">
            <nav className="navbar">
                <img src={logo} alt="" />
                <ul className="nav_list">
                    <li>
                        <a href=""  className="nav_link">Home</a>
                    </li>
                    <li>
                        <a href="" className="nav_link">About</a>
                    </li>
                    <li>
                        <a href="" className="nav_link">Application</a>
                    </li>
                    <li>
                        <a href="" className="nav_link">History</a>
                    </li>
                </ul>
                <div className="nav_btn_div">
                    <button className="log_in">Log in</button>
                    <button className="sign_up">Sign up</button>
                </div>
            </nav>

            <main className="header_main" >
                <div className="header_main_left">
                    <h2>Find & Search Your <section><h2>Favourite</h2> <img src={chiziq} alt="" /></section> Doctor</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
                    <div className="header_main_left_search">
                        <div className="doctors_name">
                            <FaRegUserCircle  className="user"/>
                            <p>Doctor’s Name</p>
                            <IoIosArrowDown className="loocation"/>
                        </div>
                        <div className="location">
                            <CiLocationOn className="loocation" />
                            <p>Location</p>
                            <IoIosArrowDown className="loocation"/>
                        </div>
                        <div  className="search">
                            <CiSearch />
                        </div>
                    </div>
                </div>
                <div className="header_main_right" >
                    <img data-aos="fade-left" src={brat} alt="" />
                </div>
            </main>
        </div>
      </header>
      <section className="header_sec">
        <div className="container">
            <ul className="header_sec_list">
            <li className="border_li">
                <h2>24/7</h2>
                <p>Online Support</p>
            </li>
            <li className="border_li">
                <h2>100+</h2>
                <p>Doctors</p>
            </li>
            <li>
                <h2>1M+</h2>
                <p>Active Patients</p>
            </li>
        </ul>
        </div>
      </section>
    </>
  )
}

export default Header