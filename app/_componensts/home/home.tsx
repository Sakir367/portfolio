"use client";

import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import Image from "next/image";

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
        <div className="max-w-[1560] w-[80%] mx-auto my-5 flex flex-col gap-10">
            <Navbar />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
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
                <div className="mx-auto">
                    <Image
                        src="/assets/images/profile.png"
                        alt="Home Image"
                        width={500}
                        height={500}
                        className="aspect-square rounded-4xl"
                    />
                  
                    
                </div>



            </div>


        </div>
    );
}

export default HomePage;
