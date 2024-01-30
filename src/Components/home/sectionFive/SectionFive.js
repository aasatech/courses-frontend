import React, { useState } from 'react'
import { Card } from './components/Card'
import Link from 'next/link'

export const SectionFive = () => {
  const [active, setActive] = useState('all')

  const cardData = [{
    title: 'Nutrition: Build Your Perfect Diet & Meal Plan',
    category: 'Marketing',
    image: 'https://eduquest.itech-theme.com/wp-content/uploads/2019/05/1_0002_18-1-1.jpg',
    lessons: '6',
    time: '4 hours',
    price: 'Free',
    url: '#',
    categoryUrl: '#',
    author: {
      image: 'https://eduquest.itech-theme.com/wp-content/uploads/2019/05/avatar4-1.png',
      name: 'SK AL'
    },
    rate: {
      stars: '4.67',
      count: '10'
    }
  }, {
    title: 'WordPress for Beginners – Master WordPress',
    category: 'Design',
    image: 'https://eduquest.itech-theme.com/wp-content/uploads/2019/05/course4-1.jpg',
    lessons: '60',
    time: '1000 hours 30 minutes',
    price: '$99.99',
    url: '#',
    categoryUrl: '#',
    author: {
      image: 'https://eduquest.itech-theme.com/wp-content/uploads/2019/05/avatar4-1.png',
      name: 'SK AL'
    },
    rate: {
      stars: '4.67',
      count: '10'
    }
  }, {
    title: 'Ultimate Photoshop Training: From Beginner',
    category: 'Design',
    image: 'https://eduquest.itech-theme.com/wp-content/uploads/2019/05/course8-1.jpg',
    lessons: '6',
    time: '4 hours 30 minutes',
    price: 'Free',
    url: '#',
    categoryUrl: '#',
    author: {
      image: 'https://eduquest.itech-theme.com/wp-content/uploads/2019/05/avatar4-1.png',
      name: 'SK AL'
    },
    rate: {
      stars: '4.67',
      count: '10'
    }
  }, {
    title: 'User Experience Design Essentials',
    category: 'Business',
    image: 'https://eduquest.itech-theme.com/wp-content/uploads/2019/05/course8-1.jpg',
    lessons: '6',
    time: '4 hours 30 minutes',
    price: 'Free',
    url: '#',
    categoryUrl: '#',
    author: {
      image: 'https://eduquest.itech-theme.com/wp-content/uploads/2019/05/avatar4-1.png',
      name: 'SK AL'
    },
    rate: {
      stars: '4.67',
      count: '10'
    }
  }]

  const [filteredData, setFilteredData] = useState(cardData.slice(0, 3))
  function handleTabs(category) {
    setActive(category)
    let filtered = []
    if (category === 'all') {
      filtered = cardData
    } else {
      filtered = cardData.filter((data) => data.category.toLowerCase() === category)
    }
    filtered.length = 3
    setFilteredData(filtered)
  }
  return (
    <section className=''>
      <div className='flex justify-center pt-[130px] pb-[374px] bg-white
      bg-[url("https://eduquest.itech-theme.com/wp-content/uploads/2023/08/course-bg.png")] bg-no-repeat bg-cover'>
        <div className='max-w-[1300px] max-md:p-[20px] flex max-md:flex-col items-center justify-center gap-[20px] md:ml-[60px]'>
          <div className='md:max-w-[506px]' data-aos="fade-right" data-aos-delay='100'>
            <h1 className='flex items-center justify-end py-[10px] text-[#FF3158] font-extrabold text-[18px] gap-3'>
              Welcome To Education
              <span className='w-[15px] h-[15px] rounded-full bg-[#FF3158]'></span>
            </h1>
            <p className='ml-[100px] text-end text-white text-[18px]'>
              Architect client-centered total linkage for intuitive benefits. Dynamically restore convergence before real-time restore .convergence before real-time
            </p>
          </div>
          <img className='max-md:hidden' data-aos="flip-up" data-aos-delay='100'
            src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/line.png' />
          <div className='md:max-w-[630px]' data-aos="fade-left" data-aos-delay='100'>
            <h1 className='text-[48px] max-md:text-[35px] font-extrabold leading-[58px] text-white'>
              The World’s Largest Selection of
              <span className='text-[#FF3158]'> Online </span>
              Courses
            </h1>
          </div>
        </div>
      </div>
      <div className='p-[10px] mt-[-340px] px-[10px] z-10 relative min-h-[510px]'>
        <ul className='flex flex-wrap gap-3 text-white font-semibold justify-center pb-[40px]'>
          <li className='relative' data-aos="fade-up" data-aos-delay='100'>
            <button
              onClick={() => handleTabs('all')}
              className={`p-[10px] mx-4 duration-300 ${active === 'all' && 'text-[#FF3158]'}`}>All</button>
            <div className={`bg-[#FF3158] absolute h-[1px] duration-300 w-0 ${active === 'all' && 'w-full'}`}></div>
          </li>
          <li className='relative' data-aos="fade-up" data-aos-delay='200'>
            <button
              onClick={() => handleTabs('business')}
              className={`p-[10px] mx-4 duration-300 ${active === 'business' && 'text-[#FF3158]'}`}>Business</button>
            <div className={`bg-[#FF3158] absolute h-[1px] duration-300 w-0 ${active === 'business' && 'w-full'}`}></div>
          </li>
          <li className='relative' data-aos="fade-up" data-aos-delay='300'>
            <button
              onClick={() => handleTabs('design')}
              className={`p-[10px] mx-4 duration-300 ${active === 'design' && 'text-[#FF3158]'}`}>Design</button>
            <div className={`bg-[#FF3158] absolute h-[1px] duration-300 w-0 ${active === 'design' && 'w-full'}`}></div>
          </li>
          <li className='relative' data-aos="fade-up" data-aos-delay='400'>
            <button
              onClick={() => handleTabs('health & fitness')}
              className={`p-[10px] mx-4 duration-300 ${active === 'health & fitness' && 'text-[#FF3158]'}`}>Health & Fitness</button>
            <div className={`bg-[#FF3158] absolute h-[1px] duration-300 w-0 ${active === 'health & fitness' && 'w-full'}`}></div>
          </li>
          <li className='relative' data-aos="fade-up" data-aos-delay='500'>
            <button
              onClick={() => handleTabs('marketing')}
              className={`p-[10px] mx-4 duration-300 ${active === 'marketing' && 'text-[#FF3158]'}`}>Marketing</button>
            <div className={`bg-[#FF3158] absolute h-[1px] duration-300 w-0 ${active === 'marketing' && 'w-full'}`}></div>
          </li>
        </ul>
        <div className='flex justify-center'>
          <div className='grid grid-cols-3 max-w-[1300px] max-md:grid-cols-1 gap-5'>
            {
              filteredData.map((data, index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={`${index + 1}00`}>
                  <Card data={data} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className='pb-[130px] pt-[30px] flex justify-center'>
        <Link
          data-aos="flip-up" data-aos-delay='100'
          href="#"
          className='bg-red-500 duration-300 rounded-lg py-[15px] px-[25px] text-white flex items-center justify-between border-[0.8px] border-red-500 hover:bg-white hover:text-black'>
          Explore More
          <svg className='stroke-current' width={30} height={30} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 7L18.5 12.5L13 18M18.5 12.5H6" strokeWidth="1.2"></path> </g></svg>
        </Link>
      </div>
    </section>
  )
}
