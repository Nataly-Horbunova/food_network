const FeaturesList = ({cards}) => {
    return (
        <ul className="section-features-cards">
            {
                cards.map(card => {
                    return (
                        <li className="features-card-item" key={card.id}>
                            <div className="features-card-img-wrapper">
                                <img src={require(`../../assets/${card.img}`)} alt={card.alt}
                                     className="features-card-img"/>
                            </div>
                            <h4 className="features-card-tittle">{card.tittle}</h4>
                            <p className="features-card-text">{card.text}</p>
                        </li>
                    )
                })
            }
        </ul>

    );
}

export default FeaturesList;