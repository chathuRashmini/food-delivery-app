import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdShoppingBasket, MdAdd, MdLogout, MdOutlineHome, MdMenu, MdInfoOutline, MdOutlineRoomService } from 'react-icons/md'
import { motion } from 'framer-motion'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { useStateValue } from '../context/StateProvider';
import { app } from '../firebase.config'
import { actionType } from '../context/reducer'

import Logo from './img/logo.png'
import Avatar from './img/avatar.png'

const Header = () => {

    const firebaseAuth = getAuth(app)
    const provider = new GoogleAuthProvider()

    const [{ user, cartShow, cartItems }, dispatch] = useStateValue()

    const [isMenu, setisMenu] = useState(false)
    
    const login = async () => {
        if (!user) {
            const { user: { providerData} } = await signInWithPopup(firebaseAuth, provider)
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0]
            })

            localStorage.setItem('user', JSON.stringify(providerData[0]))
        } else {
            setisMenu(!isMenu)
        }
    }

    const logout = async () => {
        setisMenu(false)
        localStorage.clear()
        dispatch({
            type: actionType.SET_USER,
            user: null
        })
    }

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow
        })
    }

    return (
        <header className='w-screen fixed z-50 p-3 px-4 md:p-6 md:px-16 bg-primary'>
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to='/' className="flex items-center gap-2">
                    <img 
                        src={Logo} 
                        alt="logo" 
                        className="w-8 object-cover" 
                    />
                    <p className="text-headingColor text-xl font-semibold">FoodToYou</p>
                </Link>

                <div className="flex items-center gap-8">
                    <motion.ul 
                        className="flex items-center gap-8 text-base text-textColor"
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                    >
                        <li className="cursor-pointer hover:text-headingColor hover:font-semibold hover:underline underline-offset-4 duration-100 transition-all ease-in-out" onClick={() => setisMenu(false)}>Home</li>
                        <li className="cursor-pointer hover:text-headingColor hover:font-semibold hover:underline underline-offset-4 duration-100 transition-all ease-in-out" onClick={() => setisMenu(false)}>Menu</li>
                        <li className="cursor-pointer hover:text-headingColor hover:font-semibold hover:underline underline-offset-4 duration-100 transition-all ease-in-out" onClick={() => setisMenu(false)}>About us</li>
                        <li className="cursor-pointer hover:text-headingColor hover:font-semibold hover:underline underline-offset-4 duration-100 transition-all ease-in-out" onClick={() => setisMenu(false)}>Service</li>
                    </motion.ul>

                    <div className="relative flex items-center justify-center" onClick={showCart}>
                        <MdShoppingBasket className='text-textColor text-xl hover:text-headingColor cursor-pointer' />
                        { cartItems && cartItems.length > 0 && (
                            <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-4 -right-4">
                                <p className="text-xs text-white font-semibold">{cartItems.length}</p>
                            </div>
                        )}
                        
                    </div>

                    <div className="relative">
                        <motion.img 
                            whileTap={{ scale: 0.6 }}
                            src={user ? user.photoURL : Avatar} 
                            alt="user profile" 
                            className="w-10 min-w-[40px] h-10 min-h-[40px] shadow-lg rounded-full cursor-pointer" 
                            onClick={login}
                        />
                        { isMenu && (
                            <motion.div 
                                className="w-40 bg-gray-100 shadow-xl rounded-lg absolute flex flex-col top-12 right-0"
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                            >
                                <Link to='/createItem'>
                                    <p 
                                        onClick={() => setisMenu(false)}
                                        className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor"
                                    >
                                        New Item <MdAdd />
                                    </p>
                                </Link>

                                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor" onClick={logout}>
                                    Logout <MdLogout />
                                </p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* mobile view */}
            <div className="flex items-center justify-between md:hidden w-full h-full p-4">
                <div className="relative flex items-center justify-center" onClick={showCart}>
                    <MdShoppingBasket className='text-textColor text-xl hover:text-headingColor cursor-pointer' />
                    { cartItems && cartItems.length > 0 && (
                        <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-4 -right-4">
                            <p className="text-xs text-white font-semibold">{cartItems.length}</p>
                        </div>
                    )}
                </div>

                <Link to='/' className="flex items-center gap-2">
                    <img 
                        src={Logo} 
                        alt="logo" 
                        className="w-8 object-cover" 
                    />
                    <p className="text-headingColor text-xl font-semibold">FoodToYou</p>
                </Link>

                <div className="relative">
                    <motion.img 
                        whileTap={{ scale: 0.6 }}
                        src={user ? user.photoURL : Avatar} 
                        alt="user profile" 
                        className="w-10 min-w-[40px] h-10 min-h-[40px] shadow-lg rounded-full cursor-pointer" 
                        onClick={login}
                    />
                    { isMenu && (
                        <motion.div 
                            className="w-40 bg-gray-100 shadow-xl rounded-lg absolute flex flex-col top-12 right-0"
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                        >
                            <Link to='/createItem'>
                                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor">
                                    New Item <MdAdd />
                                </p>
                            </Link>

                            <ul className="flex flex-col px-4 py-2 gap-4 text-base text-textColor">
                                <li className="cursor-pointer flex items-center gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor">
                                    Home <MdOutlineHome />
                                </li>
                                <li className="cursor-pointer flex items-center gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor">
                                    Menu <MdMenu />
                                </li>
                                <li className="cursor-pointer flex items-center gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor">
                                    About us <MdInfoOutline />
                                </li>
                                <li className="cursor-pointer flex items-center gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor">
                                    Service <MdOutlineRoomService />
                                </li>
                            </ul>

                            <p className="px-4 py-2 flex items-center justify-center bg-slate-200 gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor m-2 p-2 rounded-md shadow-md" onClick={logout}>
                                Logout <MdLogout />
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header