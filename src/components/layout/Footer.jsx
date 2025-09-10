import "../../assets/Footer.css"
import ContactForm from "../ui/ContactForm.jsx";
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <ContactForm />
            </div>
            <div className="Footer_copy">
                <div className="Footer_cont">
                    <h3>2025 © Barcha huquqlar himoyalangan.</h3>
                    <h3><a href="https://t.me/buxoro_tadbirkorlar_klubi"  target="_blank" rel="noopener norefeffer">Directed by : BUXORO TADBIRKORLAR KLUBI</a></h3>
                </div>
            </div>

        </footer>
    )
}
export default Footer
