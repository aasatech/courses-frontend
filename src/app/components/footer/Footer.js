import Link from 'next/link';
import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";

export const Footer = () => {
    const [input, setInput] = useState('')
    const useFulLinks = [{
        title: ' About us',
        link: '#'
    },
    {
        title: 'Resource Center',
        link: '#'
    },
    {
        title: 'Careers',
        link: '#'
    },
    {
        title: 'Instructor',
        link: '#'
    }, {
        title: 'Become A Teacher',
        link: '#'
    },
    {
        title: 'Categories',
        link: '#'
    },
    {
        title: 'All Courses',
        link: '#'
    }]
    const courses = [{
        title: 'Digital Marketing',
        link: '#'
    }, {
        title: 'Design & Branding',
        link: '#'
    }, {
        title: 'Storytelling & Voice Over',
        link: '#'
    }, {
        title: 'News & Blogs',
        link: '#'
    }, {
        title: 'Contact',
        link: '#'
    }, {
        title: 'Pricing',
        link: '#'
    }, {
        title: 'Terms & Condition',
        link: '#'
    }
    ]
    const recentPosts = [{
        img: 'https://eduquest.itech-theme.com/wp-content/uploads/2019/05/course5-1-150x150.jpg',
        title: 'Augmented Reality In Business Service',
        date: 'July 24, 2021'
    }, {
        img: 'https://eduquest.itech-theme.com/wp-content/uploads/2019/05/course3-1-150x150.jpg',
        title: 'Features Of An Process Management Business',
        date: 'July 24, 2021'
    }]
    return (
        <section className='pt-[100px] bg-no-repeat bg-cover bg-[url("https://eduquest.itech-theme.com/wp-content/uploads/2023/08/footer-bg.png")] 
        grid place-items-center px-[10px]'>
            <div className='2xl:w-[1320px] divide-y-[1px] divide-[#1A434F]/80'>
                <section className='flex lg:justify-between max-lg:flex-col items-center pb-[40px] gap-5'>
                    <div className='flex items-center max-lg:justify-center max-lg:flex-col gap-8'>
                        <img className='max-w-[73px] max-h-[73px]'
                            src='https://eduquest.itech-theme.com/wp-content/uploads/2023/09/ellipse.png' />
                        <h1 className='text-[36px] font-extrabold text-white max-md:text-center'>
                            Join our Newsletter for<br className='max-lg:hidden'/>
                            Latest Updates
                        </h1>
                    </div>
                    <div className='max-sm:flex max-sm:flex-col gap-3'>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className='h-[54px] w-[340px] py-[17px] pl-[20px] pr-[2px] max-sm:rounded-e-md rounded-s-md text-[#80979D] text-[13px] font-semibold focus:outline-none'
                            placeholder='Enter email address*' />
                        <button onClick={() => { alert(input) }}
                            className='h-[54px] bg-[#FF3158] text-white max-sm:rounded-s-md rounded-e-md p-[15px] font-extrabold text-[16px]'>
                            Subscribe
                        </button>
                    </div>
                </section>
                <section className='xl:flex xl:justify-between max-xl:grid max-xl:grid-cols-2 max-md:grid-cols-1 pt-[40px] pb-[100px] gap-5'>
                    <div className='max-w-[383px] grid gap-5'>
                        <img src='https://eduquest.itech-theme.com/wp-content/uploads/2023/08/logo-light.png' />
                        <p className='text-white font-normal py-[15px]'>
                            SSL for your site is a no-brainer best practice. Not only does an SSL help your visitors feel safe interacting with your site—this is particularly important if you run an e-lMS Website site.
                        </p>
                        <div className='flex items-center text-[#FCFCFC6B] gap-1'>
                            <Link href={'#'} className='max-w-[48px] max-h-[48px] w-[48px] h-[48px] hover:bg-[#FF3158] rounded-full flex justify-center items-center duration-200 group'>
                                <FaFacebook size={20} className='group-hover:text-white duration-200' />
                            </Link>
                            <Link href={'#'} className='max-w-[48px] max-h-[48px] w-[48px] h-[48px] hover:bg-[#FF3158] rounded-full flex justify-center items-center duration-200 group'>
                                <FaTwitter size={20} className='group-hover:text-white duration-200' />
                            </Link>
                            <Link href={'#'} className='max-w-[48px] max-h-[48px] w-[48px] h-[48px] hover:bg-[#FF3158] rounded-full flex justify-center items-center duration-200 group'>
                                <FaYoutube size={20} className='group-hover:text-white duration-200' />
                            </Link>
                        </div>
                    </div>
                    <div className='text-[#D9DDDE]'>
                        <h1 className='relative font-extrabold text-[18px] mb-[20px]'>
                            Useful Links
                            <span className='h-[2px] w-[40px] bg-[#FF3158] absolute bottom-0 left-0'></span>
                        </h1>
                        <ul className='grid gap-2'>
                            {
                                useFulLinks.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.link}
                                            className='pb-[6px] text-[16px] hover:text-[#FF3158]'>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='text-[#D9DDDE]'>
                        <h1 className='relative font-extrabold text-[18px] mb-[20px]'>
                            Courses
                            <span className='h-[2px] w-[40px] bg-[#FF3158] absolute bottom-0 left-0'></span>
                        </h1>
                        <ul className='grid gap-2'>
                            {
                                courses.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.link}
                                            className='pb-[6px] text-[16px] hover:text-[#FF3158]'>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='text-[#D9DDDE] max-w-[400px]'>
                        <h1 className='relative font-extrabold text-[18px] mb-[7px]'>
                            Recent post
                            <span className='h-[2px] w-[40px] bg-[#FF3158] absolute bottom-0 left-0'></span>
                        </h1>
                        <ul>
                            {
                                recentPosts.map((item, index) => (
                                    <li key={index}
                                        className='pt-[13px] mt-[13px] flex items-center gap-5'>
                                        <Link href={''}>
                                            <img className='max-w-[88px] max-h-[88px] rounded-md'
                                                src={item.img} />
                                        </Link>
                                        <div>
                                            <h1 className='font-extrabold text-[16px]'>
                                                {item.title}
                                            </h1>
                                            <div className='flex items-center gap-2'>
                                                <CiCalendarDate size={20} />
                                                {item.date}
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </section>
                <section className='flex max-md:flex-col md:items-center justify-between text-white font-normal py-[13px] gap-3'>
                    <div>
                        ©copyright 2023 EduQuest. Designed By itech-themes
                    </div>
                    <div className='flex items-center gap-10'>
                        <Link href={''}
                            className='hover:text-[#FF3158] duration-200'>
                            Privacy Policy
                        </Link>
                        <Link href={''}
                            className='hover:text-[#FF3158] duration-200'>
                            Terms of Use
                        </Link>
                    </div>
                </section>
            </div>
        </section>
    )
}
