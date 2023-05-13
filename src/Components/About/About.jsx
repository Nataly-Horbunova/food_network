import './About.scss';
function About({about}) {
    return(
        <section className="section-about" >
            <div className="container">
                <div className="section-about-img-wrapper" data-aos="fade-right"  data-aos-delay="500">
                    <img src={require(`../../assets/${about.img}`)} alt="woman_eating"
                         className="section-about-img"/>
                </div>
                <div className="section-about-description" data-aos="fade-left"  data-aos-delay="500">
                    <h2 className="section-tittle">{about.tittle}</h2>
                    <h3 className="section-heading ">{about.heading}</h3>
                    <p className="section-about-text">{about.description}</p>
                    <button className={`btn btn-${about.button.style}`}>{about.button.name}</button>
                </div>
            </div>
        </section>
    )
}

export default About;