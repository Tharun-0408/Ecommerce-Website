import {useContext, useState} from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const {setShowSearch, getCartCount} = useContext(ShopContext)!;
  return (
    <div className='flex top-0 left-0 right-0 w-full z-50 border-0 bg-white shadow-md fixed items-center justify-between py-10 px-12 max-h-15 font-medium '>
        <Link to={"/"} className='mr-6 sm:mr-8' >
        <img className='h-[clamp(2.2rem,2.5vw,3rem)] w-auto object-contain' src={assets.hikari_logo} alt='logo' />
        </Link>

        <ul className='hidden md:flex gap-4 sm:gap-6 sm:max-w-[90%] md:gap-10 lg:gap-20 md:max-w-[60%] text-sm text-gray-700 justify-center items-center mx-10 sm:flex-shrink-1 md:flex-shrink-1 lg:flex-shrink-1'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

        </ul>
        <div className='flex items-center gap-6'>
            <img onClick={()=>setShowSearch(true)} className='min-w-5 w-5 cursor-pointer' src={assets.search}  alt='search' />
        

            <div className='group relative'>
                <img className='min-w-7 w-7 cursor-pointer' src={assets.person} alt='person'/>

                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to={"/cart"} className='relative'>
                <img className='w-5 min-w-5' src={assets.bag} alt='bag'  />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <img onClick={()=>setVisible(true)} className='w-5 min-w-5 cursor-pointer md:hidden'src={assets.list} alt='list' />
        </div>

        {/* Sidebar menu for small scren */}
        <div className={`fixed top-0 right-0 bottom-0 bg-white transition-all ${visible ? 'w-full' : 'hidden'} `}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-2 p-3 cursor-pointer'>
                    <img className='h-4 rotate-180' src={assets.dropdown} alt="dropdown" />
                    <p>Back</p>
                </div>
                
                <NavLink onClick={()=>setVisible(false)} to='/' className='py-2 pl-6 border'>HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} to='/collection' className='py-2 pl-6 border'>COLLECTION</NavLink>
                <NavLink onClick={()=>setVisible(false)} to='/about' className='py-2 pl-6 border'>ABOUT</NavLink>
                <NavLink onClick={()=>setVisible(false)} to='/contact' className='py-2 pl-6 border'>CONTACT</NavLink>
                
            </div>
        </div>

    </div>
  )
}

export default Navbar;