import star from "../images/star.png"
import photo from "../images/katie-zaferes.png"

function Card( props ) {
  return (
    <div className="card">
      <div className="card-photo-container">
        <img src={photo} alt="event" className="card-photo"/>
        <div className="card-photo-overlay">SOLD OUT</div>
      </div>
      <div className="card-event-details">
        <div className="card-details">
          <img src={star} alt="rating" />
          <span>{props.rating}</span>
          <span className="card-details-light">({props.reviewCount})</span>
          <span className="card-details-light">&nbsp;• {props.country}</span>
        </div>
        <p className="card-details">{props.title}</p>
        <p className="card-details"><strong>From ${props.price}</strong> / person</p>
      </div>
    </div>
  )
}

export default Card