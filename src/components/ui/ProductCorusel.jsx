import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import img1 from "../../assets/media/1.png"
import img2 from "../../assets/media/2.png"
import img3 from "../../assets/media/3.png"
import img4 from "../../assets/media/4.png"
import img5 from "../../assets/media/5.png"
import img6 from "../../assets/media/6.png"
import img7 from "../../assets/media/7.png"
// import img8 from "../../assets/media/8.png"
// import {t} from "i18next";

import "../../assets/ProductCorusel.css"

const products = [
    { id: 1, name: "Ayollar zar сhoponi", img: img1, price: 75, type: "Clothes" },
    { id: 2, name: "Erkaklar zar choponi", img: img2, price: 12, type: "Bags" },
    { id: 3, name: "Erkaklar zar choponi", img: img3, price: 17, type: "Bags" },
    { id: 4, name: "Ayollar zar сhoponi", img: img4, price: 65, type: "Clothes" },
    { id: 5, name: "Erkaklar zar choponi", img: img5, price: 80, type: "Clothes" },
    { id: 6, name: "Erkaklar zar сhoponi", img: img6, price: 65, type: "Bags" },
    { id: 7, name: "Ayollar zar сhoponi", img: img7, price: 65, type: "Bags" },
    // { id: 8, name: "Ayollar ko'ylagi", img: img8, price: 37, type: "Clothes" },
];

const ProductCarousel = () => {
    return (
        <div id="Products">
            <Swiper
                modules={[Navigation, EffectCoverflow]}
                spaceBetween={150}
                centeredSlides={true} // Markazga olish
                navigation // Next va Prev tugmalari
                effect="coverflow" // Coverflow animatsiyasi
                coverflowEffect={{
                    rotate: 10,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                }}
                loop
                breakpoints={{
                    0: {            // Mobil
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    600: {          // Planshet
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {         // Desktop
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
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
