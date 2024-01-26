import React, { useEffect } from 'react'
import { Card } from './components/Card'
import { SubCard } from './components/SubCard'
import AOS from "aos"
import "aos/dist/aos.css"


export const SectionFinal = () => {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])
    return (
        <section className='grid place-items-center'>
            <div className='max-w-[1320px] pb-[110px]'>
                <section className='pt-[130px] pb-[40px] flex justify-between items-center gap-[230px]'>
                    <div>
                        <h1 className='flex font-extrabold text-[18px] text-red-500'>
                            <img src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/dot.png' />
                            Welcome to Education
                        </h1>
                        <h2 className='text-[48px] max-2xl:text-[30px] font-extrabold leading-[1.5]'>
                            Latest from the Blog
                        </h2>
                    </div>
                    <p className='py-3 text-[#4A5355] max-2xl:text-[15px] max-w-[527px]'>
                        SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site—this is particularly important if you run an e-commerce site.
                    </p>
                </section>
                <section className='grid grid-rows-3 grid-cols-3 gap-5 '>
                    <div data-aos="fade-up" data-aos-delay="200" className='col-span-1 row-span-3'>
                        <Card 
                            img={'https://eduquest.itech-theme.com/wp-content/uploads/2019/05/course7-1.jpg'}
                            date={'July 24, 2021'}
                            cmtNumber={'0'}
                            title={'Give your worker space to celebrate'}
                            description={'our worldwide annual spend on digital advertising surpassing $325 billion,'}
                            link={'#'}    
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" className='col-span-1 row-span-3'>
                        <Card 
                            img={'https://eduquest.itech-theme.com/wp-content/uploads/2019/05/1_0015_5-1.jpg'}
                            date={'July 24, 2021'}
                            cmtNumber={'1'}
                            title={'Give your worker space to celebrate'}
                            description={'our worldwide annual spend on digital advertising surpassing $325 billion,'}
                            link={'#'}    
                        />
                    </div>
                    <div className='col-span-1'>
                        <SubCard 
                            category={'Creative'}
                            title={'Give your worker space to celebrate'}
                            date={'July 24, 2021'}
                            cmtNumber={'30'}
                        />
                    </div>
                    <div className='col-span-1'>
                        <SubCard 
                            category={'Creative'}
                            title={'Give your worker space to celebrate'}
                            date={'July 24, 2021'}
                            cmtNumber={'30'}
                        />
                    </div>
                    <div className='col-span-1'>
                        <SubCard 
                            category={'Creative'}
                            title={'Give your worker space to celebrate'}
                            date={'July 24, 2021'}
                            cmtNumber={'30'}
                        />
                    </div>
                </section>
            </div>
        </section>
    )
}
