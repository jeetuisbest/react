
import React, { useState } from 'react';
import Compose from './Compose';
import { SwiperSlide } from "swiper/react";

function SwiperComponent(props) {
    return (<>
        <SwiperSlide><img src={props.img}></img></SwiperSlide>
    </>)
}

export default SwiperComponent