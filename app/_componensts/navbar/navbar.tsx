"use client";

import { PiExcludeSquareDuotone } from "react-icons/pi";
import { FaHashtag } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { ModeToggle } from "../darkmode";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // 👈 current route

  const data = [
    { id: 1, name: "home", link: "/" },
    { id: 2, name: "about-me", link: "/about" },
    { id: 3, name: "skills", link: "/skills" },
    { id: 4, name: "contacts", link: "/contacts" },
  ];

  return (
    <nav className="w-full flex lg:flex-row flex-col justify-between items-center">
      {/* Top Bar */}
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-1 items-center">
          <PiExcludeSquareDuotone className="text-3xl text-[#C778DD] animate-pulse" />
          <p className="text-2xl text-[#320D6D] dark:text-white font-bold">
            SAKIR
          </p>
        </div>

        <button
          className="lg:hidden text-3xl text-[#C778DD]"
          onClick={() => setOpen(!open)}
        >
          {open ? <RxCross2 /> : <IoMenu />}
        </button>
      </div>

      {/* Menu */}
      <div
        className={`lg:flex w-full lg:items-center h-screen lg:h-auto lg:justify-end
        ${open ? "block" : "hidden"} lg:block`}
      >
        <div className="flex lg:flex-row flex-col gap-4 mt-6 lg:mt-0">
          {data.map((item) => {
            const isActive = pathname === item.link;

            return (
              <Link
                key={item.id}
                href={item.link}
                onClick={() => setOpen(false)}
                className="flex gap-1 items-center"
              >
                <FaHashtag className="text-[16px] text-[#C778DD]" />
                <p
                  className={`text-[16px] font-medium transition-colors duration-200
                  ${
                    isActive
                      ? "text-[#320D6D] dark:text-white"
                      : "text-[#f44141] dark:text-[#ABB2BF]"
                  }`}
                >
                  {item.name}
                </p>
              </Link>
            );
          })}

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

