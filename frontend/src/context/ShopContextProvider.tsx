import { ShopContext} from './ShopContext';
import type { ShopContextType, CartItems } from './ShopContext';
import {products} from "../assets/assets"
import { useEffect, useState } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    children: React.ReactNode;
}

const ShopContextProvider = ({children}: Props)  => {

    const currency = '₹';
    const delivery_fee = 10;
    const [search, setSearch] = useState<string>('');
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<CartItems>({});

    const addToCart = (itemId: string, size: string) => {

        if(!size){
            console.log("popup triggered");
            toast.error("Please select a size");
            return;
        }

        const cartData: CartItems = structuredClone(cartItems);

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

const getCartCount = (): number => {
  let totalCount = 0;
  for (const itemId in cartItems) {
    const itemSizes = cartItems[itemId];
    if (!itemSizes) continue;

    for (const size in itemSizes) {
      const quantity = itemSizes[size] ?? 0;
      if (quantity > 0) {
        totalCount += quantity;
      }
    }
  }
  return totalCount;
};

const updateQuantity = (itemId: string, size:string, quantity:number) => {
    const cartData = structuredClone(cartItems);

    //initializing itemId if not present
    if (!cartData[itemId]) {
        cartData[itemId] = {};
    }
  

    cartData[itemId][size] = quantity;
    setCartItems(cartData);
}


    const value: ShopContextType =  {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount, updateQuantity
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;