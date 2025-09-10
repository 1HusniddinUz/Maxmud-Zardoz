import { useState } from "react";
import logo from "../../../public/logo.png";
import "../../assets/Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div id="Navbar">
            <div className="container">
                {/* Burger tugma */}
                <div className="burger_menu">
                    <button className="burger" onClick={() => setIsOpen(true)}>
                        ☰
                    </button>
                </div>

                {/* Logo */}
                <div className="logo_box">
                    <img src={logo} alt=""/>
                </div>

                {/* Social links - faqat desktop */}
                <div className="social_links">
                    <i className="fa-brands fa-whatsapp"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-telegram"></i>
                    <i className="fa-brands fa-facebook"></i>
                </div>
            </div>

            {/* Slide menyu */}
            <div className={`navigation_menu ${isOpen ? "open" : ""}`}>
                {/* Yopish tugmasi */}
                <button className="close_btn" onClick={() => setIsOpen(false)}>
                    ✕
                </button>

                {/* Menyu itemlari */}
                <ul>
                    <li>Products</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>

                {/* Social links - burger ichida */}
                <div className="social_links">
                    <i className="fa-brands fa-whatsapp"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-telegram"></i>
                    <i className="fa-brands fa-facebook"></i>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
