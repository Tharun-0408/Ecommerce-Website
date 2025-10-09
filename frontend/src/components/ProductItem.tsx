import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from "react-router-dom"


  interface ProductItemProps {
  id: string;
  name: string;
  price: number;
  image: string[];
  sizes?: string[];
}

const ProductItem = ({ id, image, name, price, sizes }: ProductItemProps) => {

    const { currency } = useContext(ShopContext)!;

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='flex flex-col border-gray-200 hover:shadow-xl min-h-80 px-2 '>
        <div className='overflow-hidden py-2'>
            <img src={image[0]} alt={name} />
        </div>
        <p className='pt-3 pb-1 text-base'>{name}</p>

          {sizes && sizes.length > 0 && (
          <p className='pt-1 text-sm text-gray-500 roboto-regular'>
          Sizes: {sizes.join(', ')}
          </p>
          )}

        <p className='text-sm pt-2 pb-2 roboto-medium'>{currency}{price}</p>
        </div>
    </Link>
  )
}

export default ProductItem;