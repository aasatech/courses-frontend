import Link from 'next/link'
import React from 'react'
export const SectionFAQ = () => {
  return (
    <section className='px-[10px] pt-[120px] pb-[150px] grid place-items-center'>
      <div className='grid grid-cols-2 gap-20 max-w-[1320px]'>
        <div className='relative mr-[40px]'>
          <img className=''
            src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/faq.png' />
          <img className='absolute -top-10 -right-5 z-[-1]'
            src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/shape.png' />
          <div className='py-[40px] px-[25px] max-w-[410px]  bg-[#002935] rounded-xl absolute -bottom-[110px] -right-5'>
            <h1 className='text-[22px] font-extrabold leading-[1.5] pb-[20px] text-white'>
              Contact Us For a <span className='text-[#ff3158]'>Free Learning</span> <br />
              Consulting Evaluation
            </h1>
            <h2 className='flex gap-1 items-center'>
              <img src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/shape-6.png' />
              <Link href={'#'}
                className='text-white text-[36px] font-extrabold'>
                088 4500 105
              </Link>
            </h2>
          </div>
        </div>
        <div>
          <h1 className='flex font-extrabold text-[18px] text-red-500'>
            <img src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/dot.png' />
            FAQ
          </h1>
          <h2 className='text-[48px] max-2xl:text-[30px] font-extrabold leading-[1.5]'>
            Frequently Asked <br />
            Questions
          </h2>
          <p className='pt-[20px] pb-[30px] text-[#4A5355] max-2xl:text-[15px] text-[18px]'>
            Architect client-centered total linkage for intuitive benefits. Dynamically restore convergence before real-time restore.
          </p>
          <div className='rounded-md grid gap-5 '>
            
          </div>
        </div>
      </div>
    </section>
  )
}
