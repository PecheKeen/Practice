import airbnbLogo from "../images/airbnb-logo.png"

function Navbar() {
  return (
    <nav className="navbar">
      <img src={airbnbLogo} alt="airbnb" className="nav-logo"/>;
    </nav>
  )
}

export default Navbar