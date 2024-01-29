import Link from 'next/link';
import React from 'react'
import { IoMdStarOutline } from "react-icons/io";
import { SlFolderAlt } from "react-icons/sl";
import { GiAlarmClock } from "react-icons/gi";

export const Card = ({ data }) => {
    return (
        <div className='grid p-[20px] max-w-[403px] max-md:max-w-full rounded-xl bg-white'>
            <div className='rounded-t-md relative overflow-clip mb-[30px] text-white'>
                <span className='bg-[#002935] absolute px-[8px] py-[3px] font-bold text-[14px] flex items-center gap-1'>
                    <IoMdStarOutline color='#F9C02F' />
                    {data?.rate?.stars}
                    {`(${data?.rate?.count})`}
                </span>
                <Link href={data.url}>
                    <img
                        src={data.image} />
                </Link>
            </div>
            <div>
                <Link href={data.categoryUrl}>
                    <span className='mb-[10px] inline-block text-[#ff3158] bg-[rgba(255,_49,_88,_0.1)] font-bold text-[12px] px-[10px] py-[4px] rounded-sm'>
                        {data.category}
                    </span>
                </Link>
                <Link href={data.url}>
                    <h1 className='text-black font-extrabold text-[22px] max-lg:text-[18px]'>
                        {data.title}
                    </h1>
                </Link>
                <div className='text-[#4A5355] flex items-center gap-6 text-[16px] max-lg:text-[14px] font-medium mt-[20px]'>
                    <div className='flex items-center gap-2'>
                        <SlFolderAlt />
                        <h1>{data.lessons} Lessons</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <GiAlarmClock />
                        <h1>{data.time}</h1>
                    </div>
                </div>
                <div className='pt-[15px] mt-[12px] border-t-[1px] flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img
                            className='max-w-[44px] max-h-[44px] rounded-full'
                            src={data.author.image} />
                        <h1 className='text-black font-extrabold text-[16px]'>{data.author.name}</h1>
                    </div>
                    <span className='text-[#ff3158] text-[18px] font-bold'>{data.price}</span>
                </div>
            </div>
        </div>
    )
}
