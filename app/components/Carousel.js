"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import styles from './Carousel.module.css';

const Carousel = ({ slides }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className={styles.carouselContainer}>
            <Slider {...settings} style={{ height: "100%" }}>
                {slides.map((slide, index) => (
                    <div key={index} className={styles.slide}>
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {slide.title && <p className={styles.title}>{slide.title}</p>}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
