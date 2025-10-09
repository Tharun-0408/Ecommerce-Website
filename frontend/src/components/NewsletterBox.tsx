const NewsletterBox = () => {

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>)=>{
      event.preventDefault();
  }

  return (
    <div className='text-center'>
        <p className='text-xl font-semibold text-gray-800'>Subscribe now & get 20% off</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input name='email' className='w-full outline-none' type='email' placeholder='Enter your email' required />
            <button type='submit' 
                    className='bg-black text-white hover:bg-gray-900 text-xs px-10 py-4 cursor-pointer'>
                    SUBSCRIBE
            </button>
        </form>
    </div>
  )
}

export default NewsletterBox;