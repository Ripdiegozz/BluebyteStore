import client from '@/lib/client.js'
import { HeroBanner, ProductCard } from '../components/Index.js'
import Link from 'next/link.js'

export default function Home ({ laptops, featured, processors }) {
  return (
    <div>
      <HeroBanner image='https://th.bing.com/th/id/R.1f2abb33e820bd5b31ecd83a733ed17b?rik=JmB3ofKK274GXA&pid=ImgRaw&r=0' />
      <div className='text-center'>
        <h2 className='text-xl p-6 font-bold text-gray-900 sm:text-3xl'>
          Brand New Products!
        </h2>
      </div>
      <div className='flex pt-6 flex-wrap mx-auto gap-6 w-[90vw] justify-center'>
        {laptops.map((pr) => {
          return (
            <ProductCard key={pr._id} product={pr} />
          )
        })}
        {processors.map((pr) => {
          return (
            <ProductCard key={pr._id} product={pr} />
          )
        })}
      </div>
      <section>
        <div className='max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch'>
            <div className='grid p-6 bg-gray-100 rounded place-content-center sm:p-8'>
              <div className='max-w-md mx-auto text-center lg:text-left'>
                <header>
                  <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>Best Sellers</h2>

                  <p className='mt-4 text-gray-500'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                    rerum quam amet provident nulla error!
                  </p>
                </header>

                <Link
                  href='/products'
                  className='inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring'
                >
                  Shop All
                </Link>
              </div>
            </div>

            <div className='lg:col-span-2 lg:py-8'>
              <ul className='grid grid-cols-2 gap-4'>
                {
                  featured.map((pr) => {
                    return (
                      <li key={pr.id}>
                        <a href='#' className='block group'>
                          <img
                            src={pr.image}
                            alt={pr.title}
                            className='object-cover w-full rounded aspect-square'
                          />

                          <div className='mt-3'>
                            <h3
                              className='font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4'
                            >
                              {pr.title}
                            </h3>

                            <p className='mt-1 text-sm text-gray-700'>${pr.price}</p>
                          </div>
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps () {
  const laptopsQuery = '*[_type == "product" && category == "Laptops"]'
  const laptops = await client.fetch(laptopsQuery)
  const processorsQuery = '*[_type == "product" && category == "Processors"]'
  const processors = await client.fetch(processorsQuery)
  const featuredQuery = await fetch('https://fakestoreapi.com/products/category/electronics?limit=2&sort=desc')
  const featured = await featuredQuery.json()
  return {
    props: {
      laptops,
      processors,
      featured
    }
  }
}
