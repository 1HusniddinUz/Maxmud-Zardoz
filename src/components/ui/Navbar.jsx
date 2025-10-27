import { useState } from "react";
import logo from "../../../public/logo.png";
import "../../assets/Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { t, i18n } = useTranslation();

    return (
        <div id="Navbar">
            <div className="container">
                {/* Burger */}
                <div className="burger_menu">
                    <button className="burger" onClick={() => setIsOpen(true)}>☰</button>
                </div>

                {/* Logo */}
                <div className="logo_box">
                    <img src={logo} alt="Logo" />
                </div>

                {/* Desktop navigation */}
                <div className="desktop_nav">
                    <ul className="nav_links">
                        <a href="/"><li>{t("headersec")}</li></a>
                        <a href="#Products"><li>{t("products")}</li></a>

                        {/* Dropdown */}
                        <li
                            className="dropdown"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <span className="dropdown_title">
                                Marketplaces <i className="fa-solid fa-chevron-down"></i>
                            </span>

                            {isDropdownOpen && (
                                <ul className="dropdown_menu">
                                    <li>
                                        <a href="https://uzum.uz/product/2044067" target="_blank" rel="noopener noreferrer">
                                            UZUM Market
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://uz.ozon.com/product/halat-2980201097/?oos_search=false" target="_blank" rel="noopener noreferrer">
                                            OZON
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://market.yandex.uz/card/muzhskoye-zolotoshityy-chapana-verkh--barkhat-velyur-zhakkard-ili-shelk-podkladka--khlopok-ili-khlopkovo-shelkovaya-smes/4708867230?businessId=216456918" target="_blank" rel="noopener noreferrer">
                                            Yandex Market
                                        </a>
                                    </li>
                                    <li><a href="https://www.wildberries.ru/catalog/583507722/detail.aspx?targetUrl=GP" target="_blank">Wildberries</a></li>

                                </ul>
                            )}
                        </li>

                        <a href="#Footer"><li>{t("contact")}</li></a>
                    </ul>

                    <div className="lang_provider">
                        <select
                            onChange={(e) => i18n.changeLanguage(e.target.value)}
                            defaultValue="uz"
                        >
                            <option value="uz">🇺🇿 O'zbek</option>
                            <option value="ru">🇷🇺 Русский</option>
                            <option value="en">🇬🇧 English</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Mobile nav */}
            <div className={`navigation_menu ${isOpen ? "open" : ""}`}>
                <button className="close_btn" onClick={() => setIsOpen(false)}>✕</button>

                <ul>
                    <a href="/"><li>{t("headersec")}</li></a>
                    <a href="#Products"><li>{t("products")}</li></a>

                    {/* Mobile dropdown */}
                    <details className="mobile_dropdown">
                        <summary>Marketplaces</summary>
                        <ul>
                            <li><a href="https://uzum.uz/product/2044067" target="_blank">UZUM Market</a></li>
                            <li><a href="https://uz.ozon.com/product/halat-2980201097/?oos_search=false" target="_blank">OZON</a></li>
                            <li><a href="https://market.yandex.uz/card/muzhskoye-zolotoshityy-chapana-verkh--barkhat-velyur-zhakkard-ili-shelk-podkladka--khlopok-ili-khlopkovo-shelkovaya-smes/4708867230?businessId=216456918" target="_blank">Yandex Market</a></li>
                            <li><a href="https://www.wildberries.ru/catalog/583507722/detail.aspx?targetUrl=GP" target="_blank">Wildberries</a></li>
                        </ul>
                    </details>

                    <a href="#Footer"><li>{t("contact")}</li></a>
                </ul>

                <div className="lang_provider_mobile">
                    <select
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                        defaultValue="uz"
                    >
                        <option value="uz">🇺🇿 O'zbek</option>
                        <option value="ru">🇷🇺 Русский</option>
                        <option value="en">🇬🇧 English</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
