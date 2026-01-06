import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { PiExcludeSquareDuotone } from 'react-icons/pi';

const Footer = () => {
    return (
        <div className="mt-10">
            <div className='border-t border-white'>
                <div className=''>
                    <div className='grid lg:grid-cols-2 my-5  grid-cols-1'>
                        <div className='flex flex-col gap-3'>
                            <div className="flex gap-1 items-center">
                                <PiExcludeSquareDuotone className="text-xl text-[#C778DD] animate-pulse" />
                                <p className="text-xl text-[#320D6D] dark:text-white font-bold">
                                    SAKIR
                                </p>
                                <p className='text-[14px] text-[#2e2828] dark:text-[#ABB2BF] font-normal'>sakir25599@gmail.com</p>
                            </div>

                            <p className="text-[14px] text-[#320D6D] dark:text-white">Front-end developer</p>
                        </div>
                        <div className='flex justify-end '>
                            <div className='flex flex-row items-center lg:flex-col gap-3'>
                                <p className='text-xl dark:text-white text-[#320D6D]'>Media</p>

                                <div className='flex gap-4'>
                                    <a
                                        href="https://www.instagram.com/sakir.367"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaInstagram className="text-xl text-[#E1306C] hover:scale-110 transition  animate-pulse" />
                                    </a>

                                                              <a href="https://wa.me/919971623908" className="text-[#2e2828] dark:text-[#ABB2BF] text-[14px] font-normal hover:text-[#25D366]">  <FaWhatsapp className="text-xl text-[#25D366] animate-pulse" /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center my-5'>
                        <p className='text-[#2e2828] dark:text-[#ABB2BF] text-[14px] font-normal text-justify '>© Copyright 2026. Made by Sakir</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;
