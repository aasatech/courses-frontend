import React from 'react'
import { IoMdStarOutline } from "react-icons/io";

export const Card = ({ rating, number, img }) => {
    return (
        <div className='grid p-[20px] max-w-[403px] rounded-xl bg-white'>
            <div className='rounded-md relative overflow-clip'>
                <span className='bg-[#002935] absolute px-[8px] py-[3px] font-bold text-[14px] flex items-center gap-1'>
                    <IoMdStarOutline color='#F9C02F'/>
                    {rating}
                    {`(${number})`}
                </span>
                <img
                    src={img} />
            </div>
        </div>
    )
}
