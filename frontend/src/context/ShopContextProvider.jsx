import { ShopContext } from './ShopContext';
import {products} from "../assets/assets"
import { useEffect, useState } from 'react';
import {toast} from 'react-toastify';

const ShopContextProvider = (props)  => {

    const currency = '₹';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {

        if(!size){
            toast.error("Please select a size");
            return;
        }

        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
        console.log(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems){
            for(const size in cartItems[items]){
                try{
                    if(cartItems[items][size] > 0){
                        totalCount += cartItems[items][size];
                    }
                } catch(err){

                }
        }
    }
        return totalCount;
}

const updateQuantity =  async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
}


    const value =  {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount, updateQuantity
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;