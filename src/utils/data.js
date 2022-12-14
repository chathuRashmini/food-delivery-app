import { GiChickenOven, GiBowlOfRice, GiFlatfish, GiFruitBowl } from 'react-icons/gi'
import { BiDish, BiDrink } from 'react-icons/bi'
import { FaIceCream } from 'react-icons/fa'

import Image1 from '../components/img/i1.png'
import Image2 from '../components/img/f1.png'
import Image3 from '../components/img/c3.png'
import Image4 from '../components/img/fi1.png'

export const heroData = [
    {
        name: 'Ice cream',
        decp: 'Chocolate and vanila',
        price: '5.25',
        imageSrc: Image1,
    },
    {
        name: 'Strawberries',
        decp: 'Fresh Strawberries',
        price: '10.25',
        imageSrc: Image2,
    },
    {
        name: 'Chicken',
        decp: 'Mixed Kebab Plate',
        price: '8.25',
        imageSrc: Image3,
    },
    {
        name: 'Fish',
        decp: 'Mixed Fish Kebab',
        price: '7.0',
        imageSrc: Image4,
    },
]

export const categories = [
    {
        name: 'Chicken',
        urlParamName: 'chicken',
        icon: <GiChickenOven />,
    },
    {
        name: 'Curry',
        urlParamName: 'curry',
        icon: <BiDish />,
    },
    {
        name: 'Rice',
        urlParamName: 'rice',
        icon: <GiBowlOfRice />,
    },
    {
        name: 'Fish',
        urlParamName: 'fish',
        icon: <GiFlatfish />,
    },
    {
        name: 'Fruits',
        urlParamName: 'fruits',
        icon: <GiFruitBowl />,
    },
    {
        name: 'Icecream',
        urlParamName: 'icecream',
        icon: <FaIceCream />,
    },
    {
        name: 'Soft Drinks',
        urlParamName: 'drinks',
        icon: <BiDrink />,
    },
]