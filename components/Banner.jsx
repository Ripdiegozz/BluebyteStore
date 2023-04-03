import React from 'react'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className='flex flex-col w-full p-6 m-4 items-center justify-center mx-auto md:flex-none bg-gray-200'>
      <div className='flex flex-col items-center justify-center gap-6 bg-gray-200 w-[50%] w-full p-8'>
        <h2 className='text-4xl font-bold'>Best Products</h2>
        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quos corporis tenetur, atque libero quisquam enim expedita officia animi?</p>
        <Link href='/products' className='mt-2 py-3 px-4 bg-black text-white rounded-md'>Shop All</Link>
      </div>
    </div>
  )
}

export default Banner
