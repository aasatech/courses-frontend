import React, { useState } from 'react'
import "@animxyz/core";
import { XyzTransition } from '@animxyz/react'
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';

export const Card = ({ img, name, position, facebook, twitter, linkedIn }) => {
    const [isToggle, setToggle] = useState(false)

    return (
        <div className='max-w-[306px] xl:min-w-[305px] max-xl:max-w-[250px] max-lg:max-w-[306px] max-h-[381px] max-md:max-w-full bg-white hover:bg-red-500 rounded-lg shadow-md pb-1 duration-300'>
            <div className='relative bg-white px-[30px] py-[40px] rounded-lg'>
                <div className='grid place-items-center'>
                    <img
                        className='w-[215px] h-[215px] max-xl:w-[180px] max-xl:h-[180px] max-lg:w-[215px] max-lg:h-[215px] rounded-full mb-[20px]'
                        src={img} />
                    <h1 className='text-[22px] font-extrabold hover:text-[#ff3158] duration-300 cursor-pointer'>
                        {name}
                    </h1>
                    <h2 className='font-medium text-[14px] text-[#4A5355]'>
                        {position}
                    </h2>
                </div>

                <button
                    onClick={() => setToggle(!isToggle)}
                    className={`z-10 absolute top-[25px] right-[25px] bg-[#002935] w-[40px] h-[40px] text-white text-center leading-10 rounded-xl text-[30px] font-thin ${isToggle && 'bg-[#ff3158]'}`}>
                    +
                </button>
                <XyzTransition appear xyz="short-100% up-50% duration-3" >
                    {isToggle &&
                        <div className=" square z-0 absolute top-[65px] right-[25px] w-[40px] bg-white shadow-md rounded-md">
                            {facebook &&
                                <Link href={facebook}
                                    className='w-10 h-10 flex items-center justify-center'>
                                    <FaFacebookF className='hover:text-[#ff3158] duration-200' />
                                </Link>
                            }
                            {twitter &&
                                <Link href={twitter}
                                    className='w-10 h-10 flex items-center justify-center'>
                                    <CiTwitter className='hover:text-[#ff3158] duration-200' />
                                </Link>
                            }
                            {linkedIn &&
                                <Link href={linkedIn} 
                                    className='w-10 h-10 flex items-center justify-center'>
                                    <FaLinkedinIn className='hover:text-[#ff3158] duration-200' />
                                </Link>
                            }
                        </div>
                    }
                </XyzTransition>

            </div>
        </div>
    )
}
