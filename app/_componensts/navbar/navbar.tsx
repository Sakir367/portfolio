"use client";

import { PiExcludeSquareDuotone } from "react-icons/pi";
import { FaHashtag } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { ModeToggle } from "../darkmode";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const data = [
    { name: "home", link: "/" },
    { name: "about-me", link: "/about" },
    { name: "skills", link: "/skills" },
    { name: "contacts", link: "/contacts" },
  ];

  return (
    <nav className="w-full flex lg:flex-row flex-col justify-between items-center ">
      {/* Top Bar */}
      <div className="flex w-full justify-between items-center">
        {/* Logo */}
        <div className="flex gap-1 items-center">
          <PiExcludeSquareDuotone className="text-3xl text-[#C778DD] animate-pulse" />
          <p className="text-2xl text-[#320D6D] dark:text-white font-bold">
            SAKIR
          </p>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl text-[#C778DD]"
          onClick={() => setOpen(!open)}
        >
          {open ? <RxCross2 /> : <IoMenu />}
        </button>
      </div>

      {/* Menu */}
      <div
        className={`lg:flex w-full lg:items-center h-screen lg:h-auto lg:justify-end transition-all duration-300
        ${open ? "block" : "hidden"} lg:block`}
      >
        <div className="flex lg:flex-row flex-col gap-4 mt-6 lg:mt-0">
          {data.map((item, index) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => {
                setActive(index);
                setOpen(false);
              }}
              className="flex gap-1 items-center"
            >
              <FaHashtag className="text-[16px] text-[#C778DD]" />
              <p
                className={`text-[16px] font-medium ${
                  active === index
                    ? "text-[#320D6D] dark:text-white"
                    : "text-[#ABB2BF] dark:text-[#ABB2BF]"
                }`}
              >
                {item.name}
              </p>
            </Link>
          ))}

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

