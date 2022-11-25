import React, { useEffect, useRef } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'

import NotFound from './img/NotFound.svg'

const RowContainer = ({ data, flag, scrollValue }) => {

    const rowContainer = useRef()

    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue
    }, [scrollValue])

    return (
        <div ref={rowContainer} className={`w-full mt-8 mb-2 flex items-center justify-center gap-3 scroll-smooth
            ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap'}`}
        >
            { data?.length > 0  ? (
                data.map((item, index) => (
                    <div key={index} className="w-auto h-[175px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
                        <div className="w-full flex items-center justify-between">
                            <motion.div className="w-20 h-20 lg:w-36 lg:h-36 -mt-8 drop-shadow-2xl"  whileHover={{ scale: 1.2 }}>
                                <img 
                                    src={item.imageURL}
                                    alt={item.title} 
                                    className="w-full h-full object-contain" 
                                />
                            </motion.div>
    
                            <motion.div 
                                className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-red-500 flex items-center justify-center"
                                whileTap={{ scale: 0.75 }}
                            >
                                <MdShoppingBasket className='text-white' />
                            </motion.div>
                        </div>
    
                        <div className="w-full flex items-end justify-between">
                            <p className="text-textColor font-semibold text-base md:text-lg">
                                {item.title}
                            </p>
                                <div className="flex items-center gap-8">
                                    <p className="text-lg text-textColor font-semibold">
                                        <span className="text-sm text-red-400">$ </span>{item.price}
                                    </p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="w-full flex flex-col items-center justify-center">
                    <img src={NotFound} alt='No items' className='h-340' />
                    <p className="text-xl text-headingColor my-4">Not items available</p>
                </div>
            )}
        </div>
    )
}

export default RowContainer