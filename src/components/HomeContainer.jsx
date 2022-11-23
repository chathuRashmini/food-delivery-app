import React from 'react'

import { heroData } from '../utils/data'

import Delivery from './img/delivery.png'
import HeroBg from './img/heroBg.png'


const HomeContainer = () => {
    return (
        <section id='home' className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
            <div className="px-2 py-2 flex-1 flex flex-col items-start md:items-center justify-center gap-6">
                <div className="flex items-center gap-2 justify-center rounded-full bg-orange-100 p-2">
                    <p className="text-orange-500 font-semibold">Bike Delivery</p>
                    <div className="w-8 h-8 rounded-full overflow-hidden drop-shadow-xl">
                        <img src={Delivery} alt="delivery" className='w-full h-full object-contain bg-white' />
                    </div>
                </div>

                <p className="text-[2.5rem] md:text-[4.5rem] font-semibold tracking-wide text-headingColor">
                    The fastest delivery in <span className="text-orange-600 font-bold text-[3rem] lg:text-[5rem]">Your city</span>!
                </p>

                <p className="text-textColor text-center md:text-left lg:w-[80%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Temporibus impedit obcaecati distinctio mollitia nemo doloribus tempore error dolorem beatae! 
                    Maiores at eaque facere corrupti! 
                    Tempora accusamus voluptatem ex deleniti. Dolorum?
                </p>

                <button className="bg-gradient-to-br from-orange-200 to-orange-500 w-full md:w-auto text-white p-4 px-4 py-2 rounded-lg shadow-lg transition-all ease-in-out duration-100" type='button'>
                    Order Now!
                </button>
            </div>

            <div className="py-2 flex-1 flex items-center relative mt-4 lg:mt-0">
                <img src={HeroBg} alt="hero-bg" className="h-300 w-full lg:w-auto md:h-600 ml-auto" />

                    <div className="min-w-[190px] h-full absolute flex items-center justify-center gap-4 flex-wrap">
                        { heroData.map((item, index) => (
                            <div key={index} className="w-auto p-4 bg-cardOverlay backdrop-blur-md rounded-lg flex flex-col items-center shadow-lg mt-12 md:mt-0">
                                <img 
                                    src={item.imageSrc} 
                                    alt="icecream" 
                                    className="w-28 lg:w-40 -mt-16" 
                                />
                                <p className="font-normal lg:font-semibold mt-3 text-textColor text-md lg:text-lg">{item.name}</p>
                                <p className="hidden md:flex lg:text-sm text-textColor my-2">{item.decp}</p>
                                <p className="text-sm font-normal lg:font-semibold text-headingColor"><span className="text-red-600">$ </span>{item.price}</p>
                            </div>
                        ))}
                    </div>
                
            </div>
        </section>
    )
}

export default HomeContainer