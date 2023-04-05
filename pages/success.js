import React, { useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'
import { useStateContext } from '@/context/stateContext'
import { runFireworks } from '@/lib/utils'

const succes = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()

  useEffect(() => {
    window.localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantities(0)
    runFireworks()
  },
  [])

  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your purchase!</h2>
        <p className='email-msg'>Check your email inbox for the receipt.</p>
        <p className='description'>
          If you have any questions, please contact us at <Link href='mailto:order@example.com' className='email'>order@example.com</Link>
        </p>
        <Link href='/'>
          <button type='button' width='300px' className='btn'>Continue Shopping</button>
        </Link>
      </div>
    </div>
  )
}

export default succes
