import { useContext, useEffect, useState } from 'react';
import type { FC } from 'react';
import type { Product } from '../context/ShopContext';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection: FC = () => {

  const { products, search, showSearch} = useContext(ShopContext)!;
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);
  const [subCategory, setSubCategory] = useState<string[]>([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleSubCategory = (e: React.ChangeEvent<HTMLInputElement>) => {

    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {

    let productsCopy = [...products];
    
    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy)

  }

  const sortProduct = () => {

    let fpCopy = [...filterProducts];

    switch (sortType) {
      case 'low-high':
        setFilterProducts([...fpCopy].sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts([...fpCopy].sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(()=>{
    applyFilter();
  },[products, subCategory, search, showSearch])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-0'>

    {/* Right Side */}
    <div className='flex-1'>
      
    <div className='flex justify-between sm:text-3xl mb-4'>
      <Title text1={'ALL '} text2={'COLLECTIONS'} />
      {/* Product Sort */}
      <div className='relative inline-block'>
      <select id='sort' onChange={(e)=>setSortType(e.target.value)} className='appearance-none border-2 border-gray-400 text-[0.7rem]  sm:text-sm md:text-base lg:text-base cursor-pointer pl-2 pr-4 py-1 w-[8.5rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem] rounded-xs h-8 sm:h-9 md:h-10 '>
        <option value="relevant">Sort by: Relevance</option>
        <option value="low-high">Sort by: Low to High</option>
        <option value="high-low">Sort by: High to Low</option>
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-1 flex items-center px-2 md:px-4 sm:px-2 max-[360px]:top-[-40%]'>
        <img src={assets.select} className='w-3 h-3 sm:w-3 sm:h-4' alt='' />
      </div>
      </div>
    </div>
    {/*Filter options */}
    <div className='pl-2 accent-blue-500'>
      <p onClick={()=>setShowFilter(prev => !prev)} className='mt-2 text-md flex items-center cursor-pointer gap-2'>FILTERS
        <img className={`h-3 sm:hidden transition-transform duration-100 ease-in-out ${showFilter ? 'rotate-90' : ''}`} src={assets.filter} />
      </p>
      {/* Category filter 
      <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700 '>
          <p className='flex gap-2'>
            <input className='w-3 cursor-pointer' type='checkbox' value={'Men'} /> Men
          </p>
          <p className='flex gap-2'>
            <input className='w-3 cursor-pointer' type='checkbox' value={'Women'} /> Women
          </p>
          <p className='flex gap-2'>
            <input className='w-3 cursor-pointer' type='checkbox' value={'Kids'} /> Kids
          </p>
        </div>
      </div> */}

      {/* Sub Category Filter */}
      <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:inline-block sm:min-w-53`}>
        <p className='mb-3 text-sm font-medium'>TYPE</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input className='w-3 cursor-pointer' id='Accesories' type='checkbox' value={'Accessories'} onChange={toggleSubCategory} /> Accessories
          </p>
          <p className='flex gap-2'>
            <input className='w-3 cursor-pointer' id='Clothing' type='checkbox' value={'Clothing'} onChange={toggleSubCategory} /> Clothing
          </p>
          <p className='flex gap-2'>
            <input className='w-3 cursor-pointer' id='Collectibles' type='checkbox' value={'Collectibles'} onChange={toggleSubCategory} /> Collectibles
          </p>
          <p className='flex gap-2'>
            <input className='w-3 cursor-pointer' id='Merchandise' type='checkbox' value={'Merchandise'} onChange={toggleSubCategory} /> Merchandise
          </p>
          <p className='flex gap-2'>
            <input className='w-3 cursor-pointer' id='Plushies' type='checkbox' value={'Plushies'} onChange={toggleSubCategory} /> Plushies
          </p>
          <p className='flex gap-2'>
            <input className='w-3 cursor-pointer' id='Posters' type='checkbox' value={'Posters'} onChange={toggleSubCategory} /> Posters
          </p>
   
        </div>
      </div>
    </div>

    {/* Map Products */}
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-6'>
      {
        filterProducts.map((item, index)=>(
          <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} sizes={item.sizes}/>
        ))
      }
    </div>

    </div>

    </div>

  )
}

export default Collection