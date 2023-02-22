import github from "../images/GitHub Icon.png"
import facebook from "../images/Facebook Icon.png"
import twitter from "../images/Twitter Icon.png"
import insta from "../images/Instagram Icon.png"

function Footer() {
  return (
    <div className="footer">
      <div className="footer-icon"><img src={twitter} alt="twitter" className="icon" /></div>
      <div className="footer-icon"><img src={facebook} alt="facebook" className="icon" /></div>
      <div className="footer-icon"><img src={insta} alt="insta" className="icon" /></div>
      <div className="footer-icon"><img src={github} alt="github" className="icon" /></div>
    </div>
  )
}

export default Footer;