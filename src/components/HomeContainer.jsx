import React from 'react'
import Delivery from './img/delivery.png'

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

            <div className="py-2 bg-blue-300 flex-1"></div>
        </section>
    )
}

export default HomeContainer