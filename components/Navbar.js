import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [newScroll, setNewScroll] = useState(false);
  const openNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 90) {
        setNewScroll(true);
        setNav(false);
      } else {
        setNewScroll(false);
      }
    });
  }, []);
  return (
    <div
      className={
        newScroll
          ? "fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-white"
          : "fixed left-0 top-0 w-full z-10 ease-in duration-300"
      }
    >
      <div
        className={
          newScroll
            ? "max-w-[1240px] m-auto flex justify-between items-center p-4"
            : "max-w-[1240px] m-auto flex justify-between items-center p-4 text-white"
        }
      >
        <Link href="/">
          <h1 className="font-bold sm:text-4xl capitalize text-xl">
            sean photography
          </h1>
        </Link>

        <ul className="hidden sm:flex">
          <li className="capitalize p-4">
            <Link href="/">home</Link>
          </li>
          <li className="capitalize p-4">
            <Link href="/#gallery">gallery</Link>
          </li>
          <li className="capitalize p-4">
            <Link href="/portfolio">work</Link>
          </li>
          <li className="capitalize p-4">
            <Link href="/contact">contact</Link>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <div className="sm:hidden block z-10 p-4">
          {nav ? (
            <AiOutlineClose
              size={30}
              onClick={() => openNav()}
              className="text-white"
            />
          ) : (
            <AiOutlineMenu size={30} onClick={() => openNav()} />
          )}
        </div>
        {/* SIDE MENU */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul className="text-white">
            <li
              onClick={() => setNav(false)}
              className=" capitalize p-6 text-4xl hover:text-gray-500  ease-in duration-300"
            >
              <Link href="/">home</Link>
            </li>
            <li
              onClick={() => setNav(false)}
              className="capitalize p-6 text-4xl hover:text-gray-500  ease-in duration-300"
            >
              <Link href="/#gallery">gallery</Link>
            </li>
            <li
              onClick={() => setNav(false)}
              className="capitalize p-6 text-4xl hover:text-gray-500  ease-in duration-300"
            >
              <Link href="/portfolio">work</Link>
            </li>
            <li
              onClick={() => setNav(false)}
              className="capitalize p-6 text-4xl hover:text-gray-500  ease-in duration-300"
            >
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
