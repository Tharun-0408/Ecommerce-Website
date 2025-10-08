import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={assets.hikari_logo} className='mb-5 pt-1.5 pb-1 w-28' alt='' />
                <p className='w-full md:w-3/4 text-gray-600'>
                    <span className='font-semibold text-black'>AnimeVerse - Your one-stop shop for authentic anime merchandise.</span> Discover premium apparel, collectibles, and accessories inspired by your favorite series. We bring high-quality, officially themed products to anime fans everywhere.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-9'>COMPANY</p>
                <ul className='flex flex-col hover:cursor-pointer gap-1 text-gray-600'>
                    <li className='hover:text-red-600' onClick={()=> navigate('/')}>Home</li>
                    <li className='hover:text-red-600' onClick={()=> navigate('/about')}>About us</li>
                    <li className='hover:text-red-600' onClick={()=> navigate('/orders')}>Delivery</li>
                    <li className='hover:text-red-600' >Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>contact@animeverse.com</li>
                </ul>
            </div>
        </div>
        <div>
                        <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Animeverse.com - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer;