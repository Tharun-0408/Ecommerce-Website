import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import type { Product } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

    const { products } = useContext(ShopContext)!;
    const [latestProducts, setLatestProducts] = useState<Product[]>([]);

    useEffect(() => {
      setLatestProducts(products.slice(0,15));
    },[])

  return (
    <div className='my-10'>
    <div className='text-center py-8 text-5xl'>
        <Title text1={'LATEST'} text2={' COLLECTIONS'}/>
 
    </div>

    {/* Render Products */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
        latestProducts.map((item, index)=>(
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} sizes={item.sizes} />
        ))
      }
    </div>

    </div>
  )
}

export default LatestCollection;