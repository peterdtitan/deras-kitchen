import React from 'react';
import Logo from './img/logo.png';
import { MdShoppingBasket } from 'react-icons/md';

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
        {/* for desktop and tablets*/}
        <div className="hidden md:flex w-full h-full">
            <div className="flex items-center gap-2">
                <img src={Logo} className="w-8 object-cover" alt="logo" />
                <p className="text-headingColor text-x1 font-bold">Dera's</p>
            </div>

            <ul className="flex items-center gap-8 ml-auto" >
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
            </ul>

            <div className="relative">
                <MdShoppingBasket />
            </div>
        </div>


        {/* for mobile */}
        <div className="flex md:hidden w-full h-full"></div>
    </header>
  )
}

export default Header