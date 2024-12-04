import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Project = () => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <Swiper
                className='h-[32rem] w-full'
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center'>
                        hello
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    hello
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Project