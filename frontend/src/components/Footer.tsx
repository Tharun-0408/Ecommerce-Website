import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import ScrollLink from '../context/ScrollLink';

const Footer = () => {

    const navigate = useNavigate();
  return (
    <div>
        <div className='flex flex-col sm:flex-row justify-center items-start mx-auto gap-14 my-10 mt-40 text-sm'>
  {/* Logo */}
  <div className='flex-1 flex-col items-center sm:items-start'>
      <img src={assets.hikari_logo} className='mb-5 pt-1.75 w-auto h-[1.85rem]' alt='' />
      <p className='w-full md:w-3/4 text-gray-600 sm:text-sm roboto-regular'>
       Hikari is a trendy jewellery brand offering stylish, modern pieces that combine quality, affordability, and unique design, letting you express your style every day.
      </p>
  </div>

  {/* Company */}
  <div className='flex-1 flex-col items-center sm:items-start'>
      <p className='text-[1.5rem] font-medium mb-4'>COMPANY</p>
      <ul className='flex flex-col gap-1 text-gray-600 roboto sm:text-base'>
          <ScrollLink to='/'><span className='hover:text-black hover:cursor-pointer'>Home</span></ScrollLink>
          <ScrollLink to='/about'><span className='hover:text-black hover:cursor-pointer'>About us</span></ScrollLink>
          <ScrollLink to='/orders'><span className='hover:text-black hover:cursor-pointer'>Delivery</span></ScrollLink>
          <li><span className='hover:text-black hover:cursor-pointer'>Privacy policy</span></li>
      </ul>
  </div>

  {/* Get in touch */}
  <div className='flex flex-col sm:items-start'>
      <p className='text-[1.5rem] font-medium mb-4'>GET IN TOUCH</p>
      <ul className='flex flex-col gap-1 text-gray-600 text-base roboto'>
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