'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Carousel() {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='h-96 w-screen relative'>
                    <Image
                        src="https://images.unsplash.com/photo-1503965830912-6d7b07921cd1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt='...'
                        fill={true}
                        className='object-cover'
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='h-96 w-screen relative'>
                    <Image
                        src="https://images.unsplash.com/photo-1485970247670-34cd80f5a996?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="..."
                        fill={true}
                        className='object-cover'
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='h-96 w-screen relative'>
                    <Image
                        src="https://images.unsplash.com/photo-1533208705114-4f6b97d68ab1?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="..."
                        fill={true}
                        className='object-cover'
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}