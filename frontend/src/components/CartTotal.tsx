import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';
import Title from './Title';

const CartTotal = () => {
    const shopContext = useContext(ShopContext);
    if(!shopContext) return null;

    const { currency, delivery_fee, getCartAmount } = shopContext;

        const cartAmount = getCartAmount();
        const total = cartAmount === 0 ? 0 : cartAmount + delivery_fee;

    return(
        <div className='w-full'>
            <div className='text-2xl'>
                <Title text1={'CART'} text2={' TOTAL'}/>
            </div>

            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{currency} {cartAmount}.00</p>
                </div>
                <hr/>
                <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    <p>{currency} {delivery_fee}</p>
                </div>
                <hr/>
                <div className='flex justify-between'>
                    <b>Total</b>
                    <b>{currency} {total} </b>
                </div>
            </div>

        </div>
    )
}

export default CartTotal
