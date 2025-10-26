import "../../assets/ProductInfoSection.css"
import {useTranslation} from "react-i18next";
const ProductInfoSection = () => {
    const {t} = useTranslation();

    return (
        <div id="ProductInfoSection">
            <div className="container">
                <div className="ProductInfo_box">
                    <i className="fa-solid fa-gem"></i>
                    <p>{t(`triple1`)}</p>
                </div>
                <div className="ProductInfo_box">
                    <i className="fa-solid fa-hands-holding"></i>
                    <p>{t(`triple2`)}</p>
                </div>
                <div className="ProductInfo_box">
                    <i className="fa-solid fa-award"></i>
                    <p>{t(`triple3`)}</p>
                </div>
            </div>
        </div>
    )
}
export default ProductInfoSection