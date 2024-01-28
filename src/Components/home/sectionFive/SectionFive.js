import React from 'react'
import { Card } from './components/Card'

export const SectionFive = () => {
  return (
    <section className='pt-[130px] pb-[374px] text-white max-h-[700px]
    bg-[url("https://eduquest.itech-theme.com/wp-content/uploads/2023/08/course-bg.png")] bg-no-repeat bg-cover
      grid place-items-center gap-10'>
      <div className='grid grid-cols-[1fr_2px_1fr] gap-5'>
        <div className='flex justify-end items-center'>
          <div className='max-w-[625px] flex flex-col items-end'>
            <h1 className='text-[18px] font-extrabold flex items-center gap-3 py-[10px]'>
              Welcome To Education
              <span className='w-[15px] h-[15px] rounded-full bg-[#FF3158]'></span>
            </h1>
            <p className='ml-[100px] text-end'>
              Architect client-centered total linkage for intuitive benefits. Dynamically restore convergence before real-time restore .convergence before real-time
            </p>
          </div>
        </div>
        <div className='flex justify-center'>
          <img src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/line.png' />
        </div>
        <div className='flex items-center'>
          <h1 className='font-extrabold text-[48px]'>
            The World’s Largest <br /> Selection of
            <span className='text-[#FF3158]'> Online </span> <br />
            Courses
          </h1>
        </div>
      </div>
      <div className='relative w-full max-w-[1280px]'>
        <div className='absolute w-full'>
          <ul className='flex items-center w-full justify-center pb-[40px] gap-14 font-semibold top-0 left-0'>
            <li className='border-b-[1px]'>
              <button>
                All
              </button>
            </li>
            <li>
              <button>
                Business
              </button>
            </li>
            <li>
              <button>
                Design
              </button>
            </li>
            <li>
              <button>
                Heath & Fitness
              </button>
            </li>
            <li>
              <button>
                Marketing
              </button>
            </li>
          </ul>
          <div>
            <Card
              rating={'3.14'}
              number={'10'}
              img={'https://eduquest.itech-theme.com/wp-content/uploads/2019/05/1_0002_18-1-1.jpg'} />
          </div>
        </div>
      </div>

    </section>
  )
}
