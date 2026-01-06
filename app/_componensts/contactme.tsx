import React from 'react';
import { FaHashtag, FaWhatsapp } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Contactme = () => {
    return (
        <div className='mt-10'>
            <div className='flex gap-2 items-center'>
                        <FaHashtag className="text-2xl text-[#C778DD]" />
                        <p className='text-xl text-[#320D6D]  dark:text-white font-bold'>contacts</p>
                        <div className="w-[150] h-0.5 bg-[#C778DD] overflow-hidden">
                          <div className="h-full w-3xl dark:bg-white bg-black move-line"></div>
                        </div>
                      </div>  



                      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 '>
                        <div>
                            <p className='text-[#2e2828] dark:text-[#ABB2BF] text-[14px] font-normal text-justify '>I’m available for freelance opportunities and open to discussing any other requests or questions you may have.</p>
                        </div>

                       <div className='flex flex-col gap-4'>
                         <div className='flex justify-end items-center gap-2'>
                            <IoMdMail className="text-xl text-[#C778DD] animate-pulse" />
                            <a href="mailto:sakir25599@gmail.com" className="text-[#2e2828] dark:text-[#ABB2BF] text-[14px] font-normal hover:text-[#C778DD]">sakir25599@gmail.com</a>
                        </div>
                          <div className='flex justify-end items-center gap-2'>
                            <FaWhatsapp className="text-xl text-[#25D366] animate-pulse" />
                            <a href="https://wa.me/919971623908" className="text-[#2e2828] dark:text-[#ABB2BF] text-[14px] font-normal hover:text-[#25D366]">+91 9971623908</a>
                        </div>
                       
                       </div>
                      </div>
        </div>
    );
}

export default Contactme;
