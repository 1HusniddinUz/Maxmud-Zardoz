import "../../assets/Header.css"
import Navbar from "../ui/Navbar.jsx";
import HeroSection from "../sections/HeroSection.jsx";
const Header = () => {
    return (
        <header>
            <div className="Header_overlay">
                <Navbar />
                <HeroSection />
            </div>
        </header>
    )
}
export default Header;