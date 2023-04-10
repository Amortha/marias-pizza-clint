import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banarslide.css";
import "../../../Pages/fontfamily.css"
// import required modules
import { Pagination, Navigation } from "swiper";
import banarslide1 from '../../../image/banarslide1.PNG'
import banarslide2 from '../../../image/banarslide2.PNG'
import banarslide3 from '../../../image/banarslide3.PNG'
import banarslide4 from '../../../image/banarslide4.PNG'

const Banarslide = () => {
    return (
        <>
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"

            >
                <SwiperSlide>
                    <div style={{
                        background: `url(${banarslide1})`,
                        backgroundSize: 'cover'
                    }} className="h-auto lg:min-h-screen min-w-full">
                        <div className="grid  place-content-end text-left">
                            <div className="Alkatra mt-32 ml-4 lg:mr-36">
                                <h1 className="font-semibold">Chicken Cheesy Bytes/Limited time Only</h1>
                                <h1 className="text-red-700 p-2 text-3xl lg:text-5xl font-bold">MORE CHEESE,</h1>
                                <h1 className="font-bold text-black text-3xl lg:text-5xl">MORE WAY TO EAT</h1>
                                <h1 className="font-semibold pt-4 text-xl lg:text-3xl">BUY ONE REGULAR &</h1>
                                <h1 className="lg:text-5xl text-3xl text-red-700 p-2 mb-6">GET ONE FREE</h1>
                                <button className="bg-yellow-400 w-32 h-12  mb-4 rounded-full border border-black hover:bg-red-700">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{
                        background: `url(${banarslide2})`,
                        backgroundSize: 'cover'
                    }} className="h-auto min-w-full lg:min-h-screen">

                        <div className="">
                            <div className="pt-32 ml-4 lg:ml-24 text-left Alkatra">
                                <h1 className="font-semibold text-white">Get Free Garlic Bread</h1>
                                <h1 className="text-red-700 p-2 text-3xl lg:text-5xl font-bold">DOUBLE THE CHEESE,</h1>
                                <h1 className="font-bold text-yellow-400 text-3xl lg:text-5xl">DOUBLE THE FUN</h1>
                                <h1 className="font-semibold pt-4 text-white text-xl lg:text-3xl">BUY ONE REGULAR &</h1>
                                <h1 className="text-3xl lg:text-5xl text-red-700 p-2 mb-6">GET ONE FREE</h1>
                                <button className=" mb-4 w-32 h-12  rounded-full border border-yellow-500 text-white hover:bg-yellow-500 hover:text-black">Shop Now</button>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{
                        background: `url(${banarslide3})`,
                        backgroundSize: 'cover'
                    }} className="h-auto min-w-full lg:min-h-screen">
                        <div className="">
                            <div className="pt-32 ml-4 lg:ml-24 text-left Alkatra">
                                <h1 className="font-semibold ">Limited Time Only</h1>
                                <h1 className="text-red-700 p-2 text-3xl lg:text-5xl font-bold">EVERY DAY VALUE OFFER !</h1>
                                <h1 className="font-bold text-black  text-3xl lg:text-5xl">MORE WAY TO EAT .,</h1>
                                <h1 className="font-semibold pt-4 text-black text-xl lg:text-3xl">GET ANY TWO MEDIUM PLZZAS WORTH</h1>
                                <h1 className="text-3xl lg:text-5xl text-red-700 p-2 mb-6">RS. 249 EACH</h1>
                                <button className="mb-4 w-32 h-12  rounded-full border border-black text-black hover:bg-black hover:text-white">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{
                        background: `url(${banarslide4})`,
                        backgroundSize: 'cover',

                    }} className="h-auto min-w-full lg:min-h-screen">
                        <div className="">
                            <div className="pt-32  ml-4 lg:ml-24 text-left Alkatra">
                                <h1 className="font-semibold ">Chicken Cheesy Bytes/limited Time Only</h1>
                                <h1 className="text-red-700 p-2 text-3xl lg:text-5xl font-bold">EVERY DAY VALUE  OFFER !</h1>
                                <h1 className="font-bold text-black  text-3xl lg:text-5xl">MORE WAY TO EAT .,</h1>
                                <h1 className="font-semibold pt-4 text-black text-xl lg:text-3xl">BUY ONE  REGULAR &</h1>
                                <h1 className="text-3xl lg:text-5xl text-red-700 p-2 mb-6">GET ONE FREE</h1>
                                <button className="mb-4 w-32 h-12  rounded-full border border-black text-black hover:bg-black hover:text-white">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banarslide;