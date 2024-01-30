import Link from 'next/link'
import React from 'react'

export const Button = ({ href='#', label='' }) => {
    return (
        <Link href={href}>
            <button 
                className={`bg-red-500 duration-300 ease-in-out rounded-lg py-[15px] px-[25px] text-white flex items-center justify-between border-[0.8px] border-red-500 hover:bg-transparent`}>
                {label}
                <svg className='stroke-current' width={30} height={30} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 7L18.5 12.5L13 18M18.5 12.5H6" strokeWidth="1.2"></path> </g></svg>
            </button>
        </Link>
    )
}
