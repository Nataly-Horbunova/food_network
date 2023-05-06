import './Hero.scss';
import heroImg from './../../../assets/hero-img.png';
import Button from "../../Button/Button";

const Hero = () => {
    return (
        <section className="section-hero">
            <div className="container">
                <div className="section-hero-info">
                    <h1 className="section-hero-tittle">Making time a good time by making food the good food.</h1>
                    <p className="section-hero-text">There are many things are needed to start the Fast Food Business.
                        You need not only Just Food Stalls with Persons but also specialized equipment.
                    </p>
                    <div className="section-hero-btns">
                        <Button text='Order Now' type='filled'/>
                        <Button text='Food Details' type='outlined'/>
                    </div>
                </div>
                <div className="section-hero-img-wrapper">
                    <img src={heroImg} alt="frying_pen" className="section-hero-img"/>
                </div>
            </div>
        </section>
    )
}

export default Hero;