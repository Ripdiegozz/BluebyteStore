import React, { useEffect } from 'react'
import Link from 'next/link'
import { TbError404Off } from 'react-icons/tb'
import { useStateContext } from '@/context/stateContext'

const succes = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()

  useEffect(() => {
    window.localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantities(0)
  },
  [])

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon-canceled'>
          <TbError404Off />
        </p>
        <h2 className='text-center'>Something went wrong with your purchase :(</h2>
        <p className='description'>
          If you have any problem completing your purchase, please contact us at <Link href='mailto:order@example.com' className='email'>order@example.com</Link>
        </p>
        <Link href='/'>
          <button type='button' width='300px' className='btn'>Continue Shopping</button>
        </Link>
      </div>
    </div>
  )
}

export default succes
