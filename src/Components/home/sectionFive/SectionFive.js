import React from 'react'

export const SectionFive = () => {
  return (
    <section className='pt-[130px] pb-[374px] text-white 
    bg-[url("https://eduquest.itech-theme.com/wp-content/uploads/2023/08/course-bg.png")] bg-no-repeat bg-cover'>
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
            The World’s Largest <br/> Selection of
            <span className='text-[#FF3158]'> Online </span> <br/>
            Courses
          </h1>
        </div>
      </div>
    </section>
  )
}
