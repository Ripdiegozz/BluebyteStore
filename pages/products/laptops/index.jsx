import React from 'react'
import client from '@/lib/client'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import { ProductCard, Banner } from '@/components/Index'

const Products = ({ data }) => {
  return (
    <div>
      <div className='text-center flex items-center gap-12'>
        <div className='text-center'>
          <Link href='/' className='text-md font-bold py-10 text-gray-900 sm:text-md flex items-center gap-2'><FiArrowLeft />Home</Link>
        </div>
        <div className='mx-auto'>
          <h2 className='text-xl p-10 font-bold text-gray-900 sm:text-3xl' id='category-title'>
            All our products!
          </h2>
        </div>
      </div>

      <div className='mx-auto flex flex-wrap gap-2 items-center justify-center p-4'>
        <Link href='/products'>
          <button className='px-4 py-1 border-2 hover:border-black transition-colors'>All</button>
        </Link>
        <Link href='/products/proccesors'>
          <button className='px-4 py-1 border-2 hover:border-black transition-colors'>Processors</button>
        </Link>
        <Link href='/products/laptops'>
          <button className='px-4 py-1 border-2 hover:border-black transition-colors'>Laptops</button>
        </Link>
        <Link href='/products/graphic-cards'>
          <button className='px-4 py-1 border-2 hover:border-black transition-colors'>Graphic cards</button>
        </Link>
        <Link href='/products/motherboards'>
          <button className='px-4 py-1 border-2 hover:border-black transition-colors'>Motherboards</button>
        </Link>
        <Link href='/products/headphones'>
          <button className='px-4 py-1 border-2 hover:border-black transition-colors'>Headphones</button>
        </Link>
      </div>

      <div className='flex flex-wrap gap-10 justify-center w-full'>
        {
              data.map((pr) => {
                return (
                  <ProductCard product={pr} key={pr._id} />
                )
              })
          }
      </div>

      <Banner />

    </div>
  )
}

export async function getServerSideProps () {
  const query = '*[_type == "product" && category == "Laptops"]'
  const data = await client.fetch(query)

  return {
    props: {
      data
    }
  }
}

export default Products
