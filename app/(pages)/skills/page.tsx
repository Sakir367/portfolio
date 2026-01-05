import Navbar from '@/app/_componensts/navbar/navbar';
import Skills from '@/app/_componensts/skills';
import React from 'react';

const Page = () => {
    return (
        <div className='max-w-[1560] w-[80%] mx-auto my-5'>
        <Navbar/>
        <div className=''>
<Skills/>
        </div>
        </div>
    );
}

export default Page;
