import { useContext, useEffect, useState, useRef } from 'react';
import { ShopContext } from '../context/ShopContext';
import type { Product } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

interface RelatedProductsProps {
    subCategory: string;
    currentId: string;
}

const RelatedProducts = ({ subCategory, currentId }: RelatedProductsProps) => {

    const { products } = useContext(ShopContext)!;
    const [related, setRelated] = useState<Product[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    useEffect(() => {
        if(products.length > 0){
            const filtered = products.filter((item) => subCategory === item.subCategory && item._id !== currentId);
            setRelated(filtered);
        }
    },[products, currentId, subCategory])

  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={'RELATED'} text2={'PRODUCTS'} />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item, index) => (
                <ProductItem key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} />
            ))}
        </div>

    </div>
  )
}

export default RelatedProducts;