import FeaturesCard from './FeaturesCard';
import {featuresData} from "../../../data/constants";

const FeaturesList = () => {
    return (
        <ul className="section-features-cards">
            {
                featuresData.map(item => {
                    return <FeaturesCard
                        key={item.id}
                        img={require(`../../../assets/${item.img}`)}
                        alt={item.alt}
                        text={item.text}
                        tittle={item.tittle}/>
                })
            }
        </ul>

    );
}

export default FeaturesList;