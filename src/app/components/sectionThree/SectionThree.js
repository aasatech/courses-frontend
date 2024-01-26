import React, { useEffect } from 'react'
import { Card } from './components/Card'
import AOS from "aos"
import "aos/dist/aos.css"

export const SectionThree = () => {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])
    return (
        <section className='grid place-items-center pt-[120px] px-[10px]'>
            <div className='grid grid-cols-[1fr_652.667px] max-lg:grid-cols-1 max-lg:place-items-center max-lg:max-w-[670px] gap-16 px-3 max-lg:px-0 relative' >
                <div data-aos="fade-right" data-aos-delay="300" className='relative pl-[60px]'>
                    <div >
                        <img
                            className='absolute top-[-40px] left-0 z-[-1]'
                            src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/shape.png' />
                        <img
                            src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/about.jpg'
                            className='rounded-xl z-[2]'
                        />
                    </div>
                    <div className='absolute bottom-16 left-3 bg-white rounded-xl shadow-xl'>
                        <Card
                            title='Success Story'
                            subtitle='Student Success History'
                            img='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/about-3.png'
                        />
                    </div>
                </div>
                <div className='pt-[50px]'>
                    <h1 data-aos="fade-up" data-aos-delay="300" className='flex font-extrabold text-[18px] text-red-500'>
                        <img src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/dot.png' />
                        Welcome to Education
                    </h1>
                    <h2 data-aos="fade-up" data-aos-delay="400" className='text-[48px] max-2xl:text-[30px] font-extrabold leading-[1.5]'>
                        New Experience Learn <br />
                        to the <span className='text-red-500'>Next Level</span><br />
                        Your Career
                    </h2>
                    <div data-aos="fade-up" data-aos-delay="500" className='py-3 text-[#4A5355] max-2xl:text-[15px] '>
                        <p >
                            Architect client-centered total linkage for intuitive benefits. Dynamically restore convergence before real-time partnerships total linkage for intuitive benefits restore convergence before real-time.
                        </p>
                    </div>
                    <ul data-aos="fade-up" data-aos-delay="600" className='text-[#4A5355] text-[18px] max-2xl:text-[16px] font-medium pb-[30px]'>
                        <li className="pl-5 relative">
                            <span className='bg-red-500 absolute left-0 top-2 w-3 h-3 rounded-full'></span>
                            The foundation for a lifetime of success</li>
                        <li className='pl-5 relative '>
                            <span className='bg-red-500 absolute left-0 top-2 w-3 h-3 rounded-full'></span>
                            Find the right instructor for you</li>
                        <li className='pl-5 relative '>
                            <span className='bg-red-500 absolute left-0 top-2 w-3 h-3 rounded-full'></span>
                            Popular topics to learn now</li>
                    </ul>
                    <div className='flex gap-10 items-center max-md:flex-col max-md:items-start'>
                        <div data-aos="fade-up" data-aos-delay="700" className='flex items-center gap-5 w-[310px]'>
                            <img
                                className='w-[70px] h-[70px] rounded-full object-contain'
                                src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/about-2.png'
                            />
                            <div>
                                <h1 className='text-[22px] max-2xl:text-[18px] font-extrabold'>
                                    Mark Andersson
                                </h1>
                                <h2 className='text-[16px] max-2xl:text-[14px] text-[#4A5355]'>
                                    Project Manager
                                </h2>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="800">
                            <button className='bg-red-500 duration-300 ease-in-out rounded-lg py-[15px] px-[25px] text-white flex items-center justify-between border-[0.8px] border-red-500 hover:bg-white hover:text-black'>
                                Explore More
                                <svg className='stroke-current' width={30} height={30} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 7L18.5 12.5L13 18M18.5 12.5H6" strokeWidth="1.2"></path> </g></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
