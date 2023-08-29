import { useEffect, useRef } from "react";

import { register } from "swiper/element/bundle";
import ProductCard from "../../../product/product-card";
import { fakeData } from "../../../../fakedatas/productFakeData";
import useScreenSize from "../../../utils/use-screen-size";

import styles from '../../../styles/main-screen-modules/product.slider.module.css'
import TonightArrowGroup from "../../../../UI/Components/arrow-group/tonight-arrow-group";

register();

const ProductSlider = () => {
    const screenSize = useScreenSize();
    const swiperRef = useRef(null);
    
    const handleNext = () => {
        swiperRef.current.swiper.slideNext()
    }

    const handlePrev = () => {
        swiperRef.current.swiper.slidePrev()
    }

    useEffect(() => {
        const params = {
            slidesPerView: 4,
            loop: true,
            autoplay: false,
            breakpoints: {
                0: {
                    slidesPerView: 1.5,
                    spaceBetween: 24,
                },
                600: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 32,
                },
            },
            injectStyles: [],
        }

        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
    }, []);

    return <>
        <div className='header-block'>
            <h1 className="block-title"><b>Хиты продаж</b></h1>
            
            {screenSize.width <= 600 ? <></> :
                <TonightArrowGroup
                    prevHandle={handlePrev}
                    nextHandle={handleNext}
                />   
            }
        </div>
        <swiper-container ref={swiperRef} init="false">
            {fakeData.map((item) => (
                <swiper-slide key={item.id}><ProductCard {...item}/></swiper-slide>
            ))}
        </swiper-container>
    </>
}

export default ProductSlider;