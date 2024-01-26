'use client'
import React, { useEffect, useState } from 'react'

export const Card = ({
    img = '',
    imgBgColor = '',
    title = '100k+',
    subtitle = 'Our Happy Students' }) => {
    return (
        <div className='max-w-[310px] max-h-[122px] shadow-xl py-[22px] px-[20px] rounded-xl '>
            <div className='flex items-center gap-3'>
                <span className={`rounded-full ${imgBgColor} min-w-20 min-h-20`}>
                    <img
                        className='w-full h-full object-contain'
                        src={img} />
                </span>
                <div className='flex flex-col'>
                    <span className='tracking-[0.50px] text-[20px] font-extrabold'>
                        {title}
                    </span>
                    <span className='tracking-[0.1px] text-grey-500 text-[16px]'>
                        {subtitle}
                    </span>
                </div>
            </div>
        </div>
    )
}
