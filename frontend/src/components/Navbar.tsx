import {useContext, useState} from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const {setShowSearch, getCartCount} = useContext(ShopContext)!;
    const location = useLocation();
    const navigate = useNavigate();

    const handleSearchClick = () => {
        if(location.pathname ==='./collection'){
            setShowSearch(true);
        } else {
            navigate('/collection');
            setTimeout(() => setShowSearch(true), 100);
        }
    }
  return (
    <div className='flex top-0 left-0 right-0 w-full z-50 border-0 bg-white shadow-md fixed items-center justify-between py-10 px-4 md:px-10 max-h-15 font-medium '>
        <img onClick={()=>setVisible(true)} className='w-5 min-w-5 cursor-pointer md:hidden'src={assets.list} alt='list' />

        <Link to={"/"} className='mr-6 sm:mr-8' >
        <img className='h-[clamp(2.2rem,2.5vw,3rem)] w-auto object-contain' src={assets.hikari_logo} alt='logo' />
        </Link>

        <ul className='hidden sm:flex gap-4 sm:gap-6 md:gap-6 lg:gap-12 md:max-w-[60%] md:text-sm lg:text-[1rem] text-gray-700 justify-center items-center md:flex-shrink-1'>
            <NavLink to='/' className='nav-item flex flex-col items-center gap-1 relative'>
                <p>HOME</p>
            </NavLink>

            <NavLink to='/collection' className='nav-item flex flex-col items-center gap-1 relative'>
                <p>COLLECTION</p>
            </NavLink>

            <NavLink to='/about' className='nav-item flex flex-col items-center gap-1 relative'>
                <p>ABOUT</p>
            </NavLink>

            <NavLink to='/contact' className='nav-item flex flex-col items-center gap-1 relative'>
                <p>CONTACT</p>
            </NavLink>

        </ul>
        <div className='flex items-center gap-3 md:gap-6 lg:gap-8'>
            <img onClick={handleSearchClick} className='min-w-5 w-5 cursor-pointer' src={assets.search}  alt='search' />
        
            {/*---Person Icon div----*/}
            <div className='group relative'>
                <img className='min-w-7 w-7 cursor-pointer' src={assets.person} alt='person'/>

                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Login</p>
                    </div>
                </div>
            </div> 
            <Link to={"/cart"} className='relative'>
                <img className='w-5 min-w-5' src={assets.bag} alt='bag'  />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            
        </div>

        {/* Sidebar menu for small scren */}
        <div className={`fixed top-0 right-0 bottom-0 bg-white transition-all ${visible ? 'w-2/3 left-0 shadow-xl border-none' : 'hidden'} `}>
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