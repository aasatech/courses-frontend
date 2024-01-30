import React, { useEffect } from 'react'
import { Card } from './components/Card'

export const SectionInstructor = () => {
    return (
        <section className='pt-[300px] pb-[130px] grid place-items-center bg-[#FFEAEE] px-[10px]'>
            <div className='max-w-[1296px] grid max-md:w-full'>
                <div data-aos="fade-up" data-aos-delay="200" >
                    <h1 className='flex font-extrabold text-[18px] text-red-500'>
                        <img src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/dot.png' />
                        Instructor's
                    </h1>
                    <h2 className='text-[48px] max-2xl:text-[30px] font-extrabold leading-[1.5]'>
                        Our Expert <span className='text-[#ff3158]'>Instructors</span>
                    </h2>
                </div>
                <div className='pt-[40px] grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1'>
                    <div data-aos="fade-up" data-aos-delay="100">
                        <Card
                            name={'Jenny Wilson'}
                            position={'UI Designer'}
                            img={'https://eduquest.itech-theme.com/wp-content/uploads/2023/08/teacher-1.png'} 
                            facebook={'#'} twitter={'#'} linkedIn={'#'}/>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200">
                        <Card
                            name={'Jenny Wilson'}
                            position={'UI Designer'}
                            img={'https://eduquest.itech-theme.com/wp-content/uploads/2023/08/teacher-2.png'} 
                            facebook={'#'} twitter={'#'} linkedIn={'#'}/>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <Card
                            name={'Jenny Wilson'}
                            position={'UI Designer'}
                            img={'https://eduquest.itech-theme.com/wp-content/uploads/2023/08/teacher-3.png'} 
                            facebook={'#'} twitter={'#'} linkedIn={'#'}/>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400">
                        <Card
                            name={'Jenny Wilson'}
                            position={'UI Designer'}
                            img={'https://eduquest.itech-theme.com/wp-content/uploads/2023/08/teacher-4.png'} 
                            facebook={'#'} twitter={'#'} linkedIn={'#'}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
