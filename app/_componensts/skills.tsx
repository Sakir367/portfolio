import Image from 'next/image';
import React from 'react';
import { FaHashtag } from 'react-icons/fa';

const Skills = () => {
    return (
        <div className='mt-10'>
            <div className='flex gap-2 items-center'>
                <FaHashtag className="text-2xl text-[#C778DD]" />
                <p className='text-xl text-[#320D6D]  dark:text-white font-bold'>Skills</p>
                <div className="w-[150] h-0.5 bg-[#C778DD] overflow-hidden">
                    <div className="h-full w-3xl dark:bg-white bg-black move-line"></div>
                </div>
            </div>




            <div className='flex lg:flex-row flex-col gap-10 mt-10'>
                <div className='flex gap-5 '>
<div className='flex flex-col gap-5'>
                       <Image
                        src="/assets/images/Frame2.png"
                        alt="Logo Image"
                        width={100}
                        height={60}
                        className="aspect-square"
                    />
                    <Image
                        src="/assets/images/line.png"
                        alt="Line"
                        width={100}
                        height={100}
                        className=""
                    />
                   

                   
                </div>
                <div className='my-auto'>
                       <Image
                        src="/assets/images/Rectangle3.png"
                        alt="Logo Image"
                        width={100}
                        height={100}
                        className=""
                    />
                </div>
                </div>
                
                <div className=' w-full flex  lg:flex-row lg:flex-wrap  justify-center flex-col gap-10'>
<div className="flex flex-col items-center ">

  {/* Parent */}
  <div className="px-6 py-2 border rounded-md text-[12px] lg:text-[14px] font-semibold">
    Core Web Technologies
  </div>

  {/* Parent vertical line */}
  <div className="w-0.5 h-8 flow-vertical"></div>

  {/* Horizontal connector */}
  <div className="relative w-[180] lg:w-[240] h-0.5 flow-horizontal">
    {/* Center pointer (optional – helps alignment visually) */}
  </div>

  {/* Children */}
  <div className="flex justify-between w-[260] lg:w-[320px] mt-2">

    {/* HTML */}
    <div className="flex flex-col items-center">
      <div className="w-0.5 h-6 flow-vertical"></div>
      <div className="px-5 py-2 border text-[12px] lg:text-[14px] rounded-md">
        HTML
      </div>
    </div>

    {/* CSS */}
    <div className="flex flex-col items-center">
      <div className="w-0.5 h-6 flow-vertical"></div>
      <div className="px-5 py-2 border text-[12px] lg:text-[14px] rounded-md">
        CSS
      </div>
    </div>

    {/* JavaScript */}
    <div className=" flex flex-col items-center">
      <div className="-mr-7 w-0.5 h-6 flow-vertical"></div>
      <div className="px-5 py-2 border text-[12px] lg:text-[14px] rounded-md">
        JavaScript
      </div>
    </div>

  </div>
</div>




<div className="flex flex-col items-center">

  {/* Parent */}
  <div className="px-6 py-2 border text-[12px] lg:text-[14px] rounded-md font-semibold">
   Frameworks & Libraries
  </div>

  {/* Parent vertical line */}
  <div className="w-0.5 h-8 flow-vertical"></div>

  {/* Horizontal connector */}
  <div className="relative w-[180] lg:w-[250] h-0.5 flow-horizontal">
    {/* Center pointer (optional – helps alignment visually) */}
  </div>

  {/* Children */}
  <div className="flex justify-between w-[260] lg:w-[340] mt-2">

    {/* HTML */}
    <div className="flex flex-col items-center">
      <div className="w-0.5 h-6 flow-vertical"></div>
      <div className="px-3 lg:px-5 py-2 text-[12px] lg:text-[14px] border rounded-md">
        React.js
      </div>
    </div>

    {/* CSS */}
    <div className="flex flex-col items-center">
      <div className=" w-0.5 h-6 flow-vertical"></div>
      <div className="px-3 lg:px-5 py-2 text-[12px] lg:text-[14px] border rounded-md">
        Next.js
      </div>
    </div>

    {/* JavaScript */}
    <div className=" flex flex-col items-center">
      <div className="-mr-7 lg:-mr-9 w-0.5 h-6 flow-vertical"></div>
      <div className="px-3 lg:px-5 py-2 border text-[12px] lg:text-[14px] rounded-md">
       Tailwind CSS
      </div>
    </div>

  </div>
</div>


<div className="flex flex-col items-center">

  {/* Parent */}
  <div className="px-6 py-2 border text-[12px] lg:text-[14px] rounded-md font-semibold">
   Tools
  </div>

  {/* Parent vertical line */}
  <div className="w-0.5 h-8 flow-vertical"></div>

  {/* Horizontal connector */}
  <div className="relative w-[190] lg:w-[240] h-0.5 flow-horizontal">
    {/* Center pointer (optional – helps alignment visually) */}
  </div>

  {/* Children */}
  <div className="flex justify-between w-[260] lg:w-[320px] mt-2">

    {/* HTML */}
    <div className="flex flex-col items-center">
      <div className="w-0.5 h-6 flow-vertical"></div>
      <div className="px-5 py-2 text-[12px] lg:text-[14px] border rounded-md">
       Git
      </div>
    </div>

    {/* CSS */}
    <div className="flex flex-col items-center">
      <div className="w-0.5 h-6 flow-vertical"></div>
      <div className="px-5 py-2 text-[12px] lg:text-[14px] border rounded-md">
      GitHub
      </div>
    </div>

    {/* JavaScript */}
    <div className=" flex flex-col items-center">
      <div className="-mr-7 w-0.5 h-6 flow-vertical"></div>
      <div className="px-5 py-2 text-[12px] lg:text-[14px] border rounded-md">
       VS Code
      </div>
    </div>

  </div>
</div>




                </div>

            </div>




        </div>
    );
}

export default Skills;
