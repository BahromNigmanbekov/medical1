import "./Header.css"

function Header() {
  return (
    <>
      <header>
        <div className="container">
            <nav className="navbar">
                <h1 className="logo">E-sheba</h1>
                <ul className="nav_list">
                    <li>
                        <a href="" className="nav_link">Home</a>
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
                    <button className="log_in">Sign up</button>
                </div>
            </nav>

            <main className="header_main">
                <div className="header_main_left">
                    <h2 className="header_main_left">Find & Search Your Favourite Doctor</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
                    <div className="header_main_left_search">
                        <div className="doctors_name"></div>
                        <div className="location"></div>
                    </div>
                </div>
            </main>
        </div>
      </header>
    </>
  )
}

export default Header