import ProductInfoSection from "../sections/ProductInfo.jsx";
import "../../assets/Content.css"
import ProductCorusel from "../ui/ProductCorusel.jsx";
const Content = () => {
    return (
        <div id="Content">
            <ProductInfoSection />
            <ProductCorusel />
        </div>
    )
}
export default Content