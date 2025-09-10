import "../../assets/ContactForm.css"
const ContactForm = () => {
    return (
        <div id="ContactForm">
            <div className="left">
                <h3>MAXMUD ZARDO'Z</h3>
                <div className="contact_form_social_links">
                    <i className="fa-brands fa-whatsapp"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-telegram"></i>
                    <i className="fa-brands fa-facebook"></i>
                </div>
            </div>
            <div className="right">
                <div className="Location">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6137.728623120743!2d64.549691!3d39.720232!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQzJzEyLjgiTiA2NMKwMzInNTguOSJF!5e0!3m2!1sru!2s!4v1756298820606!5m2!1sru!2s"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactForm