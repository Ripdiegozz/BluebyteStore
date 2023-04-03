import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'
import Image from 'next/image'

const ProductCard = ({ product: { image, slug, name, price } }) => {
  return (
    <Link href={`/product/${slug.current}`} className='min-h-[350px] max-w-[250px] flex flex-col justify-center gap-2 p-2 hover:border-2'>
      <Image src={urlFor(image[0]).url()} width={300} height={300} alt={name} />
      <div className='mt-3'>
        <h3
          className='font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4'
        >
          {name}
        </h3>

        <p className='mt-1 text-sm text-gray-700'>${price}</p>
      </div>
    </Link>

  )
}

export default ProductCard
