import reactLogo from "../react-logo.png";

function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <img className="react-logo" src={reactLogo} alt="React Logo"/>
        <h1 className="nav-title">ReactFacts</h1>
        <h3 className="nav-sub-title">React Course - Project 1</h3>
      </nav>
    </header>
  )
}

export default Header;