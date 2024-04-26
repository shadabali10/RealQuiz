import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
   const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [{ id: 1, text: "Login" }];

  return (
    <div className="bg-[rgb(147,197,253)] flex justify-between items-center h-24 w-full mx-auto px-4 text-black z-50">
      <h1 className="w-full text-3xl font-bold text-black z-50">Aureal</h1>

      <ul className="hidden md:flex z-50">
        {navItems.map((item) => (
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              onClick={() => navigate("/login")}
              className="p-4 hover:bg-[rgb(147,197,253)] rounded-xl m-2 cursor-pointer duration-300 hover:text-black z-50"
            >
              {item.text}
            </Button>
          </Stack>
        ))}
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[rgb(147,197,253)]-100 ease-in-out duration-500 z-50"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50"
        }
      >
        <h1 className="w-full text-3xl font-bold text-black m-4 z-50">
          Aureal
        </h1>

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
