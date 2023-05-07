import './Hero.scss';

const Hero = ({hero}) => {
    return (
        <section className="section-hero">
            <div className="container">
                <div className="section-hero-info">
                    <h1 className="section-hero-tittle">{hero.tittle}</h1>
                    <p className="section-hero-text">{hero.description}</p>
                    <div className="section-hero-btns">
                        {
                            hero.buttons.map(btn => <button className={`btn btn-${btn.style}`} key={btn.id}>{btn.name}</button>)
                        }
                    </div>
                </div>
                <div className="section-hero-img-wrapper">
                    <img src={require(`../../assets/${hero.img}`)} alt="frying_pen" className="section-hero-img"/>
                </div>
            </div>
        </section>
    )
}

export default Hero;