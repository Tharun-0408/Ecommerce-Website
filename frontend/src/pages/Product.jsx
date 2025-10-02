import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import {assets} from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [added, setAdded] =useState(false);

  const fetchProductData = async () => {

    products.find((item)=>{
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => {
    setAdded(false);
  },[size])
  
  useEffect(()=>{
    fetchProductData();
  },[productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*----------Product Data--------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

      {/*-----------------Product Image-------------- */}
      <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[20%] w-full '>
            {
              productData.image.map((item, index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} 
                     className='w-[25%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt='' />
              ))
            }
        </div>
        <div className='w-full sm:w-[80%]'>
          <img className='w-full h-auto' src={image} alt='' />
        </div>
      </div>

      {/* -------------------Product Info--------------*/}
      <div className='flex-1'>
        <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
        <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star} alt='' className='w-3 5' />
            <img src={assets.star} alt='' className='w-3 5' />
            <img src={assets.star} alt='' className='w-3 5' />
            <img src={assets.star} alt='' className='w-3 5' />
            <img src={assets.star} alt='' className='w-3 5' />
            <p className='pl-2'>(132)</p>
        </div>
        <p className='font-medium mt-2'>{currency}{productData.price}</p>
        <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
        <div className='flex flex-col gap-4 my-8'>
          <p>Select Size</p>
          <div className='flex gap-2'>
            {productData.sizes.map((item, index)=>(
              <button onClick={()=>setSize(item)} 
                      className={`flex items-center justify-center border border-gray-400 min-w-12 h-12 px-2 rounded-xl  cursor-pointer ${item === size ? 'bg-[#B22222] text-white font-medium border-none' : 'bg-white'}`} key={index}>{item}</button>
            ))}
          </div>
        </div>
        <button onClick={() => {/*setAdded(true);*/ addToCart(productData._id, size)}} /*work on the setAdded logic later*/
                className='bg-black text-white px-8 py-3 text-sm cursor-pointer active:bg-gray-700 '>{/*{added ? "GO TO CART" : "ADD TO CART"}*/}ADD TO CART</button>
                <hr className='border border-gray-300 mt-8 sm:w-4/5' />
                <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
                </div>
      </div>
      </div>

      {/* ----------- Description & Review Section -----------*/}
      <div className='mt-20'>
        <div className='flex'>
            <b className='border border-r-0 border-b-0 border-gray-400 px-5 py-3 text-sm'>Description</b>
            <p className='border border-b-0 border-gray-400 px-5 py-3 text-sm'>Reviews (125)</p>
        </div>
        <div className='flex flex-col gap-4 border border-gray-400 px-6 py-6 text-sm text-gray-500'>
            <p>AnimeVerse is the ultimate online destination for anime fans, offering a wide range of products from collectibles, plushies, and posters to clothing and accessories. Whether you're looking to decorate your space, upgrade your wardrobe, or find the perfect gift, AnimeVerse brings your favorite anime worlds to life with quality merchandise and a seamless shopping experience.</p>
            <p>Discover exclusive anime merchandise curated just for fans like you. Shop confidently with secure payments and fast delivery across the country.</p>
        </div>
      </div>

      {/*--------- display related products --------*/}

      <RelatedProducts  subCategory={productData.subCategory} currentId={productData._id} />


    </div>
  ) : <div className='opacity-0'></div>
}

export default Product