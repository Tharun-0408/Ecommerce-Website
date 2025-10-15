import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* Hero Left Side*/}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 min-h-[300px] sm:py-0'>
            <div className='text-[#414141]'>
                
                <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                  <Link to='/collection' className='text-lg md:text-xl font-medium'>
                    <button className='bg-gray-900 text-white hover:bg-gray-600 px-4 py-2 rounded-sm cursor-pointer transition-colors duration-200 ease-in-out'>SHOP NOW 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline ml-3 mb-1 stroke-white chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                  </Link>  
                </div>
            </div>
        </div>
        {/* Hero Right Side*/}
        <img className='w-full object-cover sm:w-1/2' src={assets.hero} alt='' />
    </div>
  )
}

export default Hero;