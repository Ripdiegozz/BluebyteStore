import React from 'react'
import Link from 'next/link'
import { useStateContext } from '@/context/stateContext'
import { AiOutlineShopping } from 'react-icons/ai'

const Header = () => {
  const { totalQuantities, totalPrice, qty, decQty, incQty } = useStateContext()

  return (
    <nav className='fixed w-full bg-base-100 z-10 shadow-md'>
      <div className='navbar mx-auto bg-base-100 w-full mx-auto md:w-[85vw]'>

        <div className='flex-1'>
          <a className='btn btn-ghost normal-case text-xl' href='/'>
            <img src='/favicon.webp' alt='bluebyte-icon' className='hidden md:w-10 md:flex' />
            Bluebyte
          </a>
        </div>

        <div className='flex gap-2'>

          <div className='flex items-center gap-2'>
            <Link href='/products' className='font-bold'>Products</Link>
          </div>

          <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='btn btn-ghost btn-circle'>
              <div className='indicator'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' /></svg>
                <span className='badge badge-sm indicator-item'>{totalQuantities}</span>
              </div>
            </label>
            {totalQuantities === 0 &&
              <div tabIndex={0} className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'>
                <div className='card-body w-[350px] bg-base-100'>
                  <span className='font-bold text-lg'>Your cart is empty :(</span>
                  <AiOutlineShopping size={80} className='text-center mx-auto' />
                  <span className='text-info'>Subtotal: ${totalPrice}</span>
                  <div className='card-actions'>
                    <a className='btn btn-primary btn-block' href='/products'>Continue Shopping</a>
                  </div>
                </div>
              </div>}
            {totalQuantities > 0 &&
              <div tabIndex={0} className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'>
                <div className='card-body w-[350px] bg-base-100'>
                  <span className='font-bold text-lg'>{totalQuantities} Items</span>
                  <ul>
                    <li class='flex items-center gap-4'>
                      <img src='https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=830&amp;q=80' alt='' class='h-16 w-16 rounded object-cover' />
                      <div>
                        <h3 class='text-sm text-gray-900'>Basic Tee 6-Pack</h3>
                        <dl class='mt-0.5 space-y-px text-[14px] text-gray-600'>
                          <div>
                            <dt class='inline'>Price: </dt>
                            <dd class='inline'>$8000</dd>
                          </div>
                        </dl>
                      </div>
                      <div class='flex flex-col flex-1 items-center justify-end gap-2'>
                        <button class='text-gray-600 transition hover:text-red-600'>
                          <span class='sr-only'>Remove item</span>
                          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='h-4 w-4'>
                            <path stroke-linecap='round' stroke-linejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0' />
                          </svg>
                        </button>
                        <div className='flex flex-col gap-2'>
                          <label htmlFor='Quantity' className='sr-only'> Quantity</label>
                          <div className='flex items-center'>
                            <button
                              type='button'
                              className='w-8 h-8 text-center border-2 text-gray-600 transition hover:opacity-75'
                              onClick={() => decQty()}
                            >
                              &minus;
                            </button>

                            <input
                              type='number'
                              id='Quantity'
                              value={qty}
                              className='h-8 border-2 border-gray-400 w-8 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none'
                              disabled
                            />

                            <button
                              type='button'
                              className='w-8 h-8 border-2 text-center text-gray-600 transition hover:opacity-75'
                              onClick={() => incQty()}
                            >
                              &#43;
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <span className='text-info'>Subtotal: ${totalPrice}</span>
                  <div className='card-actions'>
                    <button className='btn btn-primary btn-block'>View cart</button>
                  </div>
                </div>
              </div>}
          </div>

          <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full'>
                <img src='https://cdn.discordapp.com/avatars/576225400854675476/1cad831b797ee36d597c253c832012c9.webp?size=128' />
              </div>
            </label>
            <ul tabIndex={0} className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
              <li>
                <a className='justify-between'>
                  Profile
                  <span className='badge'>New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Header
