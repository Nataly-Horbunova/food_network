const FeaturesCard = ({tittle, text, img, alt}) => {
    return (
        <li className="features-card-item">
            <div className="features-card-img-wrapper">
                <img src={img} alt={alt} className="features-card-img"/>
            </div>
            <h4 className="features-card-tittle">{tittle}</h4>
            <p className="features-card-text">{text}</p>
        </li>
    );
}

export default FeaturesCard;


