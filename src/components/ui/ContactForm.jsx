import "../../assets/ContactForm.css"
const ContactForm = () => {
    return (
        <div id="ContactForm">
            <div className="left">
                <h3>MAXMUD ZARDO'Z</h3>
                <div className="contact_form_social_links">
                    <a href="https://instagram.com/maxmud_069" target="_blank" rel="noopener noopener"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://t.me/+998907182803" target="_blank" rel="noopener noopener"><i className="fa-brands fa-telegram"></i></a>
                    {/*<a href="https://facebook.com/" target="_blank" rel="noopener noopener"><i className="fa-brands fa-facebook"></i></a>*/}
                </div>
                <a href="tel:+998907182803">+998(90) 718-28-03</a>

            </div>
            <div className="right">
                <div className="Location">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6133.382235848737!2d64.385675!3d39.769043!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ2JzA4LjYiTiA2NMKwMjMnMDguNCJF!5e0!3m2!1sru!2s!4v1761388126791!5m2!1sru!2s"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactForm