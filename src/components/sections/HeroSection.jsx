import "../../assets/HeroSection.css"
import background_image from "../../assets/media/background_image.png"

const HeroSection = () =>{
    return (
        <div id="HeroSection">
            <img src={background_image} alt="MAXMUD-ZARDOZ" loading="lazy"/>
        </div>
    )
}
export default HeroSection;