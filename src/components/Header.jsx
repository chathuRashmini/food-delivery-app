import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'

import Logo from './img/logo.png'
import Avatar from './img/avatar.png'

const Header = () => {
    return (
        <header className='w-screen fixed z-50 p-6 px-16'>
            <div className="hidden md:flex w-full h-full p-4 items-center justify-between">
                <div className="flex items-center gap-2">
                    <img 
                        src={Logo} 
                        alt="logo" 
                        className="w-8 object-cover" 
                    />
                    <p className="text-headingColor text-xl font-semibold">FoodToYou</p>
                </div>

                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-8 text-base text-textColor">
                            <li className="cursor-pointer hover:text-headingColor hover:font-semibold hover:underline underline-offset-4 duration-100 transition-all ease-in-out">Home</li>
                            <li className="cursor-pointer hover:text-headingColor hover:font-semibold hover:underline underline-offset-4 duration-100 transition-all ease-in-out">Menu</li>
                            <li className="cursor-pointer hover:text-headingColor hover:font-semibold hover:underline underline-offset-4 duration-100 transition-all ease-in-out">About us</li>
                            <li className="cursor-pointer hover:text-headingColor hover:font-semibold hover:underline underline-offset-4 duration-100 transition-all ease-in-out">Service</li>
                        </ul>

                        <div className="relative flex items-center justify-center">
                            <MdShoppingBasket className='text-textColor text-xl hover:text-headingColor cursor-pointer' />
                            <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-4 -right-4">
                                <p className="text-xs text-white font-semibold">2</p>
                            </div>
                        </div>

                        <img 
                            src={Avatar} 
                            alt="user profile" 
                            className="w-10 min-w-[40px] h-10 min-h-[40px] shadow-lg rounded-full" 
                        />
                    </div>
                </div>
            {/* <div className="flex md:hidden w-full h-full p-4"></div> */}
        </header>
    )
}

export default Header