import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "../../assets/ProductCorusel.css";
import { useTranslation } from "react-i18next";

import img1 from "../../assets/media/1.png";
import img2 from "../../assets/media/2.png";
import img3 from "../../assets/media/3.png";
import img4 from "../../assets/media/4.png";
import img5 from "../../assets/media/5.png";
import img6 from "../../assets/media/6.png";
import img7 from "../../assets/media/7.png";

const ProductCarousel = () => {
    const { t } = useTranslation();

    const products = [
        { id: 1, name: t("product1"), img: img1, price: 95, type: "Clothes" },
        { id: 2, name: t("product2"), img: img2, price: 90, type: "Bags" },
        { id: 3, name: t("product3"), img: img3, price: 97, type: "Bags" },
        { id: 4, name: t("product4"), img: img4, price: 92, type: "Clothes" },
        { id: 5, name: t("product5"), img: img5, price: 95, type: "Clothes" },
        { id: 6, name: t("product6"), img: img6, price: 100, type: "Bags" },
        { id: 7, name: t("product7"), img: img7, price: 97, type: "Bags" },
    ];

    return (
        <div id="Products">
            <Swiper
                modules={[Navigation, EffectCoverflow]}
                spaceBetween={150}
                centeredSlides
                navigation
                effect="coverflow"
                coverflowEffect={{
                    rotate: 10,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                }}
                loop
                breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 10 },
                    600: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="product-card">
                            <img src={product.img} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductCarousel;
