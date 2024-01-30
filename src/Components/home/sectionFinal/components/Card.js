import Link from 'next/link'
import React from 'react'
import { CiCalendarDate } from "react-icons/ci";
import { FaRegCommentAlt } from "react-icons/fa";

export const Card = ({img, date, cmtNumber, title, description, link}) => {
    return (
        <div className='grid max-w-[417px] max-md:max-w-full rounded-lg shadow-md overflow-clip'>
            <img src={img} />
            <div className='pr-[20px] pt-[20px] pl-[20px] pb-[35px]'>
                <div className='flex items-center text-[#FF3158] gap-2 pb-[10px]'>
                    <CiCalendarDate size={20}/>
                    {date}
                    <FaRegCommentAlt />
                    {cmtNumber}
                </div>
                <Link href={link}>
                    <h1 className='text-[#002935] pb-[15px] text-[22px] font-extrabold leading-[1.5] hover:text-[#FF3158] duration-200'>
                    {title}
                    </h1>
                </Link>
                <p className='pb-5 text-[#4A5355] max-2xl:text-[15px] leading-[1.5]'>
                    {description}
                </p>
                <Link href={link} 
                    className='flex items-center hover:text-[#FF3158] duration-200'>
                    Explore More
                    <svg className='stroke-current' width={30} height={30} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 7L18.5 12.5L13 18M18.5 12.5H6" strokeWidth="1.2"></path> </g></svg>
                </Link>
            </div>
        </div>
    )
}
