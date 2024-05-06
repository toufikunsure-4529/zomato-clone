import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Logo from "../Logo";
function Header() {
  const Links = [
    { name: "Investor Relations", link: "#" },
    { name: "Add resturant", link: "#" },
    { name: "Log in", link: "#" },
    { name: "Sign up", link: "#" },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className=" w-full md:absolute fixed top-0 left-0 z-[99] mb-20 ">
      <div className="md:flex justify-between items-center py-4 px-7 md:px-24">
        <div className="flex cursor-pointer items-center">
          <Logo />
        </div>

        {/* MOBILE SCREEN VIEW BUTTON */}
        <div
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden text-white "
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* DESKTOP SCREEN VIEW NAV LIST */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0  transition-all md:bg-transparent bg-red-800 text-white duration-500 ease-in py-14 md:py-0 ${
            isNavOpen ? "top-0" : "top-[-490px] "
          }`}
        >
          {Links.map((link) => (
            <li
              className="text-xl my-7 md:my-0 md:ml-8 transition-all duration-200 ease-in"
              key={link.name}
            >
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
