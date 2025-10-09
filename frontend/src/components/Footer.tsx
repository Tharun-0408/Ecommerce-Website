import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();
  return (
    <div>
        <div className='flex flex-col sm:flex-row justify-center items-start mx-auto gap-14 my-10 mt-40 text-sm'>
  {/* Logo */}
  <div className='flex-1 flex-col items-center sm:items-start'>
      <img src={assets.hikari_logo} className='mb-5 pt-1.75 w-auto h-[1.85rem]' alt='' />
      <p className='w-full md:w-3/4 text-gray-600 text-center sm:text-left'>
        Hikari is a trendy jewellery brand offering stylish, modern pieces with a cool aesthetic, perfect for adding a touch of elegance and personality to any look. Each piece is crafted to combine quality, affordability, and unique design, letting you express your individual style every day.
      </p>
  </div>

  {/* Company */}
  <div className='flex-1 flex-col items-center sm:items-start'>
      <p className='text-[1.5rem] font-medium mb-4'>COMPANY</p>
      <ul className='flex flex-col gap-1 text-gray-600'>
          <li onClick={()=> navigate('/')}><span className='hover:text-black hover:cursor-pointer'>Home</span></li>
          <li onClick={()=> navigate('/about')}><span className='hover:text-black hover:cursor-pointer'>About us</span></li>
          <li onClick={()=> navigate('/orders')}><span className='hover:text-black hover:cursor-pointer'>Delivery</span></li>
          <li><span className='hover:text-black hover:cursor-pointer'>Privacy policy</span></li>
      </ul>
  </div>

  {/* Get in touch */}
  <div className='flex flex-col items-center sm:items-start'>
      <p className='text-[1.5rem] font-medium mb-4'>GET IN TOUCH</p>
      <ul className='flex flex-col gap-1 text-gray-600'>
          <li>+1-212-456-7890</li>
          <li>tharunreddy04.work@gmail.com</li>
      </ul>
  </div>

</div>
    <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright <img src={assets.copyright} className='inline w-[0.8rem] h-[0.8rem] mx-1' /> 2025 Hikari - All Rights Reserved.</p>
    </div>
    </div>
  )
}

export default Footer;