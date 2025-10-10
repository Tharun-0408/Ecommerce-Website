import { createContext } from "react";
import {products} from "../assets/assets"

export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string[];
    subCategory: string;
    sizes: string[];
    bestseller: boolean;
}

export interface CartItems {
    [itemId: string]:{
    [size: string]: number;
    }
}

export interface ShopContextType {
    products: Product[];
    currency: string;
    delivery_fee: number;
    search: string;
    setSearch: (search: string) => void;
    showSearch: boolean;
    setShowSearch: (showSearch: boolean) => void;
    cartItems: CartItems;
    addToCart: (itemId: string, size: string) => void;
    getCartCount: () => number;
    updateQuantity: (itemId: string, size: string, quantity: number) => void;

}


export const ShopContext = createContext<ShopContextType | null>(null);

