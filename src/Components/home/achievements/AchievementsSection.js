import React, { useEffect } from 'react'
import { Card } from './components/Card'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const AchievementsSection = () => {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    const cardData = [{
        title: '40K+',
        subtitle: 'Our Happy Students',
        image: 'https://eduquest.itech-theme.com/wp-content/uploads/2023/08/achive-1.png',
        imageBackgroundColor: 'bg-[rgba(153,_146,_255,_0.1)]'
    }, {
        title: '50K+',
        subtitle: 'Enrolled Learners',
        image: 'https://eduquest.itech-theme.com/wp-content/uploads/2023/08/achive-2.png',
        imageBackgroundColor: 'bg-[rgba(248,_102,_115,_0.1)]'
    }, {
        title: '80+',
        subtitle: 'Expert Instructor',
        image: 'https://eduquest.itech-theme.com/wp-content/uploads/2023/08/achive-3.png',
        imageBackgroundColor:'bg-[rgba(255,_164,_27,_0.1)]'
    }, {
        title: '96.55',
        subtitle: 'Satisfiction Rate',
        image: 'https://eduquest.itech-theme.com/wp-content/uploads/2023/08/achive-4.png',
        imageBackgroundColor: 'bg-[rgba(0,_182,_189,_0.1)]'
    }]
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
                    {
                        cardData.map((data, index) => (
                            <div key={index}
                                 data-aos="flip-up" data-aos-delay={`${index+1}00`} className='max-md:w-full'>
                                <Card data={data} className={data.imageBackgroundColor}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
