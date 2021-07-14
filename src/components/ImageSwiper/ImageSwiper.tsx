import React from 'react';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay, Pagination, Navigation
} from 'swiper/core';
import * as SlideList from '@images/logoAndBanner'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import CSS from 'csstype';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const SwiperContainer = styled(Swiper)`
  width: 100%;
  height: 100%;
  overflow: visible;
`
const SlideImage = styled.img<{ isActive?: boolean }>`
  width: auto;
  height: 100%;
  ${({ isActive }) => !isActive && `
    opacity: 0.7;
    z-index: -1;
  `}
`
const swiperStyle: CSS.Properties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'fit-content'
}

export const ImageSwiper: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  return (
    <SwiperContainer
      centeredSlides={true}
      autoplay={{
        "delay": 3800,
        "disableOnInteraction": false
      }}
      className="mySwiper"
      loop
      slidesPerView='auto'
      slideToClickedSlide
      onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
      speed={1100}
      initialSlide={0}
    >
      {
        Object.values(SlideList).map((slide, idx) => (
          <SwiperSlide style={swiperStyle} key={slide}>
            <SlideImage src={slide} isActive={idx === activeIndex} />
          </SwiperSlide>
        ))
      }
    </SwiperContainer >
  )
}