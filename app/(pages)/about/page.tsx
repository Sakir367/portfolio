import AboutME from '@/app/_componensts/about'
import Footer from '@/app/_componensts/footer'
import Navbar from '@/app/_componensts/navbar/navbar'
import React from 'react'

function about() {
  return (
    <div className='max-w-[1560] w-[90%] lg:w-[80%] mx-auto my-5'>
      <Navbar />
      <div className=''>
        <AboutME />
      </div>
      <Footer/>
    </div>
  )
}

export default about