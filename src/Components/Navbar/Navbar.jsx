import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // Toggle function to handle the Navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Signup" },
    { id: 2, text: "Login" },
  ];

  return (
    <div className="bg-[rgb(147,197,253)] flex justify-between items-center h-24 w-full mx-auto px-4 text-black z-50">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-black z-50">Quiz</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex z-50">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[rgb(147,197,253)] rounded-xl m-2 cursor-pointer duration-300 hover:text-black z-50"
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[rgb(147,197,253)]-100 ease-in-out duration-500 z-50"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-black m-4 z-50">
          QUIZ
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b z-50 rounded-xl hover:bg-[rgb(255,246,227)] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
