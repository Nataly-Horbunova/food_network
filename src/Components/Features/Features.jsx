import './Features.scss';
import FeaturesList from "./FeaturesList";

const Features = ({features}) => {
    return (
        <section className="section-features">
            <div className="container">
                <h2 className="section-name">{features.tittle}</h2>
                <h3 className="section-heading">{features.heading}</h3>
                <FeaturesList cards={features.cards}/>
            </div>
        </section>
    );
}

export default Features;