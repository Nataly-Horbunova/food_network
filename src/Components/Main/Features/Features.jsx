import './Features.scss';
import FeaturesList from "./FeaturesList";
import SectionTittle from "../../SectionTittle/SectionTittle";
import SectionHeading from "../../SectionHeading/SectionHeading";

const Features = () => {
    return (
        <section className="section-features">
            <div className="container">
                <SectionTittle text="Features"/>
                <SectionHeading text="Food with a New Passion"/>
                <FeaturesList/>
            </div>
        </section>
    );
}

export default Features;