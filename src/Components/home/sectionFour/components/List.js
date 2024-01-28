import Link from 'next/link'
import React from 'react'

export const List = ({href='#', title=''}) => {
    return (
        <Link href={href} className='py-[10px] flex justify-between'>{title}
            <span className='hover:bg-red-500 duration-300 rounded-full h-[35px] w-[35px] bg-[#1a434f] flex items-center justify-center'>
                <svg className='stroke-current -rotate-45' width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 7L18.5 12.5L13 18M18.5 12.5H6" strokeWidth="1.2"></path> </g></svg>
            </span>
        </Link>
    )
}
