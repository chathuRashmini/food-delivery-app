import React from 'react'
import { motion } from 'framer-motion'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import HomeContainer from './HomeContainer'

const MainContainer = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center">
            <HomeContainer />

            <section className="w-full my-10">
                <div className="w-full flex items-center justify-between">
                    <p className="text-2xl font-semibold capitalized text-headingColor relative 
                        before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-200 to-orange-700
                        transition-all ease-in-out duration-100
                    ">
                        Fresh and healthy fruits just for you!
                    </p>

                    <div className="hidden md:flex items-center justify-center gap-3">
                        <motion.div 
                            whileTap={{ scale: 0.75 }}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg"
                        >
                            <MdChevronLeft className='text-lg text-white font-bold' />
                        </motion.div>
                        <motion.div 
                            whileTap={{ scale: 0.75 }}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg"
                        >
                            <MdChevronRight className='text-xl text-white font-bold' />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainContainer