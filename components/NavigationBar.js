import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
// import { ContactButtons } from './ContactButtons';

export function NavigationBar() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setOpenMenu(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

    const links = [
      {value: "/", title: "Home"},
      // {value: "/about", title: "About Me"},
      {value: "/skills", title: "Skills"},
      {value: "/projects", title: "Projects"},
      {value: "/workExperience", title: "Work Exp."},
      {value: "/education", title: "Education"},
      // {value: "/contact", title: "Contact"},
      
    ]

    const getClassName = (value) => router.pathname === value 
    ? "flex rounded-3xl justify-center w-[7rem] py-2 text-md font-semibold bg-gray-700 hover:cursor-pointer" 
    : "flex rounded-3xl justify-center w-[7rem] py-2 text-md font-semibold hover:cursor-pointer text-gray-700 hover:text-white";

    const getClassNameMobile = (value) => router.pathname === value 
    ? "flex rounded-3xl justify-center w-[7rem] py-2 text-md font-semibold bg-gray-700 hover:cursor-pointer" 
    : "flex rounded-3xl justify-center w-[7rem] py-2 text-md font-semibold hover:cursor-pointer";

return (
  <nav className="bg-primary-500 text-white p-4 z-20 sticky top-0">
    <div className="container mx-auto flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold drop-shadow-md">{router.pathname !== "/" ? "Back Home" : "Abraham"}</Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4">
        {links.map((item) => (
          <Link key={item.title} href={item.value} className={getClassName(item.value)}>
            {item.title}
          </Link>
        ))}
      </div>

      {/* Hamburger Button */}
      <div className="md:hidden flex items-center">
        <button ref={buttonRef} onClick={toggleMenu} className="text-2xl focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    <div ref={menuRef} className={`md:hidden fixed top-0 left-0 w-2/5 h-[100vh] bg-black bg-opacity-85 text-white transition-transform duration-300 ease-in-out z-10 ${openMenu ? 'translate-x-0' : 'translate-x-[-100%]'}`}>
      <div className="flex flex-col justify-center h-full">
        <ul className="flex flex-col gap-2">
        {links.map((item) => (
          <li key={item.value} className="self-center">
            <Link href={item.value} className={getClassNameMobile(item.value)} onClick={() => setOpenMenu(false)}>
              {item.title}
            </Link>
          </li>
        ))}
        </ul>
      </div>
      {/* <ContactButtons /> */}
    </div>
  </nav>
);
}