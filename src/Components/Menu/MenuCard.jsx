import starActive from '../../assets/star_active.svg';
import starDisabled from '../../assets/star_disabled.svg';

function MenuCard({card}) {
    const ratingList = [];

    for (let i = 1; i <= 5; i++) {

        if (i <= card.rating) {
            ratingList.push(<li className="star" key={i}><img src={starActive} alt="star"/></li>);
        } else if (i > card.rating && i <= 5)
            ratingList.push(<li className="star" key={i}><img src={starDisabled} alt="star"/></li>);
    }


    return (
        <li className="menu-card-item" data-aos="fade-up" >
            <div className="menu-card-img-wrapper">
                <img src={require(`../../assets/${card.img}`)} alt={card.tittle}
                     className="menu-card-img"/>
            </div>
            <div className="menu-card-description">
                <h4 className="menu-card-tittle">{card.tittle}</h4>
                <p className="menu-card-price" data-aos="zoom-in" data-aos-delay="1000">{`${card.price}$`} </p>
                <p className="menu-card-text">{card.description}</p>
                <div className="menu-card-add-btn">+</div>
                <ul className="menu-card-rating">
                    {ratingList}
                </ul>
            </div>
        </li>
    );
}

export default MenuCard;