import React from 'react';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper/core';
import { AboutUsSlides } from '@images/logoAndBanner/AboutUsSlides'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import CSS from 'csstype';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const SwiperContainer = styled(Swiper)`
  width: 100%;
  height: 100%;
  overflow: visible;

  .swiper-pagination-bullet {
    opacity: 0.5;
    background-color: #ffffff;
    width: 10px;
    height: 10px;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
`
const SlideImage = styled.img`
  width: 100%;
  height: 100%;
	display: block;
	object-fit: cover;
`
const swiperStyle: CSS.Properties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
}

export const AboutPageSwiper: React.FC = () => {

  return (
    <SwiperContainer
      centeredSlides={true}
      autoplay={{
        "delay": 3000,
        "disableOnInteraction": false
      }}
      className="mySwiper"
      loop
      slidesPerView={1}
      speed={800}
      initialSlide={0}
      pagination={{
        clickable: true,
      }}
    >
      {
        AboutUsSlides.map((slide) => (
          <SwiperSlide style={swiperStyle} key={slide} className="swiper-no-swiping">
            <SlideImage src={slide} />
          </SwiperSlide>
        ))
      }
    </SwiperContainer >
  )
}