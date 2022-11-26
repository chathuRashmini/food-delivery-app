import React, { useEffect, useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { motion } from 'framer-motion'

import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer'

const CartItem = ({item, index}) => {

    const [qty, setqty] = useState(item.qty)
    const [items, setitems] = useState([])

    useEffect(() => {
        setitems(cartItems)
    }, [items])
    

    const [{ cartItems }, dispatch] = useStateValue()

    const cartDispatch = () => {
        localStorage.setItem('cartItems', JSON.stringify(items))
        dispatch({
            type: actionType.SET_CART_ITEMS,
            cartItems: items
        })
    }

    const updateQty = (action, id) => {
        if (action === 'add') {
            console.log('add item: ', id)
            setqty(qty + 1)
            cartItems.map((item) => {
                if (item.id === id) {
                    item.qty += 1
                }
            })
            cartDispatch()
        } else {
            console.log('remove item: ', id)
            if (qty === 1) {
                setitems(cartItems.filter((item) => item.id !== id))
                cartDispatch()
            } else {
                setqty(qty - 1)
                cartItems.map((item) => {
                    if (item.id === id) {
                        item.qty -= 1
                    }
                })
                cartDispatch()
            }
        }
    }

    return (
        <div key={index} className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
            <img 
                src={item?.imageURL} 
                alt={item?.title}
                className="w-20 h-20 max-w-[60px] rounded-full object-contain" 
            />

            <div className="flex flex-col gap-2">
                <p className="text-gray-50">{item?.title}</p>
                <p className="text-sm block text-gray-300 font-semibold">$ {parseFloat(item?.price) * qty}</p>
            </div>

            <div className="gropu flex items-center gap-2 ml-auto cursor-pointer">
                <motion.div className="" whileTap={{ scale: 0.75}} onClick={() => updateQty('remove', item?.id)}>
                    <BiMinus className='text-gray-50' />
                </motion.div>

                <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-start justify-center">{qty}</p>
                
                <motion.div className="" whileTap={{ scale: 0.75}} onClick={() => updateQty('add', item?.id)}>
                    <BiPlus className='text-gray-50' />
                </motion.div>
            </div>
        </div>
    )
}

export default CartItem