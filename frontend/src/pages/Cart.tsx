import { useEffect, useState, useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import {  useNavigate } from 'react-router-dom';
import {assets} from '../assets/assets'
import CartTotal from '../components/CartTotal';

  interface CartItemData {
    _id: string;
    size: string;
    quantity: number;
  }

const Cart = () => {

  const shopContext = useContext(ShopContext);
  const navigate = useNavigate();
  if(!shopContext) return null;

  const{ products, currency, cartItems, updateQuantity } = shopContext;
  const [cartData, setCartData] = useState<CartItemData[]>([]);

  useEffect(() => {

    const tempData: CartItemData[] = Object.entries(cartItems).flatMap(
      ([itemId, sizes]) =>
        sizes
          ? Object.entries(sizes)
              .filter(([_, quantity]) => quantity > 0)
              .map(([size, quantity]) => ({ _id: itemId, size, quantity }))
          : []
);
    setCartData(tempData);
  }, [cartItems])

  if(cartData.length === 0){
    return (
      <div className='flex flex-col items-center justify-center h-[70vh] text-center text-gray-600'>
        <img src={assets.empty_cart} alt='empty cart' className='w-24 mr-6 sm:w-32 mb-6 opacity-80' />
        <h2 className='text-2xl font-semibold mb-3'>Your Cart is Empty</h2>
        <button onClick={()=> navigate('/collection')}
                className="px-8 py-2 bg-black text-white rounded-[0.25rem] hover:bg-gray-800 transition-all">
                  START SHOPPING
                </button>
      </div>
    );
  }

  return (
    <div className='pt-10'>
      <div className='text-3xl mb-3'>
        <Title text1={'YOUR'} text2={' CART'}/>
      </div>

      <div>
        {
          cartData.map((item, index)=>{

            const productData = products.find((product)=>product._id === item._id);

            return (
              <div key={index} className='py-4 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  {productData && (
                    <img className='w-16 sm:w-20' src={productData.image[0]} alt='' />
                  )}
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData?.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData?.price}</p>
                      <p className='text-center min-w-10 px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value)) } className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type='number' min={1} defaultValue={item.quantity} />
                <img onClick={()=>updateQuantity(item._id, item.size, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer ' src={assets.bin} alt='' />
              </div>
            )
        })
      }
      </div>
        <div className='flex justify-end my-20'>
          <div className='w-full sm:w-[450px]'>
            <CartTotal />
            <div className='flex justify-end cursor-pointer'>
            <div className='inline-block text-end mt-6 px-3 py-3 bg-black text-white'>
              <button className='cursor-pointer'>PROCEED TO CHECKOUT</button>
            </div>
            </div>
          </div>

        </div>
    </div>
      
  )
}

export default Cart