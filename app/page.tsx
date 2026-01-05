

import HomePage from "./_componensts/home/home";
import Navbar from "./_componensts/navbar/navbar";
import Skills from "./_componensts/skills";

export default function Home() {
  return (
   <div className="max-w-[1560] w-[80%] mx-auto my-5">
    <Navbar/>
    <HomePage/>
<Skills/>
    </div>
  );
}
