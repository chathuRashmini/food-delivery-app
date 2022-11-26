import { fetchCartItems, fetchUser } from "../utils/fetchLocalStorageData"

const userInfo = fetchUser()
const cartItemsInfo = fetchCartItems()

export const initialState = {
    user: userInfo,
    foodItems: null,
    cartShow: false,
    cartItems: cartItemsInfo,
}