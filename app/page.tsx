

import AboutME from "./_componensts/about";
import Contactme from "./_componensts/contactme";
import Footer from "./_componensts/footer";
import HomePage from "./_componensts/home/home";
import Navbar from "./_componensts/navbar/navbar";
import Skills from "./_componensts/skills";

export default function Home() {
  return (
   <div className="max-w-[1560] flex flex-col gap-6 w-[90%] lg:w-[80%] mx-auto my-5">
    <Navbar/>
    <HomePage/>
<Skills/>
<AboutME/>
<Contactme/>
<Footer/>
    </div>
  );
}
