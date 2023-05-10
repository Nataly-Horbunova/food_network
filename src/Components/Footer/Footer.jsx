import "./Footer.scss";

function Footer({footer}) {
    return (

        <footer className="footer">
            <div className="container">
                <div className="footer-contact-and-logo">
                    <a href="#" className="footer-logo">
                        <img src={require(`../../assets/${footer.logo}`)} alt="logo" data-aos="flip-left" data-aos-duration="1500" data-aos-delay="500"/>
                    </a>
                    <a href={`mailto:${footer.email}`} className="footer-email">{`E - mail: ${footer.email}`}</a>
                    <a href={`tel:${footer.tel}`} className="footer-phone">{`Phone: ${footer.tel}`}</a>
                    <ul className="footer-socials-list">
                        {
                            footer.socials.map(social => {
                                return (
                                    <li className="footer-socials-item" key={social.id}>
                                        <a href={social.link} className="footer-socials-link">
                                            <img src={require(`../../assets/${social.img}`)} alt={social.alt}
                                                 className="footer-socials-img" data-aos="flip-left" data-aos-duration="1500" data-aos-delay="1000"/>
                                        </a>
                                    </li>
                                );
                            })
                        }

                    </ul>
                </div>
                <nav className="footer-nav">
                    <ul className="footer-nav-sections-list">
                        {
                            footer.sections.map(section => {
                                return (
                                    <li className="footer-nav-section" key={section.id}>
                                        <h4 className="footer-nav-tittle">{section.tittle}</h4>
                                        <ul className="footer-nav-list">
                                            {
                                                section.list.map(item => {
                                                    return <li className="footer-nav-item" key={item.id}><a href="#">{item.name}</a></li>
                                                })
                                            }
                                        </ul>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;