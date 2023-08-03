import React, { useEffect, useState } from 'react';
import './Banner.css';
import { Container, Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Banner.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Parallax } from 'react-parallax';
const Banner = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        fetch('bannerData.json').then(res => res.json()).then(data => setData(data))
    }, [])
    return (
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
        >

            {
                Data.map(bannerData =>
                    <SwiperSlide>
                        <Parallax blur={{ min: -15, max: 15 }} bgImage={bannerData.image} strength={100}>
                            <div className="hero">
                                <div className="hero-content">
                                    <div className='hero-overlay banner text-center text-white'>
                                        <h1 className='fw-bold fs-1 mt-5'>{bannerData.title}</h1>
                                        <p className='fs-3'>{bannerData.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        </Parallax>
                    </SwiperSlide>
                )
            }


        </Swiper>
    );
};

export default Banner;
