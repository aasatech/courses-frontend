import React from 'react'

export const Card = ({className = '', data}) => {
    const {title, subtitle, image, imageBackgroundColor} = data
    return (
        <div className='min-lg:max-w-[306px] min-lg:max-h-[146.4px] max-md:w-full max-md:h-[100px]  max-md:p-[20px] shadow-md py-[30px] px-[25px] rounded-xl '>
            <div className='flex items-center gap-3'>
                <span className={`p-5 rounded-full ${imageBackgroundColor} ${className}`}>
                    <img
                        className='w-full h-full object-contain max-w-10 max-h-10 max-md:max-w-5 max-md:max-h-5'
                        src={image} />
                </span>
                <div className='flex flex-col'>
                    <span className='tracking-[0.50px] text-[46px] max-2xl:text-[30px] font-bold '>
                        {title}
                    </span>
                    <span className='font-bold tracking-[0.1px] text-gray-500 text-[15px] max-2xl:text-[13px] '>
                        {subtitle}
                    </span>
                </div>
            </div>
        </div>
    )
}
