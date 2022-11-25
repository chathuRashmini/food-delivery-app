import React, { useState } from 'react'
import { IoFastFood } from 'react-icons/io5'

import { categories } from '../utils/data'

const MenuContainer = () => {

    const [filter, setfilter] = useState('chicken')

    return (
        <section className="w-full my-8 md:my-0" id='menu'>
            <div className="flex w-full flex-col items-center justify-center">
                <p className="text-2xl font-semibold capitalized text-headingColor relative 
                    before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-200 to-orange-700
                    transition-all ease-in-out duration-100 mr-auto
                ">
                    Hot and Yummy Dsihes!
                </p>

                <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none mt-8">
                    { categories && categories.map((item, index) => (
                        <div className={`group ${filter === item.urlParamName ? 'bg-green-400' : 'bg-white'} w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col 
                            hover:bg-red-500 gap-3 items-center justify-center duration-150 transition-all ease-in-out`}
                        >
                            <div key={index} className={`w-10 h-10 rounded-full ${filter === item.urlParamName ? 'bg-card' : 'bg-red-500'} group-hover:bg-card flex items-center justify-center`}>
                                <span className={` ${filter === item.urlParamName ? 'text-green-400' : 'text-white'} text-lg group-hover:text-red-500`}>
                                    {item.icon}
                                </span>
                            </div>
                            <p className="text-sm text-textColor group-hover:text-white">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MenuContainer