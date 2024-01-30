import Link from 'next/link'
import React from 'react'
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

export const SectionFAQ = () => {
  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={({ state: { isEnter } }) => (
        <>
          {header}
          {!isEnter ?
            <CiCirclePlus size={25} className='ml-auto' />
            :
            <CiCircleMinus size={25} className='ml-auto' />
          }
        </>
      )}
      className="mb-3 shadow-md"
      buttonProps={{
        className: ({ isEnter }) =>
          `flex w-full p-4 text-left font-extrabold text-[16px] ${isEnter && "text-[#ff3158]"
          }`,
      }}
      contentProps={{
        className: "transition-height duration-200 ease-out text-[#4A5355]",
      }}
      panelProps={{ className: "p-4" }}
    />
  )
  return (
    <section className='px-[10px] pt-[120px] pb-[150px] grid place-items-center'>
      <div className='flex gap-10 justify-end max-w-[1320px] max-2xl:max-w-[1130px] max-lg:flex-col max-lg:gap-32'>
        <div className='mr-[40px] left-0 top-0 max-2xl:max-w-[570px]'>
          <div className='relative'>
            <img className=''
              src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/faq.png' />
            <img className='absolute -top-10 -right-10 z-[-1]'
              src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/shape.png' />
            <div className='py-[40px] px-[25px] max-w-[410px] bg-[#002935] rounded-xl absolute -bottom-[110px] -right-5'>
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
        </div>
        <div className='max-w-[660px] max-2xl:max-w-[570px]'>
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
          <div className="mx-2 rounded-md">
            {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
            <Accordion transition transitionTimeout={200}>
              <AccordionItem header="1. Why choose us for your education?" initialEntered>
                We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.
              </AccordionItem>

              <AccordionItem header="2.Why choose us for your education?">
                We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.
              </AccordionItem>

              <AccordionItem header="3.What We Offer To You?">
                We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.
              </AccordionItem>
              <AccordionItem header="4.How We Provide Services For You?">
                We care about safety big time — and so do your site's visitors. With a Shared Hosting account, you get an SSL certificate for free to add to your site. In this day and age, having an SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site — this is particularly important if you run an e-commerce site.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
