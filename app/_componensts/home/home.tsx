"use client";

import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import Image from "next/image";
import { PiExcludeSquareDuotone } from "react-icons/pi";

const HomePage = () => {
    const textt = "Contact me!!";
    const text = "Frontend Web Developer";
    const typingSpeed: number = 100;
    const deletingSpeed: number = 60;
    const delayAfterComplete: number = 1500;

    const [displayText, setDisplayText] = useState<string>("");
    const [index, setIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (!isDeleting && index < text.length) {
            // Typing
            timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text.charAt(index));
                setIndex((prev) => prev + 1);
            }, typingSpeed);
        }
        else if (isDeleting && index > 0) {
            // Deleting
            timeout = setTimeout(() => {
                setDisplayText((prev) => prev.slice(0, -1));
                setIndex((prev) => prev - 1);
            }, deletingSpeed);
        }
        else if (!isDeleting && index === text.length) {
            // Pause before deleting
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, delayAfterComplete);
        }
        else if (isDeleting && index === 0) {
            // Restart typing
            setIsDeleting(false);
        }

        return () => clearTimeout(timeout);
    }, [index, isDeleting]);
    return (
        <div className="my-5 ">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-16">
                <div className="my-auto">
                    <h2 className="text-2xl text-[#320D6D]  dark:text-white font-bold">Hi, I’m Sakir Ali — <span className="text-[#C778DD]">{displayText}</span></h2>
                    <p className="text-[#ABB2BF] dark:text-[#ABB2BF] text-[14px] font-normal mt-5">I design and build clean, modern, and responsive web experiences with a focus on performance, usability, and creativity.</p>

                    <button>
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
                    </button>
                </div>
                <div className="mx-auto my-auto">
                    <div className="relative w-fit">
                        {/* Bottom Image */}
                        <Image
                            src="/assets/images/profile.png"
                            alt="Profile Image"
                            width={500}
                            height={500}
                            className="aspect-square rounded-4xl"
                        />

                        {/* Top Image */}
                        <Image
                            src="/assets/images/logo.png"
                            alt="Logo Image"
                            width={100}
                            height={100}
                            className="absolute top-4 left-4 z-10"
                        />

                        
                    </div>
                    <div className="flex gap-2 items-center border border-[#C778DD] dark:border-white justify-center mt-4 py-1 px-10 w-fit mx-auto">
                          <PiExcludeSquareDuotone className="text-xl text-[#C778DD] animate-pulse" />
                        <p className="text-[14px] text-[#ABB2BF]">Currently working on <span className="text-[#320D6D] dark:text-white">AGKraft</span></p>
                    </div>


                </div>




            </div>


            <div className="relative max-w-4xl mx-auto  p-8 text-white font-mono">

  <div className="relative border border-gray-400 px-10 py-4">


    <span className="absolute -top-5 left-4 dark:bg-[#0A0A0A] bg-white px-2 text-3xl text-gray-300">
      “
    </span>

 
    <p className="text-[14px] text-[#320D6D] dark:text-white tracking-wide">
     Building modern, responsive, and user-friendly web interfaces.
    </p>


    <span className="absolute -bottom-4 right-6 z-10 dark:bg-[#0A0A0A] bg-white   px-2 text-3xl text-gray-300">
      ”
    </span>


    <div className="absolute text-[#320D6D] dark:text-white  right-0 -bottom-12 border border-gray-400 px-6 py-3 ">
      <p className="text-[14px]">— Sakir Ali</p>
    </div>
  </div>
</div>



        </div>
    );
}

export default HomePage;
