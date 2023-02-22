import photo from "../images/serene-doge.jpg"
import email from "../images/Mail.png"
import linkedin from "../images/linkedin.png"

function Headshot() {
  return (
    <div className="headshot">
      <img src={photo} alt="stylish dog at beach" className="photo"/>
      <div className="info">
        <h1 className="name">Serene Doge</h1>
        <h3 className="title">Fullstack Developer</h3>
        <a href="/#" className="website">dabestdoge.website</a>
        <div className="btn-container">
          <button className="btn-email"><img src={email} alt="email" className="icon"/>Email</button>
          <button className="btn-linkedin"><img src={linkedin} alt="linkedin" className="icon"/>LinkedIn</button>
        </div>
      </div>
    </div>
  )
}

export default Headshot;