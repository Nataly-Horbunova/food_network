import './Features.scss';
import FeaturesList from "./FeaturesList";

const Features = ({features}) => {
    return (
        <section className="section-features" id={features.id}>
            <div className="container">
                <h2 className="section-tittle">{features.tittle} </h2>
                <h3 className="section-heading">{features.heading}</h3>
                <FeaturesList cards={features.cards}/>
            </div>
        </section>
    );
}

export default Features;