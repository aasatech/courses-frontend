import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

export const SectionSix = () => {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])
    return (
        <section className='grid place-items-center gap-6 px-[10px]'>
            <div className='grid grid-cols-[1fr_1fr] max-w-[1320px] max-xl:max-w-[1140px] max-lg:grid-cols-1'>
                <div className='pt-20'>
                    <h1 data-aos="fade-up" data-aos-delay="200" className='flex font-extrabold text-[18px] text-red-500 whitespace-nowrap'>
                        <img src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/dot.png' />
                        Why Choose Us
                    </h1>
                    <h2 data-aos="fade-up" data-aos-delay="300" 
                        className='text-[48px] max-2xl:text-[30px] max-md:text-[20px] font-extrabold leading-[1.5]'>
                        Learn from today  <br className='max-md:hidden' />
                        Leading <span className='text-red-500'>Universities &</span> <br className='max-md:hidden' />
                        Companies
                    </h2>
                    <p  data-aos="fade-up" data-aos-delay="400"
                        className='pt-[25px] pb-[40px] text-[#4A5355]'>
                        Architect client-centered total linkage for intuitive benefits. D restore convergence before real-time.
                    </p>
                    <div className='max-md:flex max-md:flex-col max-md:items-center'>
                        {/* card */}
                        <div data-aos="fade-up" data-aos-delay="100" 
                            className='px-[20px] py-[25px] mb-[20px] flex items-center gap-5 rounded-xl shadow-lg max-w-[480px]'>
                            <img
                                className='w-[65px] h-[65px]'
                                src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/certificate.png' />
                            <div>
                                <h1 className='text-[22px] pb-[10px] font-extrabold'>
                                    Highly Experienced</h1>
                                <p className='text-[#4A5355]'>
                                    Architect client-centered total linkage for intuitive benefits before real-time.
                                </p>
                            </div>
                        </div>
                        {/* card */}
                        <div data-aos="fade-up" data-aos-delay="200" 
                            className='px-[20px] py-[25px] mb-[20px] md:left-[70px] relative flex items-center gap-5 rounded-xl shadow-lg max-w-[480px]'>
                            <img
                                className='w-[65px] h-[65px]'
                                src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/chronometer.png' />
                            <div>
                                <h1 className='text-[22px] pb-[10px] font-extrabold'>
                                    Highly Experienced</h1>
                                <p className='text-[#4A5355]'>
                                    Architect client-centered total linkage for intuitive benefits before real-time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className='flex justify-end relative'>
                    <img data-aos="fade-left" data-aos-delay="300"
                        className='object-contain' src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/why.png' />
                    <div data-aos="flip-up" data-aos-delay="400"  
                        className='absolute top-[45%] left-[70px] py-[24px] px-[18px] max-w-[170px] max-h-[170px] shadow-lg rounded-xl bg-white flex items-center flex-col'>
                        <span className='w-[76px] h-[76px] bg-[#002935] rounded-full text-[28px] font-bold text-white flex items-center justify-center'>
                            80+
                        </span>
                        <p className='text-[20px] font-semibold text-[#4A5355]'>Expert Tutors</p>
                    </div>

                    <div data-aos="flip-up" data-aos-delay="500" 
                        className='absolute bottom-0 right-10 py-[24px] px-[18px] max-w-[240px] max-h-[280px] shadow-lg rounded-xl bg-white flex items-center flex-col'>
                        <span className='w-[64px] h-[64px] bg-[#ff3158] rounded-full'>
                        </span>
                        <p className='text-[16px] font-medium text-[#4A5355]'>Students Enrolls</p>
                        <h1 className='text-[#002935] text-[32px] font-bold pb-[15px] '>
                            15K+
                        </h1>
                        <img src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/students.png' />
                    </div>
                </div>
            </div>
            <div className='inline-block rounded-2xl bg-[url("https://eduquest.itech-theme.com/wp-content/uploads/2023/08/class-bg.png")]
                    md:h-[373px] 2xl:w-[1320px] w-full bg-no-repeat bg-cover p-[70px] relative bottom-[-186px] text-center'>
                <h1 data-aos="fade-up" data-aos-delay="200"
                     className='font-extrabold text-[36px] text-white leading-[1.3] pb-[20px]'>
                    Online Best Coaching <span className='text-[#FF3158]'>Lessons </span> <br />
                    For Remote Learning
                </h1>
                <p  data-aos="fade-up" data-aos-delay="300"
                     className='text-white text-[16px] pb-[40px]'>
                    Architect client-centered total linkage for intuitive benefits dynamically restore.
                </p>
                <div className='flex justify-center'>
                    <button data-aos="flip-right" data-aos-delay="400" 
                        className='bg-red-500 duration-300 ease-in-out rounded-lg py-[15px] px-[25px] text-white flex items-center justify-between border-[0.8px] border-red-500 hover:bg-transparent'>
                        Join Today
                        <svg className='stroke-current' width={30} height={30} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 7L18.5 12.5L13 18M18.5 12.5H6" strokeWidth="1.2"></path> </g></svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
