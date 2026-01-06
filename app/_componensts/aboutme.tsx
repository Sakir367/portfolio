import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHashtag } from 'react-icons/fa';

const Aboutmepage = () => {

  return (
    <div className="mt-10">
      <div className='flex gap-2 items-center'>
        <FaHashtag className="text-2xl text-[#C778DD]" />
        <p className='text-xl text-[#320D6D]  dark:text-white font-bold'>about — me </p>
        <div className="w-[150] h-0.5 bg-[#C778DD] overflow-hidden">
          <div className="h-full w-3xl dark:bg-white bg-black move-line"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <div className="flex flex-col gap-4">
          <p className="text-[#C778DD] text-[14px] font-normal ">I’m Sakir Ali,</p>
          <p className="text-[#2e2828] dark:text-[#ABB2BF] text-[14px] font-normal text-justify "> a passionate <span className="text-[#C778DD] text-[14px] font-normal ">Frontend Web Developer</span> with hands-on experience in building modern, responsive, and user-friendly web applications. I specialize in <span className="text-[#C778DD] text-[14px] font-normal ">HTML, CSS, JavaScript, React.js, Next.js, and Tailwind CSS,</span> with a strong focus on clean UI and smooth user experience.</p>

          <p className="text-[#2e2828] dark:text-[#ABB2BF] text-[14px] font-normal text-justify">Currently, I’m working at <span className="text-[#C778DD]">AGKraft Pvt. Ltd.,</span> where I contribute to real-world projects and continuously improve my development skills. I enjoy transforming ideas into functional and visually appealing interfaces, and I always aim to write clean, scalable, and maintainable code.</p>

          <p className="text-[#2e2828] dark:text-[#ABB2BF] text-[14px] font-normal text-justify">I enjoy working on modern UI/UX concepts, animations, and component-based architecture. I pay close attention to details and always strive to write <span className='text-[#C778DD]'>clean, readable, and maintainable code.</span> I believe in continuous learning and regularly explore new tools, frameworks, and best practices in frontend development.</p>
          <p className="text-[#2e2828] dark:text-[#ABB2BF] text-[14px] font-normal text-justify">As a fresher with practical industry exposure, I am highly motivated, adaptable, and eager to take on new challenges. I’m actively seeking opportunities where I can contribute my skills, grow professionally, and be part of a forward-thinking development team.</p>
        </div>
        <div className='flex justify-end md:justify-center'> 
          <Image
            src="/assets/images/image2.png"
            alt="Image2"
            width={500}
            height={500}
            className=""
          />
        </div>

      </div>
    </div>
  );
}

export default Aboutmepage;
