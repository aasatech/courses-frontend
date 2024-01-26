import React, { useEffect } from 'react'
import { Card } from './components/Card'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const AchievementsSection = () => {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])
    return (
        <section className='grid place-items-center pt-[125px] px-[10px]'>
            <div >
                <div data-aos="fade-up" className='text-[22px] font-extrabold p-10 text-center'>
                    Trusted by the world's best
                    <span className='text-red-500'>&nbsp;
                        Companies Achievements
                    </span>
                </div>
                <div className='grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:place-items-center gap-8' >
                    <div data-aos="flip-up" data-aos-delay="100" className='max-md:w-full'>
                        <Card
                            title='40K+'
                            subtitle='Our Happy Students'
                            img='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/achive-1.png'
                            imgBgColor={'bg-[rgba(153,_146,_255,_0.1)]'} />
                    </div>
                    <div data-aos="flip-up" data-aos-delay="200" className='max-md:w-full'>
                        <Card title='50K+'
                            subtitle='Enrolled Learners'
                            img='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/achive-2.png'
                            imgBgColor={'bg-[rgba(248,_102,_115,_0.1)]'} />
                    </div>
                    <div data-aos="flip-up" data-aos-delay="300" className='max-md:w-full'>
                        <Card title='80+'
                            subtitle='Expert Instructor'
                            img='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/achive-3.png'
                            imgBgColor={'bg-[rgba(255,_164,_27,_0.1)]'} />
                    </div>
                    <div data-aos="flip-up" data-aos-delay="400" className='max-md:w-full'>
                        <Card title='96.55'
                            subtitle='Satisfiction Rate'
                            img='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/achive-4.png'
                            imgBgColor={'bg-[rgba(0,_182,_189,_0.1)]'} />
                    </div>
                </div>
            </div>
        </section>
    )
}
