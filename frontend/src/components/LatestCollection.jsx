import React, {use, useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import {products} from "../assets/assets"

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
      setLatestProducts(products.slice(0,10));
    },[])

    console.log(products);
  return (
    <div className='my-10'>
    <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={' COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        This is a sample text to check how the text will look like in this section.
        </p>
    </div>
    </div>
  )
}

export default LatestCollection