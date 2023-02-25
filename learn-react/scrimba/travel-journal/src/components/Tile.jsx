function Tile( props ) {
    return (
        <section className="tile">
            <img src={props.imageUrl} alt="location" className="tile--image" />
            <div className="tile--info">
                <span className="tile--country-info">
                    <img src="" alt="" className="tile--location-icon" />
                    <h2 className="tile--country">{props.location}</h2>
                    <a href={props.googleMapsUrl} className="tile--google-maps-url">View on Google Maps</a>
                </span>
                <h1 className="tile--location">{props.title}</h1>
                <h4 className="tile--dates">{props.startDate} - {props.endDate}</h4>
                <p className="tile--description">{props.description}</p>
            </div>
        </section>
    )
}

export default Tile