import React, { useRef, useEffect, useState } from 'react';
import bacground from "../../../image/banarslide3.PNG"
import titalepic from "../../../image/titlelogo.png"
import Costomarreview from "../Costomerreview/Costomarreview"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Costmarreview.css";

// import required modules
import { Pagination } from "swiper";

const Costomarreviews = () => {
    const [customerreview, setCustomerreview] = useState([])
    useEffect(() => {
        fetch('/Costomarreview.json')
            .then(res => res.json())
            .then(data => setCustomerreview(data))
    })
    return (
        <div className='mt-32'>
            <div style={{
                background: `url(${bacground})`,
                bacgroundSize: "cover",
                backgroundAttachment: 'fixed'
            }} className='w-full h-auto'>
                <div className=' w-full h-auto bg-white/70 lg:pb-20'>
                    <div>
                        <h1 className='text-center font-bold text-2xl lg:text-4xl Alkatra pt-14'>Customer <span className='text-red-600'>Reviews</span></h1>
                        <img className='mx-auto' src={titalepic} alt="pic" />
                    </div>
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <div>
                            {
                                customerreview.map(customerreview => <SwiperSlide>
                                    <Costomarreview
                                        key={customerreview._id}
                                        customerreview={customerreview}
                                    ></Costomarreview> </SwiperSlide>
                                )
                            }
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Costomarreviews;