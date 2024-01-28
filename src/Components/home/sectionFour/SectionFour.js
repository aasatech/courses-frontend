import React, { useEffect } from 'react'
import Link from 'next/link';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { List } from './components/List';

export const SectionFour = () => {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])
    return (
        <section className='py-[60px] px-[10px] grid place-items-center'>
            <div className='max-w-[1320px] max-lg:place-items-center max-lg:max-w-[670px]'>
                <div className='grid grid-cols-2 max-md:grid-cols-1 max-md:gap-5 gap-[227.633px] '>
                    <div data-aos="fade-right" data-aos-delay="300">
                        <h1 className='flex font-extrabold text-[18px] text-red-500 whitespace-nowrap'>
                            <img src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/dot.png' />
                            Welcome to Education
                        </h1>
                        <h2 className='text-[48px] max-2xl:text-[30px] max-md:text-[20px] font-extrabold leading-[1.5]'>
                            Expand Your  <br className='max-md: hidden' />
                            Knowledge & Achieve <br className='max-md: hidden' />
                            Your <span className='text-red-500'>Next Goal</span>
                        </h2>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="100">
                        <h1 className='flex items-center gap-4 font-extrabold text-[18px] text-red-500'>
                            <span className='w-[50px] h-[2px] bg-red-500 inline-block'></span>
                            Featured Category
                        </h1>
                        <p className='py-3 text-[#4A5355]'>
                            Architect client-centered total linkage for intuitive benefits. Dynamically restore convergence before real-time partnerships Dynamically restore convergence before real-time.
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-[1fr_404px] max-2xl:grid-cols-[1fr_370px] max-lg:grid-cols-1 gap-4 mt-[30px] relative'>
                    <div>
                        <img data-aos="fade-right" data-aos-delay="400"
                            className='rounded-xl'
                            src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/service-1.jpg' />
                        <div
                            data-aos="flip-up" data-aos-delay="500"
                            className='max-w-[723px] py-[35px] px-[30px] bg-white shadow-lg relative bottom-16 left-1'>
                            <h1 className='text-[#002935] text-[36px] font-extrabold mb-5'>
                                Digital Marketing</h1>
                            <p className='mb-5 text-[#4A5355] text-[18px] font-normal'>
                                Architect client-centered total linkage for intuitive benefits. Dynamically restore convergence before convergence before real-time .
                            </p>
                            <button>Explore More</button>
                        </div>
                    </div>
                    
                    <div data-aos="flip-right" data-aos-delay="500" className=' pt-[40px] z-0 relative h-fit bg-[#002935] text-white rounded-xl max-lg:bottom-10'>
                        <div className='text-[28px] font-extrabold mb-[20px] px-[20px]'>
                            <span className='w-5 h-5 rounded-full inline-block bg-red-500 mr-[15px]'></span>
                            Explore The Future
                        </div>
                        <ul className='text-[18px] font-extrabold divide-y-[1px] rounded-xl pb-[20px] divide-[#1a434f] bg-[#002935] px-[20px]'>
                            <List href='#' title='Development'/>
                            <List href='#' title='Digital Marketing'/>
                            <List href='#' title='Financial'/>
                            <List href='#' title='Business Consulting'/>
                            <List href='#' title='Graphic design'/>
                            <List href='#' title='Development'/>
                        </ul>
                        <img
                            className='bottom-[-50px] -z-40 absolute -right-10'
                            src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/shape.png' />
                    
                    </div>
                </div>
            </div>
        </section>
    )
}
