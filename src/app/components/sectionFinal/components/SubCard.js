import React from 'react'
import { CiCalendarDate } from "react-icons/ci";
import { FaRegCommentAlt } from "react-icons/fa";

export const SubCard = ({category, title, date, cmtNumber}) => {
    return (
        <div className='py-[30px] px-[25px] flex bg-white rounded-lg shadow-md justify-between'>
            <div className='max-w-[312px]'>
                <div className='flex items-center gap-2 font-bold text-[14px] text-[#FF3158]'>
                    <span className='h-[2px] w-[32px] bg-[#FF3158] inline-block'></span>
                    {category}
                </div>
                <h1 className='pb-[15px] font-extrabold text-[18px] hover:text-[#FF3158] duration-200'>
                    {title}
                </h1>
                <div className='flex items-center gap-2'>
                    <CiCalendarDate size={20} />
                    {date}
                    <FaRegCommentAlt />
                    {cmtNumber}
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button className='bg-[#FFD6DE] hover:bg-[#FF3158] duration-200 group max-w-[36px] w-[36px] max-h-[36px] h-[36px] rounded-full flex justify-center items-center -rotate-45'>
                    <svg className='stroke-current font-thin text-[#FF3158] duration-200 group-hover:text-white' width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 7L18.5 12.5L13 18M18.5 12.5H6" strokeWidth="1.2"></path> </g></svg>
                </button>
            </div>
        </div>
    )
}
