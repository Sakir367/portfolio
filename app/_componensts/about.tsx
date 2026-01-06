import Image from "next/image";
import Link from "next/link";
import { FaHashtag } from "react-icons/fa"


function AboutME() {
    const textt = "Read more ->";
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
            <p className="text-[#2e2828] dark:text-[#ABB2BF] text-[14px] font-normal text-justify"> a passionate <span className="text-[#C778DD] text-[14px] font-normal ">Frontend Web Developer</span> with hands-on experience in building modern, responsive, and user-friendly web applications. I specialize in <span className="text-[#C778DD] text-[14px] font-normal ">HTML, CSS, JavaScript, React.js, Next.js, and Tailwind CSS,</span> with a strong focus on clean UI and smooth user experience.</p>
            
            <p className="text-[#2e2828] dark:text-[#ABB2BF] text-[14px] font-normal text-justify">Currently, I’m working at <span className="text-[#C778DD]">AGKraft Pvt. Ltd.,</span> where I contribute to real-world projects and continuously improve my development skills. I enjoy transforming ideas into functional and visually appealing interfaces, and I always aim to write clean, scalable, and maintainable code.</p>

                <Link href="/aboutme">
                        <h1 className="text-xl cursor-pointer font-semibold text-[#C778DD] mt-4 flex">
                            {textt.split("").map((char, index) => (
                                <span
                                    key={index}
                                    className="inline-block animate-wave 
        "
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </h1>
                    </Link>
            </div> 

                <div className="flex justify-end md:justify-center">
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
  )
}

export default AboutME