import './Contact.scss';

function Contact({contact}) {
    return (
        <section className="section-contacts" id={contact.id}>
            <div className="container">
                <iframe className='contact-map'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24354.803180221617!2d18.034730164301788!3d40.26796592365616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1344274b633b5e53%3A0xc70ec625ec9e1d8b!2sFood%20imperiale!5e0!3m2!1sen!2sua!4v1683582926985!5m2!1sen!2sua"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        data-aos="zoom-in"></iframe>
                <form className="contact-form">
                    <h2 className="section-tittle" data-aos="fade-down">{contact.tittle}</h2>
                    <h3 className="section-heading" data-aos="fade-down">{contact.heading}</h3>
                    <div className="input-wrapper">
                        <input type="email" className="contact-input-email" name="email"
                               placeholder={contact.placeholder} required/>
                        <button type="submit" className={`btn btn-${contact.button.style}`}>
                            {contact.button.name}
                        </button>
                    </div>
                </form>

            </div>

        </section>
    )
}

export default Contact;