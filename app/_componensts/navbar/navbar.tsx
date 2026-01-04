import { PiExcludeSquareDuotone } from "react-icons/pi";
import { FaHashtag } from "react-icons/fa";
import { ModeToggle } from "../darkmode";
const Navbar = () => {
    return (
        <div className="max-w-[1560] w-[90%] mx-auto my-5">
       <div className="flex lg:flex-row flex-col justify-between items-start gap-8 lg:items-center">
          <div className="flex gap-1 items-center">
              <PiExcludeSquareDuotone className="text-3xl text-[#C778DD]" /> 
           <p className="text-2xl text-[#320D6D] dark:text-white font-bold">SAKIR</p>
         </div>
        <div className="flex lg:flex-row flex-col gap-3">
             <div className="flex gap-1 items-center">
            <FaHashtag className="text-[16px] text-[#C778DD]" />
             <p className="text-[16px] text-[#320D6D] dark:text-white font-medium">home</p>
         
         </div>
          <div className="flex gap-1 items-center">
            <FaHashtag className="text-[16px] text-[#C778DD]" />
             <p className="text-[16px] text-[#ABB2BF] dark:text-[#ABB2BF] font-medium">about-me</p>
         
         </div>
          <div className="flex gap-1 items-center">
            <FaHashtag className="text-[16px]   text-[#C778DD]" />
             <p className="text-[16px] text-[#ABB2BF] dark:text-[#ABB2BF] font-medium">skills</p>
         </div>

          <div className="flex gap-1 items-center">
            <FaHashtag className="text-[16px] text-[#C778DD]" />
             <p className="text-[16px] text-[#ABB2BF] dark:text-[ABB2BF] font-medium">contacts</p>
         </div>
         <div>
                <ModeToggle/>
         </div>
        </div>
       </div>
        </div>
    );
}

export default Navbar;
