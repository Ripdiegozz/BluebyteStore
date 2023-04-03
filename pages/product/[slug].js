import React, { useState } from 'react'
import client, { urlFor } from '@/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import { ProductCard } from '@/components/Index'
import { FiArrowLeft } from 'react-icons/fi'
import { useStateContext } from '@/context/stateContext'

const ProductDetails = ({ product, relatedProducts }) => {
  const { name, price, details, image } = product
  const [index, setIndex] = useState(0)
  const { incQty, decQty, qty, onAdd } = useStateContext()

  return (
    <section className='pt-8'>
      <div className='relative mx-auto max-w-screen-xl px-4 py-8'>
        <div className='grid grid-cols-1 items-start gap-8 md:grid-cols-2'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-1'>
            <img
              alt={name}
              src={urlFor(image[index]).url()}
              className='aspect-square w-full rounded-xl object-cover'
            />
          </div>

          <div className='min-[320px]:max-[600px]:static md:sticky top-0 pl-1'>
            <strong
              className='rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600'
            >
              Best selling
            </strong>

            <div className='mt-8 flex justify-between'>
              <div className='max-w-[35ch] space-y-2'>
                <h1 className='text-xl font-bold sm:text-2xl'>
                  {name}
                </h1>

                <p className='text-sm'>Highest Rated Product</p>

                <div className='-ml-0.5 flex'>
                  <svg
                    className='h-5 w-5 text-yellow-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                    />
                  </svg>

                  <svg
                    className='h-5 w-5 text-yellow-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                    />
                  </svg>

                  <svg
                    className='h-5 w-5 text-yellow-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                    />
                  </svg>

                  <svg
                    className='h-5 w-5 text-yellow-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                    />
                  </svg>

                  <svg
                    className='h-5 w-5 text-gray-200'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'
                    />
                  </svg>
                </div>
              </div>

              <p className='text-lg font-bold'>${price}</p>
            </div>

            <div className='mt-4'>
              <div className='prose max-w-none'>
                <p>
                  {details}
                </p>
              </div>

              <button className='mt-2 text-sm font-medium underline py-4'>Read More</button>
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor='Quantity' className='sr-only'> Quantity</label>
              <h2>Quantity:</h2>
              <div className='flex items-center'>
                <button
                  type='button'
                  className='w-10 h-10 text-center leading-10 border-2 text-gray-600 transition hover:opacity-75'
                  onClick={() => decQty()}
                >
                  &minus;
                </button>

                <input
                  type='number'
                  id='Quantity'
                  value={qty}
                  className='h-10 border-2 border-gray-400 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none'
                  disabled
                />

                <button
                  type='button'
                  className='w-10 h-10 border-2 text-center leading-10 text-gray-600 transition hover:opacity-75'
                  onClick={() => incQty()}
                >
                  &#43;
                </button>
              </div>
            </div>

            <button
              type='submit'
              className='block mt-8 rounded bg-[#4b6bfb] px-5 py-4 text-xs font-medium text-white hover:bg-[#0B37FA]'
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
          </div>

          <div className='w-full flex flex-wrap gap-2 items-center justify-center'>
            {
              image.map((img, i) => {
                return (
                  <Image src={urlFor(img).url()} alt={img._key} height={100} width={100} key={img._key} onClick={() => setIndex(i)} className='border-2 cursor-pointer object-fit h-[100px] w-[100px] bg-gray-200 p-2 rounded-md' />
                )
              })
            }
          </div>
        </div>
      </div>

      <div className='mx-auto pb-10'>
        <div className='text-center flex items-center gap-12'>
          <div className='text-center'>
            <Link href='/' className='text-md font-bold py-10 text-gray-900 sm:text-md flex items-center gap-2'><FiArrowLeft />Home</Link>
          </div>
          <div className='mx-auto'>
            <h2 className='text-xl p-10 font-bold text-gray-900 sm:text-3xl' id='category-title'>
              Related products ;)
            </h2>
          </div>
        </div>
        <div className='flex flex-wrap gap-16 items-center justify-center w-full'>
          {
            relatedProducts.map((pr) => {
              return (
                <ProductCard key={pr._id} product={pr} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    },
    category
  }
  `

  const products = await client.fetch(query)
  // console.log(products)
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
      category: product.category
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`
  const product = await client.fetch(query)

  const query2 = `*[_type == "product" && category == '${product.category}']`
  const relatedProducts = await client.fetch(query2)
  return {
    props: {
      product,
      relatedProducts
    }
  }
}

export default ProductDetails
