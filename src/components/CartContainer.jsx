import React from 'react'
import { IoClose } from 'react-icons/io5'
import { RiRefreshFill } from 'react-icons/ri'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { motion } from 'framer-motion'

import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer'

const CartContainer = () => {

    const [{cartShow}, dispatch] = useStateValue()

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow
        })
    }

    return (
        <motion.div 
            className='w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col fixed top-0 right-0 z-[101]'
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
        >
            <div className="w-full flex items-center justify-between p-4 cursor-pointer">
                <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
                    <IoClose className='text-3xl text-textColor' />
                </motion.div>

                <p className="text-lg text-textColor font-semibold">Cart</p>

                <motion.p whileTap={{ scale: 0.75 }} className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md text-textColor cursor-pointer hover:shadow-md">
                    Clear <RiRefreshFill />
                </motion.p>
            </div>

            <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
                <div className="w-full h-64 px-6 py-10 flex flex-col gap-2 overflow-scroll scrollbar-none">
                    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-ad153.appspot.com/o/Images%2F1669372688595-f6.png?alt=media&token=3d7e9d24-5335-40f3-b976-ab680d98b42c" 
                            alt="cart" 
                            className="w-20 h-20 max-w-[60px] rounded-full object-contain" 
                        />

                        <div className="flex flex-col gap-2">
                            <p className="text-gray-50">Cherry</p>
                            <p className="text-sm block text-gray-300 font-semibold">$2.3</p>
                        </div>

                        <div className="gropu flex items-center gap-2 ml-auto cursor-pointer">
                            <motion.div className="" whileTap={{ scale: 0.75}}>
                                <BiMinus className='text-gray-50' />
                            </motion.div>

                            <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-start justify-center">1</p>
                            
                            <motion.div className="" whileTap={{ scale: 0.75}}>
                                <BiPlus className='text-gray-50' />
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly p-4">
                    <div className="w-full flex items-center justify-between">
                        <p className="text-md text-gray-400">Sub Total</p>
                        <p className="text-md text-gray-400">$ 10.5</p>
                    </div>

                    <div className="w-full flex items-center justify-between">
                        <p className="text-md text-gray-400">Delivery</p>
                        <p className="text-md text-gray-400">$ 2.5</p>
                    </div>

                    <div className="w-full border-b border-gray-600"></div>

                    <div className="w-full flex items-center justify-between">
                        <p className="text-lg font-semibold text-gray-200">Total</p>
                        <p className="text-lg font-semibold text-gray-200">$ 13.0</p>
                    </div>
                </div>

                <motion.button 
                    className="w-full p-2 rounded-full bg-yellow-500 text-gray-50 text-lg my-2 hover:shadow-lg"
                    whileTap={{ scale: 0.8 }}
                    type='button'
                >
                    Check out
                </motion.button>
            </div>
        </motion.div>
    )
}

export default CartContainer