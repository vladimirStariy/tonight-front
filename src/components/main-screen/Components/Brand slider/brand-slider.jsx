import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

import BrandCard from "./brand-card";
import styles from '../../../styles/main-screen-modules/brand.slider.module.css'
import TonightArrowGroup from "../../../../UI/Components/arrow-group/tonight-arrow-group";
import useScreenSize from "../../../utils/use-screen-size";

register();

const BrandSlider = () => {
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
            on: {
                init() {
                    console.log('hello');
                }
            }
        }

        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
    }, []);

    return <>
            <div className='header-block'>
                <h1 className='block-title'><b>Бренды</b></h1>
                
                {screenSize.width <= 600 ? <></> :
                    <TonightArrowGroup
                        prevHandle={handlePrev}
                        nextHandle={handleNext}
                    />   
                }
            </div>
            <swiper-container ref={swiperRef} init="false">
                <swiper-slide><BrandCard /></swiper-slide>
                <swiper-slide><BrandCard /></swiper-slide>
                <swiper-slide><BrandCard /></swiper-slide>
                <swiper-slide><BrandCard /></swiper-slide>
                <swiper-slide><BrandCard /></swiper-slide>
                <swiper-slide><BrandCard /></swiper-slide>
                <swiper-slide><BrandCard /></swiper-slide>
                <swiper-slide><BrandCard /></swiper-slide>
                <swiper-slide><BrandCard /></swiper-slide>
            </swiper-container>
    </>
}

export default BrandSlider;