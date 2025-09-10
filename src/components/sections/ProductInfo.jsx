import "../../assets/ProductInfoSection.css"
const ProductInfoSection = () => {
    return (
        <div id="ProductInfoSection">
            <div className="container">
                <div className="ProductInfo_box">
                    <i className="fa-solid fa-gem"></i>
                    <p>Premium sifat</p>
                </div>
                <div className="ProductInfo_box">
                    <i className="fa-solid fa-hands-holding"></i>
                    <p>100% QO'L MEHNATI</p>
                </div>
                <div className="ProductInfo_box">
                    <i className="fa-solid fa-award"></i>
                    <p>Uzoq yillarga chidamli</p>
                </div>
            </div>
        </div>
    )
}
export default ProductInfoSection