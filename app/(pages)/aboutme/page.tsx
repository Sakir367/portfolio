import Aboutmepage from '@/app/_componensts/aboutme';
import Footer from '@/app/_componensts/footer';
import Navbar from '@/app/_componensts/navbar/navbar';
import React from 'react';

const Page = () => {
    return (
    <div className='max-w-[1560] w-[90%] lg:w-[80%] mx-auto my-5'>
      <Navbar />
      <div className=''>
        <Aboutmepage />
      </div>
      <Footer />
    </div>
    );
}

export default Page;
