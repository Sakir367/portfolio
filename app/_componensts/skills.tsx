import React from 'react';
import { FaHashtag } from 'react-icons/fa';

const Skills = () => {
    return (
        <div className='mt-10'>
        <div className='flex gap-2 items-center'>
             <FaHashtag className="text-[16px] text-[#C778DD]" /> 
             <p>Skills</p>
             <div className="w-[150] h-0.5 bg-[#C778DD] overflow-hidden">
  <div className="h-full w-3xl bg-white move-line"></div>
</div>
        </div>




        </div>
    );
}

export default Skills;
